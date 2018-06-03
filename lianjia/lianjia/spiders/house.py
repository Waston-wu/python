import re
import json
import time
from scrapy.spider import Spider
# 学习链接：http://www.jb51.net/article/57183.htm
class ExampleSpider(Spider):
    name = 'house'
    urls = []
    with open("D:/phpStudy/WWW/python/lianjia/tmp/lianjia/" + time.strftime('%Y-%m-%d', time.localtime()) + ".json", 'r') as f:
        temp = json.loads(f.read())
        for url in temp:
            urls.append(url['url'])
    # 去重
    start_urls = []
    for url in urls:
        if url not in start_urls:
            start_urls.append(url)

    def parse(self, response):
        # 总价格
        totalPrice = response.xpath("//span[@class='total']/text()").extract_first()
        # 标题
        title = response.xpath("//h1[@class='main']/text()").extract_first()
        # 单价
        unitPrice = response.xpath("//span[@class='unitPriceValue']/text()").extract_first()
        # 税
        taxText = response.xpath("//span[@id='PanelTax']/text()").extract_first()
        # 厅室
        roomInfo = response.xpath("//div[@class='room']/div[@class='mainInfo']/text()").extract_first()
        # 楼层
        floorInfo = response.xpath("//div[@class='room']/div[@class='subInfo']/text()").extract_first()
        # 目前楼层
        nowFloorInfo = floorInfo.split('/')[0]
        # 总楼层
        totalFloorInfo = floorInfo.split('/')[1]
        # 朝向
        orientationInfo = response.xpath("//div[@class='type']/div[@class='mainInfo']/text()").extract_first()
        # 装修
        renovationInfo = response.xpath("//div[@class='type']/div[@class='subInfo']/text()").extract_first()
        # 面积
        areaInfo = response.xpath("//div[@class='area']/div[@class='mainInfo']/text()").extract_first()
        area = re.sub("\D", "", areaInfo) # 面积数字
        # 建筑信息
        bulidInfo = response.xpath("//div[@class='area']/div[@class='subInfo']/text()").extract_first()
        yearsInfo = re.sub("\D", "", bulidInfo.split('/')[0]) # 年代
        bulid = bulidInfo.split('/')[1] # 建筑方式

        # 小区名称
        communityName = response.xpath("//div[@class='communityName']/a/text()").extract_first()
        # 位置信息
        positionInfo = response.xpath("//div[@class='areaName']/span[@class='info']/a/text()").extract()
        countyInfo = positionInfo[0]
        townInfo = positionInfo[1]
        # 看房时间
        visitTime = response.xpath("//div[@class='visitTime']/span[@class='info']/text()").extract_first()
        # 链家编号
        houseId = response.xpath("//div[@class='houseRecord']/span[@class='info']/text()").extract_first()

        # 基本信息
        basicInfo = response.xpath("//div[@class='base']/div[@class='content']/ul/li/text()").extract()
        houseType = basicInfo[0]
        houseContruct = basicInfo[3]
        inArea = basicInfo[4]
        bulidType = basicInfo[5]
        bulidConstruct = basicInfo[7]
        ladder = basicInfo[9]
        hasLift = basicInfo[10]
        propetyYear = re.sub("\D", "", basicInfo[11])
        # 交易信息
        transactionInfo = response.xpath("//div[@class='transaction']/div[@class='content']/ul/li/span[2]/text()").extract()
        recordTime = transactionInfo[0] # 挂牌时间
        transactionType = transactionInfo[1] # 交易权属
        lastTransationTime = transactionInfo[2] # 上次交易
        houseFor = transactionInfo[3] # 房屋用途
        houseYear = transactionInfo[4] # 房屋年限
        powerFor = transactionInfo[5] #产权所有
        mortgageInfo = transactionInfo[6] #抵押信息
        permitInfo = transactionInfo[7] #房本备件

        try:
            yield {
                'totalPrice': totalPrice,
                'title': title,
                'unitPrice': unitPrice,
                'taxText': taxText,
                'nowFloorInfo': nowFloorInfo,
                'totalFloorInfo': totalFloorInfo,
                'orientationInfo': orientationInfo,
                'renovationInfo': renovationInfo,
                'area': area,
                'yearsInfo': yearsInfo,
                'bulid': bulid,
                'communityName': communityName,
                'countyInfo': countyInfo,
                'townInfo': townInfo,
                'visitTime': visitTime,
                'houseId': houseId,
                'houseType': houseType,
                'houseContruct': houseContruct,
                'inArea': inArea,
                'bulidType': bulidType,
                'bulidConstruct': bulidConstruct,
                'ladder': ladder,
                'hasLift': hasLift,
                'propetyYear': propetyYear,
                'recordTime': recordTime,
                'transactionType': transactionType,
                'lastTransationTime': lastTransationTime,
                'houseFor': houseFor,
                'houseYear': houseYear,
                'powerFor': powerFor,
                'mortgageInfo': mortgageInfo,
                'permitInfo': permitInfo,
            }
        except:
            pass

