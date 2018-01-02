# -*-coding:utf-8-*-

from bs4 import BeautifulSoup
import requests
import time
from echarts import Echart,Bar,Axis

TEMPERATURE_LIST = []
CITY_LIST = []
MIN_LIST = []
MAX_LIST = []

def get_temperature(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3298.4 Safari/537.36',
        'Content-Type': 'text/html; charset=UTF-8'
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        r = response.text
        # req = r.encode(response.encoding).decode(requests.utils.get_encodings_from_content(r)[0])
        req = r.encode(response.encoding).decode(response.apparent_encoding)

        soup = BeautifulSoup(req, 'lxml')
        com_mid_list = soup.find('div', class_='conMidtab').find_all('div', class_='conMidtab2')
        for x in com_mid_list:
            # 前2个为表头，排除
            tr_list = x.find_all('tr')[2:]
            province = ''
            for index, tr in enumerate(tr_list):
                td_list = tr.find_all('td')
                # 如果是第0个，省份在第一个td，城市在第二个td
                if index == 0:
                    province = td_list[0].text.replace('\n', '')
                    city = td_list[1].text.replace('\n', '')
                    max = td_list[4].text.replace('\n', '')
                    min = td_list[7].text.replace('\n', '')
                else:
                    city = td_list[0].text.replace('\n', '')
                    max = td_list[3].text.replace('\n', '')
                    min = td_list[6].text.replace('\n', '')

                # print('%s|%s|%s' %(province+city, min, max))
                TEMPERATURE_LIST.append({
                    'city': province+'-'+city,
                    'max': max,
                    'min': min
                })
                CITY_LIST.append(province+'-'+city)
                MIN_LIST.append(min)
                MAX_LIST.append(max)

def main():
    urls = [
        'http://www.weather.com.cn/textFC/hb.shtml',
        # 'http://www.weather.com.cn/textFC/db.shtml',
        # 'http://www.weather.com.cn/textFC/hd.shtml',
        # 'http://www.weather.com.cn/textFC/hz.shtml',
        # 'http://www.weather.com.cn/textFC/hn.shtml',
        # 'http://www.weather.com.cn/textFC/xb.shtml',
        # 'http://www.weather.com.cn/textFC/xn.shtml',
    ]
    for url in urls:
        get_temperature(url)
        time.sleep(2)

    echarts = Echart(u'温度排名')
    bar_x = Bar(u'最低温度', MIN_LIST)
    bar_y = Bar(u'最高温度', MAX_LIST)
    axis = Axis('category', 'bottom', data=CITY_LIST)
    echarts.use(bar_x)
    echarts.use(bar_y)
    echarts.use(axis)
    echarts.plot()

if __name__ == '__main__':
    main()
