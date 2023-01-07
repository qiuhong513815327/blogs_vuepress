# vue cli 4.0.5 的使用
## 1、创建项目
`vue create '项目名'` 

## 2、手动选择配置选项
这里我们一般手动配置<br />![image.png](/createVueCli/vueCli2.png)

## 3、选择需要的依赖
![image.png](/createVueCli/vueCli3.png)<br />
这里的话按住空格就是选择，全选的话就是按住a

- Babel ：转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。
- TypeScript ： TypeScript是一个JavaScript（后缀.js）的超集（后缀.ts）包含并扩展了 JavaScript 的语法，需要被编译输出为 JavaScript在浏览器运行
- Progressive Web App (PWA) Support ： 渐进式Web应用程序
- Router ： vue-router（vue路由）
-  Vuex ： vuex（vue的状态管理模式）
-  CSS Pre-processors ： CSS 预处理器（如：less、sass）
-  Linter / Formatter ：代码风格检查和格式化（如：ESlint）
-  Unit Testing ： 单元测试（unit tests）
-  E2E Testing ： e2e（end to end） 测试

## 4. 选择是否使用history router模式
Vue-Router 利用了浏览器自身的hash 模式和 history 模式的特性来实现前端路由（通过调用浏览器提供的接口）。 我这里建议选n。这样打包出来丢到服务器上可以直接使用了，后期要用的话，也可以自己再开起来。 选yes的话需要服务器那边再进行设置。 Use history mode for router? (Requires proper server setup for index fallback in production)<br />
![image.png](/createVueCli/vueCli4.png)

## 5. 选择css 预处理器
![image.png](/createVueCli/vueCli5.png)

## 6. 选择Eslint 代码验证规则
![image.png](/createVueCli/vueCli6.png)
## 6.1 选择什么时候进行检测
![image.png](/createVueCli/vueCli6.1.png)

## 7.选择单元测试
这个需要根据自己的情况而定<br />
![image.png](/createVueCli/vueCli7.png)

## 8.选择如何存放配置
![image.png](/createVueCli/vueCli8.png)

## 9.选择是否保存当前的配置
一般是不保存的，因为根据项目的不同，相应的配置也会不同<br />
![image.png](/createVueCli/vueCli9.png)

## 10. 成功后就可以访问了
`cd 文件名`<br />
`npm run serve`
