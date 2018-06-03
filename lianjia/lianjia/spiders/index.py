from scrapy.spider import Spider
# 学习链接：http://www.jb51.net/article/57183.htm
# 获取所有二手房的链接
class ExampleSpider(Spider):
    name = 'lianjia'
    url = 'https://sh.lianjia.com/ershoufang/'
    position = ['pudong', 'minhang', 'baoshan', 'xuhui', 'putuo', 'yangpu', 'changning', 'songjiang', 'jiading',
                'huangpu', 'jiangan', 'zhabei', 'hongkou', 'qingpu', 'fengxian', 'jinshan', 'chongming',
                'shanghaizhoubian']
    price = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7']
    area = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7']
    start_urls = [];
    for po in position:
        for p in price:
            for a in area:
                new_url = url + po + '/' + p + a
                start_urls.append(new_url)

    def parse(self, response):
        house_url = response.xpath("//div[@class='title']/a/@href").extract()
        for url in house_url:
            try:
                yield {
                    'url' : url
                }
            except:
                pass

