#-*-coding:utf-8-*- 

import matplotlib.pyplot as plt
from wordcloud import WordCloud
import jieba
import os

font = os.path.join(os.path.dirname(__file__), "ttf/DroidSansFallbackFull.ttf")

text_from_file_with_apath = open('word/1.txt', 'r', encoding='UTF-8').read()

wordlist_after_jieba = jieba.cut(text_from_file_with_apath, cut_all = True)
wl_space_split = " ".join(wordlist_after_jieba)

my_wordcloud = WordCloud(font_path=font).generate(wl_space_split)

plt.imshow(my_wordcloud)
plt.axis("off")
plt.show()
