#-*-coding:utf-8-*-

import scrapy

class test(scrapy.Spider):
    name = 'budejie'
    start_url = ['http://www.budejie.com/text']

    def parse(self, response):
        lies = response.css('div.j-r-list > ul > li')
        for li in lies:
            username = li.css('a.u-user-name::text').extract()
            content = li.css('div.j-r-list-c-desc a::text').extract()
            yield  {'username':username,'content':content}