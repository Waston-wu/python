from scrapy.spider import Spider
# 学习链接：http://www.jb51.net/article/57183.htm
# 获取所有二手房的链接
class ExampleSpider(Spider):
    name = 'test'
    start_urls = ['https://sh.lianjia.com/ershoufang/pg1']

    def parse(self, response):
        house_url = response.xpath("//div[@class='title']/a/@href").extract()
        for url in house_url:
            try:
                yield {
                    'url' : url
                }
            except:
                pass

