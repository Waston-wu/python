#-*-coding:utf-8-*-

import requests
from bs4 import BeautifulSoup
import time


nums = [1,0,0,1]
for i in range(len(nums)):
    if (nums[0] == 0):
        nums.append(0)
        del nums[0]
        break
    if (nums[i] == 0):
        nums.append(0)
        del nums[i]
for i in range(len(nums)):
    if (nums[0] == 0):
        nums.append(0)
        del nums[0]
        break
    if (nums[i] == 0):
        nums.append(0)
        del nums[i]
print(nums)
