#-*-coding:utf-8-*-

# 抓取试用网上的商品信息，同时进行分类
from bs4 import BeautifulSoup
import requests
import time
import pymysql

def get_goods(url):
    # 手机请求头
    headers_mobile = {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3298.4 Mobile Safari/537.36',
        'Upgrade-Insecure-Requests': '1',
        'Host': 'www.shiyong.com',
        'Referer': 'http://www.shiyong.com',
    }
    # 电脑请求头
    headers_pc = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3298.4 Safari/537.36',
        'Upgrade-Insecure-Requests': '1',
        'Host': 'www.shiyong.com',
        'Referer': 'http://www.shiyong.com',
    }
    response = requests.get(url, headers=headers_mobile)
    if response.status_code == 200:
        r = response.text
        req = r.encode(response.encoding).decode(response.apparent_encoding)

        soup = BeautifulSoup(req, 'lxml')
        # 这里是所有的商品信息
        goods_list = soup.find_all('dl', class_='pro-box')
        # 遍历子信息
        for index, goods_info in enumerate(goods_list):
            print('当前网页'+url+':第'+str(index+1 )+'个！')
            # 商品标题
            goods_title = goods_info.find('h2').find('a').text
            # 平台
            tubiao = goods_info.find('h2').find_all('i')
            goods_plat_class = tubiao[0]['class'][1]
            if (goods_plat_class == 'icon-taobao'):
                goods_plat = '淘宝'
            elif (goods_plat_class == 'icon-tianmao1'):
                goods_plat = '天猫'
            elif (goods_plat_class == 'icon-ico-3'):
                goods_plat = '京东'
            else:
                goods_plat = goods_plat_class
            # 是否支持花呗(0：不支持 1：支持)
            is_huabei = int(len(tubiao)) - 1
            # 申请人数
            goods_apply = goods_info.find_all('p', class_='clearfix')[0].find_all('b')[0].text
            # 剩余份数
            goods_left = goods_info.find_all('p', class_='clearfix')[0].find_all('b')[1].text
            # 商品价格
            goods_price = goods_info.find_all('p', class_='clearfix')[1].find('span').text.replace('¥ ', '')
            # 商品链接
            goods_link = 'http://www.shiyong.com' + goods_info.find_all('p', class_='clearfix')[1].find('a')['href']
            # 商品id
            goods_id = goods_info.find_all('p', class_='clearfix')[1].find('a')['href'].split('/')[2].split('.')[0]
            # 商品图片
            goods_image = 'http://www.shiyong.com'+goods_info.find('img')['src']
            # 获取商家信息
            response_business = requests.get(goods_link, headers=headers_pc)
            if response_business.status_code == 200:
                b = response_business.text
                res = b.encode(response_business.encoding).decode(response_business.apparent_encoding)
                soup_business = BeautifulSoup(res, 'lxml')
                # 商家信息
                business_info = soup_business.find('div', class_='info-data-supplement1 fr f-12')
                # 商家在网站的等级
                business_grade_info = soup_business.find('div', class_='border-b pd5-1 mb10').find('span')
                if (business_grade_info.find('img') == None):
                    business_grade = business_grade_info.text.replace('\n', '')
                else:
                    business_img = business_grade_info.find('img')['src']
                    business_grade = '<img src="http://www.shiyong.com'+business_img+'">'
                # 商家平台
                business_plat = business_info.find_all('li')[0].find('span').text
                # 商家主营类目
                business_sale = business_info.find_all('li')[1].find('span').text
                # 商家评分
                business_sock = len(business_info.find_all('li')[2]) - 1
                # 获取商品剩余时间
                business_time_text = soup_business.find_all('script')[4].text
                first = business_time_text.find('new showTime(') + 13
                last = business_time_text.find(');', first)
                business_time_int = int(business_time_text[first:last])
                timeArray = time.localtime(time.time() + business_time_int)
                business_time = time.strftime("%Y-%m-%d %H:%M:%S", timeArray)
            # 存入本地数据库

            # 打开数据库连接
            db = pymysql.connect("localhost", "root", "123456", "yii2basic", charset="utf8")

            # 使用cursor()方法获取操作游标
            cursor = db.cursor()

            # SQL 插入语句
            sql = "INSERT INTO y_shiyong(goods_id,goods_title,goods_plat,goods_apply,goods_left,goods_price,goods_link, \
                    business_plat, business_grade, business_sale, business_sock, business_time, goods_image, is_huabei) \
                   VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s' )  \
                   ON DUPLICATE KEY UPDATE goods_title='%s',goods_plat='%s',goods_apply='%s',goods_left='%s',goods_price='%s',goods_link='%s', \
                    business_plat='%s', business_grade='%s', business_sale='%s', business_sock='%s', business_time='%s', goods_image='%s', is_huabei='%s' " % \
                  (goods_id, goods_title, goods_plat, goods_apply, goods_left, goods_price, goods_link,
                   business_plat, business_grade, business_sale, business_sock, business_time, goods_image, is_huabei
                   , goods_title, goods_plat, goods_apply, goods_left, goods_price, goods_link,
                   business_plat, business_grade, business_sale, business_sock, business_time, goods_image, is_huabei
                   )
            try:
                # 执行sql语句
                cursor.execute(sql)
                # 提交到数据库执行
                db.commit()
            except Exception:
                # 如果发生异常，则回滚
                print("发生异常", Exception)
                db.rollback()
                print(sql)

            # 关闭数据库连接
            db.close()
            # 休息一段时间，防止访问频繁
            time.sleep(2)

def main():
    for x in range(1, 20):
        get_goods('http://www.shiyong.com/mianfei?page=' + str(x))

if __name__ == '__main__':
    main()
