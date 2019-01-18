import json
import time
# with open("./lianjia/tmp/lianjia/"+time.strftime('%Y-%m-%d',time.localtime())+".json", 'r') as f:
#   temp = json.loads(f.read())
#   for url in temp:
#       print(url['url'])
#       break
l1 = [1,2,3]
l2 = [2,3,4]
num1 = ''
num2 = ''
print(list(reversed(l1)))
for value in list(reversed(l1)):
    num1 = str(value) + num1

for value in list(reversed(l2)):
    num2 = str(value) + num2

num3 = int(num1) + int(num2)

result = []

for value in str(num3):
    result.append(value)

print(result)