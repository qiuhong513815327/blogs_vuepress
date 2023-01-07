# 移动端BUG记录

## 安卓的line-height兼容问题
<font color=#67C23A>可以用flex布局或者transform：translate偏移配合定位来实现</font>

## 移动端的10px以下显示问题
<font color=#67C23A>字体像素尽量用12px</font>

## vant的list组件的finish状态改变会触发loading事件
<font color=#67C23A>在页面列表是根据选中条件的渲染时，切换条件要先判断finish是否触底，也就是finish为true的时候，先进行列表的数据清空，再将finish状态置为false</font>

## 移动端的transform属性会部分失效
<font color=#67C23A>需要写在行内属性里面移动端的0.5px需要借助transform：scale(0.5)缩放1px，同时原尺寸大小会占据位置，需要脱标来是来清楚占位</font>

## ios和Android关于日期的格式兼容
```javascript
new Date('2022-08-31 15:15:15')
new Date('2022.08.31 15:15:15')
```
<font color=#67C23A>这两种格式在ios环境皆会报错：invalidtime 需要改成用‘/’连接</font>

```javascript
new Date('2022-08-31 15:15:15'.replace(/\-/g, '/'))
new Date('2022.08.31 15:15:15'.replace(/\./g, '/'))
```



