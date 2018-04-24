#-*-coding:utf-8-*- 

# 图片识别
from PIL import Image
import pytesseract
text = pytesseract.image_to_string(Image.open('images/3.png'), lang='chi_sim')
print(text)