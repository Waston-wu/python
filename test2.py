#-*-coding:utf-8-*-

import requests
from bs4 import BeautifulSoup

response_business = requests.get('http://www.shiyong.com/id/56575.html')
if response_business.status_code == 200:
    b = response_business.text
    res = b.encode(response_business.encoding).decode(response_business.apparent_encoding)
    soup_business = BeautifulSoup(res, 'lxml')
    # 商家在网站的等级
    business_grade_info = soup_business.find('div', class_='border-b pd5-1 mb10').find('span')
    # if (business_grade_info.find('img') == 'None'):
    #     business_grade = business_grade_info.text.replace('\n', '')
    # else:
    #     business_img = business_grade_info.find('img')['src']
    #     business_grade = '<img src="http://www.shiyong.com' + business_img + '">'
    print(business_grade_info.find('img') == None)