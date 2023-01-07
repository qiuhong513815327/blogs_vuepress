# 饿了么UI组件BUG

## 饿了么的树形控件
如果外部容器的样式用了line-height的样式会出现下拉白边回弹。<br />
<font color=#67C23A>需要撤掉外部容器的行高样式。</font>

## 饿了么UI的表格组件的tooltip属性
- 在做文字裁剪的时候，裁剪的字符在3个以内的时候，IE浏览器悬停到该位置时不出现tooltip。<br />
<font color=#67C23A>手写一个方法控制tooltip的显示</font>

```vue
<template>
  <el-table
    :data="tableData"
    empty-text
    border
    style="width: 100%; margin-top: 20px"
    height="250"
    @cell-mouse-enter="tool"
  >
    <el-table-column label="数值 1（元）" width="200" fixed>
      <template slot-scope="scope">
        <el-tooltip placement="bottom" :content="scope.row.amount1" :disabled="scope.row.tooltipDisabled === 'amount1'">
            <span class="content">{{scope.row.amount1}}</span>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    tool(row, column, cell, event) {
      if (cell.children[0] && cell.children[0].children[0]) {
        let cellDom = cell.children[0];
        let content = cellDom.children[0];
        let cellWidth = cellDom.offsetWidth - 20;
        let contentWidth = content.offsetWidth;
        if (cellWidth < contentWidth) {
          console.log(row,column,cell,event)
        }
      }
    }
  }
}

</script>
```
这里的代码只是做了文字出现裁剪的判断，还没找到给每个tooltip加唯一标识的办法

- element的tooltip组件，鼠标悬停在目标并出现tooltip提示时，用快捷键切换到其他窗口的页面或者悬停完点击该目标跳转到新页面，完成以上操作再回到原来页面，此时鼠标已经没有悬停在目标上了，tooltip还会出现该目标上面。出现原因主要是悬停的时候焦点落在该目标上，所以鼠标就算没有悬停在目标上依然会有tooltip出现。<br />
<font color=#67C23A>可以用一个空的input表单盒子并且绝对定位到某个位置，给document元素绑定（切换页面事件名）visibilitychange，完成切换页面的操作时，document.visibilityState值不为hidden时（也就是页面为用户可见，只是切换了浏览器标签页），让该页面的焦点落在空input盒子上。</font>

```html
<div :style="{ position: 'absolute',top: '0',left: '0'}">
  <
  	input ref="goat" 
    type="text"
    :style="{ 
      width: 0,
      border: 0,
      boxSizing: 'border-box',
      visibility
  	}"
  />
</div>  
  
```

```javascript
mounted() {
	document.addEventListener('visibilitychange',this.hideAlltooltips)
}
beforeDestroy() {
	document.removeEventListener('visibilitychange',this.hideAlltooltips)
}
mothods: {
	hideAlltooltips() {
  	if(document.visibilityState !== 'hidden') {
    	setTimeout(()=>{
        this.refs.goat.focus()
      },100)
    }
  }
}
```

> 1、visibilitychange<br />
浏览器标签页被隐藏或显示的时候会触发visibilitychange事件。<br />

>   2、visibilityState<br />
visible：页面内容可以至少部分可见。实际上，这意味着页面是非最小化窗口的前景选项卡。<br />
hidden：页面内容对用户不可见。实际上，这意味着文档可以是后台选项卡，也可以是最小化窗口的一部分，或者OS屏幕锁定处于活动状态。<br />
prerender：页面内容正在预呈现，并且对用户不可见（被视为隐藏用途document.hidden （document.hidden只读属性，返回布尔值，表示页面是（true）否（false）隐藏））。文档可以在此状态下启动，但永远不会从另一个值转换到它。注意：浏览器支持是可选的。



## 饿了么表格组件点击问题
数据为空时，固定列位置的横向滚动条不能点击。<br />
<font color=#67C23A>可以在页面刷新时，获取该固定列的dom元素，由于该元素采用定位遮挡了滚动条，可以在拿到dom元素的时候调整盒子的高度不去覆盖底下横向滚动条，并且在mounted的周期钩子需要做500ms的延时，页面渲染可能还没完成，需要做延时处理</font>

```javascript
// 处理空数据时，固定列不能滑动滚动条
let fixedDom = document.querySelectorAll('.el-table__fixed')[1]
  if (this.tableData.length === 0) {
    setTimeout(function() {
      fixedDom.style.height = '140px'
      fixedDom.style.width = '374px'
    }, 500)
}
```

## v-loading的组件显示问题
包裹在dom的标签上，在IE浏览器会出现全屏化，而不是包裹在指定盒子的标签上。<br />
<font color=#67C23A>需要在包裹的上加上行内样式style="position:relative"。另外，可能由于IE浏览器的性能加载慢，会出现loading一直关不掉。这时候需要在请求时，延时处理loading的关闭。</font>

```javascript
 async memberDetailInfo() {
      if (this.company.companyName === '') {
        return
      }
      let res
      this.loading = true
      try {
        res = await service.memberDetailInfo({
          customerName: this.company.companyName,
          pageNum: this.pageNum,
          pageSize: this.pageSize
        })
      } catch (error) {
        this.loading = false
        return
      }
      await new Promise(r => {
        setTimeout(() => {
          r()
          this.loading = false
        }, 300)
      })
      if (res.code === '200') {
        this.tableData = []
        this.tableData = res.data.list || []
        this.total = res.data.total || 0
        this.pages = res.data.pages || 1
        // console.log(this.tableData)
      }
    }
```

## 表格组件高度宽度异常
在做tabs页面动态渲染时，如果tabs页1表格渲染结果为表头为多级表头嵌套，切换tabs页2的其他表格的表头为一级表头，会出现高度异常<br />
<font color=#67C23A>使用多个el-table并使用v-show动态切换tabs隐藏显示，注意不能用v-if，多个el-table分别用来渲染同类型结构的表格</font>

## el-textarea的文本框高度在IE和非IE下不一样
<font color=#67C23A>需要给  el-textarea__inner  定死高度，而rows的属性会失效，相当于rows的行数设置是在动态设置高度</font>

