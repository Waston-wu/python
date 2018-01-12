#-*-coding:utf-8-*- 

from bs4 import BeautifulSoup
import requests
import json
import random
import execjs
import time

NETEASE_P2 = '010001'
NETEASE_P3 = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
NETEASE_P4 = '0CoJUm6Qyw8W8jud'


# 飙升榜 'http://music.163.com/#/discover/toplist?id=19723756' 这里一定要将#号删掉，不然一直返回首页
url = 'http://music.163.com/discover/toplist?id=19723756'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3298.4 Safari/537.36',
    'Host': 'music.163.com'
}

response = requests.get(url, headers=headers)

soup = BeautifulSoup(response.text, 'lxml')
# 获得榜单json数据
json_data = json.loads(soup.find('textarea').text)
for music_data in json_data:
    # 音乐id
    music_id = music_data['id']
    # 音乐链接
    music_link = 'https://music.163.com/song?id='+str(music_id)

    with open("core1.js", "r") as f:
        js_code = f.read()
        p = execjs.compile(js_code).call('d', '{"id": %s,"lv": -1,"tv": 1,"csrf_token": ""}' %music_id,
                                         NETEASE_P2, NETEASE_P3, NETEASE_P4)
        req = requests.post('http://music.163.com/weapi/v1/resource/comments/R_SO_4_'+str(music_id)+'?csrf_token=',
                            data={
                                'params': p['encText'],
                                'encSecKey': p['encSecKey']
                            },
                            headers = headers )
        comment_json = json.loads(req.text)
        print(comment_json)
        time.sleep(2)

