#-*-coding:utf-8-*-

import requests
from bs4 import BeautifulSoup
import time

timeArray = time.localtime(time.time())
otherStyleTime = time.strftime("%Y-%m-%d %H:%M:%S", timeArray)
print(otherStyleTime)

response_business = requests.get('http://www.shiyong.com/id/5675.html')
if response_business.status_code == 200:
    b = response_business.text
    res = b.encode(response_business.encoding).decode(response_business.apparent_encoding)
    soup_business = BeautifulSoup(res, 'lxml')

    a = soup_business.find_all('script')[3].text
    first = a.find('new showTime(')+13
    last = a.find(');',a.find('new showTime('))
    timeStamp = (a[first:last])
    print(int(timeStamp))