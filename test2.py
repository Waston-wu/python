import json
import time
with open("./lianjia/tmp/lianjia/"+time.strftime('%Y-%m-%d',time.localtime())+".json", 'r') as f:
  temp = json.loads(f.read())
  for url in temp:
      print(url['url'])
      break
