# Silvery

## 状态： Alpha ，早期测试

Alpha ，早期测试

## 预览

[预览 https://akimotorakiyu.github.io/SilveryUI/UI/](https://akimotorakiyu.github.io/SilveryUI/UI/)

## 开发

```bash
# 安装依赖
npm install

# 启动编译
npm run style

# 新建bash，启动服务器
npm run browesersync

# 浏览器访问 `${baseurl}`/ui

```

## 分离

容器与内容分离，表现与布局分离

*　单纯容器
*　单纯功能
*　单纯色彩
*　单纯布局

## 色彩

* 亮感层级
* 鲜明对比

### 亮感层级

以LAB色彩空间为基础，颜色剥离为亮度-L与色彩-AB两部分。颜色以亮度-L为准区分层级，在应用时，同一意义下的颜色应为相同的亮度。（虽然HSB色彩空间的色觉感受并不均匀。）

### 对比鲜明

以LAB色彩空间为基础，颜色剥离为亮度-L与色彩-AB两部分。颜色以-AB为准区分对比。

## 矢量卡片

一切皆卡片

* 颜色区分
* 相对缩放
* 层级卡片

### 颜色区分

以颜色来区分不同层级的卡片

### 相对缩放

不同层级之间的内边距外边距按比例缩放

### 层级卡片

容器与容器之间的包含关系以层级的方式展现

## 尺寸基础

* 字高基础
* 指数缩放

### 自高基础

所有的相对尺寸以所在的层级的字体的高度为基础

### 指数缩放

以基础尺寸为基础进行等比缩放，即指数缩放

### 灵感keyBoard

![](./keyboard.svg)
