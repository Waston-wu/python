#-*-coding:utf-8-*-
# from：https://github.com/happyte/plane/blob/master/plane.py
import pygame
import time
import random
from PIL import Image

# 定义背景宽高
background_img_url = 'images/bg.jpg'
background_image = Image.open(background_img_url)
background_width, background_height = background_image.size

# 我方战机
player_img_url = 'images/me.png'
player_image = Image.open(player_img_url)
player_width, player_height = player_image.size
pygame.init()

# 敌方战机
enemy_img_url_list = [
    'images/e1.png',
    'images/e2.png',
    'images/e3.png',
]

# 我方战机子弹
player_bullet_img_url = 'images/b_up.png'
# 发射子弹最短间隔时间
player_bullet_shoot_sleep_time = 0.5
enemy_bullet_shoot_sleep_time = 0.8
# 敌机出现时间间隔
enemy_sleep_time = 1
enemy_show_last_time = time.time()  # 敌机最后出现时间
# 敌方战机子弹
enemy_bullet_img_url = 'images/b_down.png'
bullet_image = Image.open(enemy_bullet_img_url)
bullet_width, bullet_height = bullet_image.size
# 定义爆炸图片
boom_img_url = 'images/boom.gif'

# 定义每次移动距离
move_step_0 = 0.3
move_step_1 = 1
move_step_2 = 2
move_step_3 = 3
move_step_4 = 4

# 定义屏幕大小和标题
screen = pygame.display.set_mode((background_width, background_height))
pygame.display.set_caption('飞机大战')

# 飞机类
class Plane(object):
    def __init__(self):
        # 上次发射时间
        self.last_shoot_time = time.time()
        # 子弹列表
        self.bullet_list = []
    # 绘制战机
    def draw(self, screen):
        screen.blit(self.image, [self.x, self.y])
    # 发射子弹
    def shoot(self):
        if( self.plane_name == 'player'):
            sleep_time = player_bullet_shoot_sleep_time
        else:
            sleep_time = enemy_bullet_shoot_sleep_time
        if time.time() - self.last_shoot_time > sleep_time:
            self.last_shoot_time = time.time()  # 更新发送时间
            self.bullet_list.append(Bullet(self.plane_name, int(self.x) + int(player_width)/2 - int(bullet_width)/2, int(self.y) - int(bullet_height)))

# 我方战机
class Player(Plane):
    def __init__(self):
        Plane.__init__(self)
        self.image = pygame.image.load(player_img_url).convert()
        self.plane_name = 'player'

        # 初始坐标
        self.x = int(background_width)/2 - int(player_width)/2
        self.y = int(background_height) - int(player_height)

    # 按键移动
    def move(self, key):
        if key == 'left':
            self.x -= move_step_1
        elif key == 'right':
            self.x += move_step_1
        elif key == 'up':
            self.y -= move_step_1
        elif key == 'down':
            self.y += move_step_1
        # 判断飞机是否超界
        if self.x > int(background_width) - int(player_width):
            self.x = int(background_width) - int(player_width)
        elif self.x < 0:
            self.x = 0
        if self.y > int(background_height) - int(player_height):
            self.y = int(background_height) - int(player_height)
        elif self.y < 0:
            self.y = 0

# 子弹类
class Bullet(object):
    def __init__(self, plane_name, x, y):
        self.x = x
        self.y = y
        # 敌机
        if plane_name == 'enemy':
            self.image_url = enemy_bullet_img_url
            self.direction = 'down'
            self.y += int(player_height)    # 如果是敌机，子弹初始的位置需要加上机身的高度
        # 我方战机
        elif plane_name == 'player':
            self.image_url = player_bullet_img_url
            self.direction = 'up'
        self.image = pygame.image.load(self.image_url).convert()

    # 将子弹图片加载到屏幕
    def draw(self, screen):
        if self.direction == 'down':
            self.y += move_step_1
        elif self.direction == 'up':
            self.y -= move_step_3
        screen.blit(self.image, (self.x, self.y))

# 敌机
class Enemy(Plane):
    def __init__(self):
        Plane.__init__(self)
        plane_image_url = enemy_img_url_list[random.randint(0, 2)]  # 随机出现1-3敌机图片
        self.image = pygame.image.load(plane_image_url).convert()
        self.plane_name = 'enemy'

        # 初始坐标(横向随机出现)
        self.x = random.randint(int(player_width) / 2, int(background_width) - int(player_width) / 2)
        self.y = 0

    def move(self):
        self.y += move_step_0

# game
class GameInit(object):
    # 敌机群
    enemy_list = []
    # 创建战机
    @classmethod
    def createPlayer(cls):
        cls.player = Player()

    # 创建敌机
    @classmethod
    def createEnemy(cls):
        cls.enemy_list.append(Enemy())

    # 初始化
    @classmethod
    def gameInit(cls):
        cls.createPlayer()

    # 绘制我方战机
    @classmethod
    def draw(cls, screen):
        cls.player.draw(screen)
        for index, e in enumerate(cls.enemy_list):
            e.draw(screen)  # 画出敌机
            if(e.y > background_height):
                cls.enemy_list.pop(index)   # 超界删除该敌机

    # 移动战机
    @classmethod
    def playerMove(cls, key):
        cls.player.move(key)

    # 移动敌机
    @classmethod
    def enemyMove(cls):
        for index, e in enumerate(cls.enemy_list):
            e.move()

    # 发射子弹
    @classmethod
    def shoot(cls):
        cls.player.shoot()
        # 获取我方战机坐标
        player_rect = pygame.Rect(cls.player.image.get_rect())
        player_rect.left = cls.player.x
        player_rect.top = cls.player.y
        # 循环敌机列表
        for index_e, e in enumerate(cls.enemy_list):
            e.shoot()
            # 获取敌机坐标
            enemy_rect = pygame.Rect(e.image.get_rect())
            enemy_rect.left = e.x
            enemy_rect.top = e.y
            # 循环敌机子弹
            for index_e_b, b_e in enumerate(e.bullet_list):
                b_e.draw(screen)
                # 获取敌方子弹坐标
                enemy_bullet_rect = pygame.Rect(b_e.image.get_rect())
                enemy_bullet_rect.left = b_e.x
                enemy_bullet_rect.top = b_e.y
                # 子弹超出屏幕，消失
                if (b_e.y < 0):
                    b_e.bullet_list.pop(index_e_b)
                # 循环我方战机子弹
                for index_p_b, b_p in enumerate(cls.player.bullet_list):
                    b_p.draw(screen)
                    # 获取我方子弹坐标
                    player_bullet_rect = pygame.Rect(b_p.image.get_rect())
                    player_bullet_rect.left = b_p.x
                    player_bullet_rect.top = b_p.y
                    # 子弹超出屏幕，消失
                    if (b_p.y < 0):
                        cls.player.bullet_list.pop(index_p_b)

                    # 判断我方子弹是否和敌机接触(colliderect:判断2个矩形是否重叠)
                    if player_bullet_rect.colliderect(enemy_rect):
                        cls.enemy_list.pop(index_e)  # 敌机删除
                        cls.player.bullet_list.pop(index_p_b)  # 打中的子弹删除

                    # 判断我方子弹是否和敌方子弹接触
                    if player_bullet_rect.colliderect(enemy_bullet_rect):
                        e.bullet_list(index_e)  # 敌机子弹删除
                        cls.player.bullet_list.pop(index_p_b)  # 打中的子弹删除

                    # 判断我方战机和敌机接触
                    if player_rect.colliderect(enemy_rect):
                        print('game over')
                        exit(1)

                    # 判断我方战机和敌方子弹接触
                    if player_rect.colliderect(enemy_bullet_rect):
                        print('game over')
                        exit(1)

if __name__ == '__main__':
    GameInit.gameInit()
    background = pygame.image.load(background_img_url).convert()
    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                exit()
        # 背景图（放在循环内，不然会有重影）
        screen.blit(background, (0, 0))
        # 按键
        key_pressed = pygame.key.get_pressed()
        if key_pressed[pygame.K_w] or key_pressed[pygame.K_UP]:
            GameInit.playerMove('up')
        if key_pressed[pygame.K_s] or key_pressed[pygame.K_DOWN]:
            GameInit.playerMove('down')
        if key_pressed[pygame.K_a] or key_pressed[pygame.K_LEFT]:
            GameInit.playerMove('left')
        if key_pressed[pygame.K_d] or key_pressed[pygame.K_RIGHT]:
            GameInit.playerMove('right')
        # if key_pressed[pygame.K_SPACE]:
        GameInit.shoot()
        # 绘制敌机
        if(time.time() - enemy_show_last_time > enemy_sleep_time):
            GameInit.createEnemy()
            # 随机出现1-2架飞机(25%的概率)
            if(random.randint(0, 3) == 0):
                GameInit.createEnemy()
            enemy_show_last_time = time.time()
        # 移动敌机
        GameInit.enemyMove()
        # 绘制我方战机（这个函数要放在这里，让他每次都刷新成最新的位置，不然动不了）
        GameInit.draw(screen)
        # 更新图片
        pygame.display.update()

