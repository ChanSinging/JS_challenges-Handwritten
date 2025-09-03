## HTML和CSS学习

面试题中总体问的比较少，

标签（上）

**常用标签**

`<div> <span>`没有语义，他是一个盒子，用来装内容

特点：`<div>`用来布局，一行放一个div

`<a href="www.baidu.com">`

**表格标签**   `<td>` `<table>`

`<tr>`签用于定义表格中的行，必须嵌套在`<table> </table>`标签中。

`<td>`于定义表格中的单元格，必须嵌套在`<tr></tr>`标签中。

请说出标签的属性

*   select的属性
    *   autofocus  文本区域加载后自动获得焦点
    *   disable
    *   size
    *   name
    *   require 规定文本区是必填的

**语义化标签**

*   header
*   footer
*   main
*   aside
*   article
*   section
*   address
*   img
*   p

#### HTML5的特性

语义化标签  header nav footer section

媒体标签 audio video

#### HTML的script标签

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1500604/1603547262709-5029c4e4-42f5-4fd4-bcbb-c0e0e3a40f5a.png)

defer 方式加载 script, 不会阻塞 HTML 解析，等到 DOM 生成完毕且 script 加载完毕再执行 Js。

defer或者async属性都是去异步加载外部的JS脚本文件，不会阻塞页面的解析。区别是：

*   执行顺序：async不能保证加载顺序，defer按照加载顺序执行
*   js文件是否并行执行：async属性，表示后续文档的加载和JS是并行的；defer属性，表示后续的文档的加载是在文档加载和解析完才执行JS文件

#### defer和async的使用场景

做一些与渲染方式无关的内容，比如埋点、性能分析、统计这种需要js文件提前执行，可以用到async和defer

***

#### 网站开发中，如何实现图片的懒加载

触发条件为    img元素顶部距离文档顶部的距离 < 视口高度 + 浏览器滚动过的距离

图片加载条件 `img.offsetTop<window.innerHeight + document.body.scrollTop`

`imgs[i].src=imgs[i].getAttribute('data-src')`

> offsetTop 当前元素顶端距离父元素顶端距离，鼠标滚动不会影响其数值
>
> srcollTop 当前元素顶端距离窗口顶端距离，鼠标滚动会影响其数值(浏览器滚动过的距离 )

属于提前加载，在长网页中延迟加载图片的时机，当用户需要时，在去访问加载

*   如果页面滚动到 图片的可视化区域中 从自定义属性中取出真实路径赋值给图片的src

**调用API实现IntersectionObserver**

传入的参数是回调函数

> Intersection Observer（交叉观察器）是一个浏览器内置的JavaScript API，用于**异步监视目标元素**与**其祖先元素或顶级文档 视窗**的交叉状态。它提供了一种高性能和高效的方法来跟踪元素是否进入或退出视窗，或者与其他元素交叉。这对于实现懒加载、无限滚动、动画触发等功能非常有用。

```js
  // intersectionObserver 交叉观察 ： 目标元素和可视窗口会产生交叉区域
  const imagess = [...document.querySelectorAll('img')]
  // 2.1 创建视觉交叉的观察实例
  const observer = new IntersectionObserver(callback)
  // 2.2 给每一个图片绑定观察方法
  imagess.forEach(img => {
    // 2.3 图片进入视野+离开视野时触发 - 回调
    observer.observe(img)
  })
  // callback 接收的参数为带有监听所有图片交叉属性的集合
  const callback = (imgArr) => {
    console.log('视图交叉时触发，离开交叉时也触发', imgArr) // imgArr为
    imgArr.forEach(e => {
      // 判断是否在视野区域
      if (e.isIntersecting) {
        e.target.src = e.target.dataset.src
        // 取消观察追踪，避免重复加载同一张图片
        observer.unobserve(e.target)
      }
    })
  }
```

#### requestAnimationFrame和setTimeout的区别？

requestAnimationFrame是HTML5推出来的

`requestAnimationFrame(callback)`是`window`下的一个方法，跟`setTimeout`用法类似，接收一个回调函数，该回调函数会在浏览器下一次重绘之前执行

*   `requestAnimationFrame`的时间间隔是由浏览器自己决定的，浏览器为了保证流畅性，重绘频率会与系统刷新率保持一致。
*   setTimeout的间隔执行时间不确定
*   requestAnimationFrame提升性能，防止掉帧

#### requestAnimationFrame的优势

**优势**

*   CPU节能，setTimeInterval会使回调函数一直执行，即使会物体已经最小化和不可见；但是requestAnimationFrame不同，会在未激活状态下，该页面的刷新任务会暂停。
*   函数节流，函数可以保证每个刷新间隔内，函数只被执行一次，保证流畅性和节约函数执行的开销
*   减少DOM操作，会把所有的DOM集中一起执行，减少单次少量的操作

#### addEventListener函数的第三个参数代表什么意思

在 JavaScript 中，`addEventListener` 函数的第三个参数是一个布尔值，用于指定事件是否在捕获阶段进行处理。该参数通常称为 `useCapture`。默认是**false**

当 `useCapture` 参数为 `true` 时，事件将在捕获阶段进行处理。当 `useCapture` 参数为 `false` 或省略时，事件将在冒泡阶段进行处理。在 JavaScript 中，`addEventListener` 函数的第三个参数是一个布尔值，用于指定事件是否在捕获阶段进行处理。该参数通常称为 `useCapture`。

当 `useCapture` 参数为 `true` 时，事件将在捕获阶段进行处理。

当 `useCapture` 参数为 `false` 或省略时，事件将在冒泡阶段进行处理。

冒泡和捕捉阶段

1.  冒泡是用户点击某个元素后触发某些操作
2.  捕捉是事件到达目标元素之前捕获并处理事件

***

#### CSS

#### 回流和重绘

**回流**（重排）是指 渲染树中部分或者全部元素的尺寸、结构或者属性<u>发生变化</u>时，浏览器<u>会重新渲染部分</u>或者全部文档

*   页面首次渲染，窗口大小，元素的尺寸或者位置发生变化
*   添加或者删除可见的DOM元素

**重绘**是指 <u>元素样式发生变化</u>，但是不<u>会影响</u>其在文档流中的位置时，浏览器就会对元素进行重新绘制

*   color background-color 相关属性
*   outline 相关属性
*   border-radius visibility box-shaw

##### 如何避免回流和重绘

1.  尽量在低层级的dom节点操作  √
2.  避免设置多层内联样式
3.  一次更改CSS，不要重复的操作 √
4.  不要使用table布局
5.  不要频繁操作元素的样式，对于静态页面，可以修改类名  √
6.  display: none 操作结束后再把它显示出来。因为display none不会引起回流和重绘

##### 常用WEB API的函数

*   `document.getElementById`  `document.querySelector`   返回第一个CSS选择器下的内容

## CSS

1.  CSS基础

2.  CSS页面布局

3.  CSS场景题

### CSS基础

#### **CSS有哪些选择器**

*   简单选择器（根据名称，id，类来选取元素）
*   组合器选择器 （根据它们之间的特定关系来选取元素）
*   伪类选择器（根据特定状态选取元素）
*   伪元素选择器（选取元素的一部分并设置其样式）
*   属性选择器（根据属性或属性值来选取元素）

**CSS** **优先级的计算**

id选择器 > 类选择器 、伪类选择器、属性选择器 > 标签选择器、伪元素选择器 > 子标签选择器

#### CSS的优先级类型

*   内联样式，嵌入样式，外部引用
*   内联样式的优先级最高，它比其他所有样式定义方式的优先级都要高

#### CSS 有哪些伪类与伪元素选择器

伪元素

*   `::before`
*   `::after`
*   `::selection`
*   `::placeholder`
*   `::marker`

**伪类**

*   `:hover`
*   `:first-child`
*   `:last-child`
*   `:nth-child`

#### **伪类和伪元素的区别**：

css引入伪类是为了增加样式（不在文档树中）

*   伪类是当某个元素处于某种状态，为其添加样式，这个状态根据用户行为动态变化。比如**鼠标移到链接上的样式变化**
*   伪元素是用于创建一些不存在与文档树的元素，为其添加样式。例如`::before`，允许用户添加样式
*   区别是单冒号`:`    双冒号`::`

#### **CSS选择器有哪些**

*   id选择器、class选择器、标签选择器
*   后代选择器、兄弟选择器、相邻后代选择器
*   属性选择器
*   伪类选择器、伪元素选择器、通配符选择器

#### **CSS盒子的理解**

1.  标准盒子 属性值包含内容`content` 不包括`padding` `border`

2.  IE盒子（怪异盒子） 属性`width`，`height`包括`padding` `border` `content`
    ```javascript
    标准盒模型和IE盒模型的区别在于设置width和height时，所对应的范围不同。
    标准盒模型的width和height属性的范围只包含了content，
    而IE盒模型的width和height属性的范围包含了border、padding和content。
    ```

3.  通过修改**box-sizing**属性来改变元素的模型  `content-box:标准盒子模型` 和 `border-box:IE盒子标准`
    1.  box-sizing: content-box表示标准盒子
    2.  box-sizing: border-box表示IE标准盒子

#### **说说你对盒子模型的理解**

当对一个文档进行布局（layout）的时候，浏览器的渲染引擎会根据标准之一的 CSS 基础框盒模型（CSS basic box model），将所有元素表示为一个个矩形的盒子（box）

文档布局时，浏览器引擎会根据标准之一的CSS模型，将所有元素表示为一个个矩形盒子（box）

#### **PX EM rem的区别**

*   px是像素，相对于屏幕
*   em 是相对长度单位，相对于当前对象内文本的字体尺寸  默认是`1em=16px`
*   rem 是新增的一个相对单位，区别在于使用rem为元素设定字体大小，仍然是相对大小，相对于根元素的大小
    *   优先使用rem，可以通过只修改<u>根元素</u>就成比例地调整所有字体的大小
*   rem和em的区别
    *   em是相对父元素的大小，而rem是相对于根元素的大小
*   px 与 rem 的选择？
    *   对于只需要适配少部分手机设备，且分辨率对页面影响不大的，使用px即可 。
    *   对于需要适配各种移动设备，使用rem，例如只需要适配iPhone和iPad等分辨率差别比较挺大的设备。
*   对于只需要适配少部分手机设备，使用px影响不大
    *   适配各种移动设备，使用rem，只需要适配ipad和iphone
*   vh vw 就是根据**窗口的宽度**（浏览器窗口的宽度），分成100等份，100vw表示满框 50vw表示一半
    *   vh是窗口高度
    *   vw是窗口宽度

#### **display有那些值**

*   flex 子元素设置成flex布局
*   block 此元素将显示为块级元素
*   none 规定不显示
*   inline 行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示
*   inline-block 行内元素类型。默认宽度为内容宽度，可设置宽高，同行显示
*   table 此元素会作为块级表格来显示。
*   inherit 规定应该从父元素继承display属性的值

#### **position有那些值**

*   absolute  生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位
*   fixed  生成绝对定位的元素，相对于浏览器窗口进行定位
*   relative  生成相对定位的元素，相对于其正常位置进行定位
*   static 默认值
*   inherit 继承

##### 绝对定位和相对定位的区别

*   绝对定位是相对于第一个父元素，而且该父元素的属性不是（absolute，fixed，relative）
*   相对定位是相对于自己原本的位置

#### CSS中的top right bottom left是什么

*   `top`: 用于指定元素的上边缘相对于其包含元素或父元素的顶部边缘的距离。可以使用像素值（px）、百分比（%）或其他支持的长度单位。
    *   top的正方向是向下
*   `right`: 用于指定元素的右边缘相对于其包含元素或父元素的右侧边缘的距离。同样，可以使用像素值、百分比或其他长度单位。
*   `bottom`: 用于指定元素的下边缘相对于其包含元素或父元素的底部边缘的距离。

如果position的值为：

*   static：忽略top right left bottom
*   relative：元素相对于其正常位置进行偏移
*   absolute：元素相对于其最近的已定位祖先元素进行定位
*   fixed：相对于视口定位

#### 隐藏元素的方法

*   display\:none
*   visibility: hidden
*   opacity:0 透明度设成0
*   z-index 设置成负值
*   transform: scale(0, 0)将元素缩放成0，实现隐藏

#### transition有哪些属性

*   transition-property  规定设置过渡效果的名称
*   transition-duration  规定过渡效果需要多少毫秒
*   transition-timing-function  动画的曲线
*   transition-delay  过渡合何时结束

#### CSS性能优化

*   异步加载CSS，在`CSS`文件请求、下载、解析完成之前，`CSS`会阻塞渲染，浏览器不会渲染任何已处理的内容
*   资源压缩 使用`webpack`,等模块化工具，将CSS代码变小，大大降低浏览器的加载时间
*   不要使用`@import`，css样式文件有两种引入方式，一种`link`元素，另一种`@import`
    *   `@import`会影响浏览器的并行下载，使得页面在加载时增加额外的延迟，增添了额外的往返耗时
    *   link是和页面加载同事加载

#### link和@import的区别

两者都是外部引用CSS方式

> link是XHTML标签，除了加载CSS，还有其他资源；import是专门加载CSS
>
> link是页面加载时同时加载；import需要页面完全载入后再加载

#### **CSS5的新样式**

*   css新增了三个边框属性，分别是：
    *   flex 布局
    *   border-radius: 创建圆角边框
    *   box-shadow: 为元素添加阴影
    *   border-image: 使用图片来绘制边框
    *   box-sizing属性：
        *   `box-sizing:content-box` 表示标准的盒子模型，左右 `border`+左右 `padding+width`
        *   `box-sizing:border-box` 表示的是 IE 盒子模型,IE 盒子模型的盒子宽度：`width`,`width` 表示 `content+padding+border` 这三个部分的宽度

#### CSS3的硬件加速

CSS3硬件加速是一种利用计算机的硬件加速功能来提高网页或应用程序中特定元素的渲染性能的技术。它通过将特定的CSS属性应用于元素，使浏览器使用硬件加速来处理元素的绘制和动画效果，从而提高性能和流畅度。

CSS3硬件加速的原理是，将需要进行动画或复杂渲染的元素通过一些CSS属性（如`transform`、`opacity`、`filter`等）应用硬件加速。当浏览器检测到应用了硬件加速的元素时，会将其绘制和处理任务交给计算机的GPU（图形处理单元）来执行。

#### transform和position: absolute的区别和性能优化

position: left right包含了div运行的时候，是改变了浏览器的reflow和repaint，整个动画过程都在不断出发浏览器的重新渲染，很影响性能

transform的过程没有触发浏览器的重绘和回流，应该transform动画是由GPU控制，支持硬件加速，并不需要软件方面的渲染

### CSS布局

#### margin重叠问题

两个块级元素的上边距和下边距会合并成一个边距，边距去一个大的值，叫作外边距折叠。

*   浮动的元素和绝对定位不会出现
*   只有在上下布局才会出现

##### 为什么会出现margin重叠问题

> 有margin的规则引起的，当上下相邻的两个块级元素（没有其他内容或边框等分隔）的margin相遇时，它们的margin会合并为一个较大的margin。左右的元素不会

**元素水平居中**、**元素实现水平垂直居中**

简单的方法：`margin: auto` `text-align: center` `float: right` `position: absolute`  参考链接<https://blog.csdn.net/weixin_44135121/article/details/91430443>

1.  使用`flex`弹性布局
    1.  首先将父元素设置为 `display:flex; justify-content: center；align-items: center;`
    2.  其次将父元素高度设置为 height:100vh，根据 css3 的规范，1vh 等于视口高度的1%（1vw 等于视口宽度的1%），那么 100vh 就是适口高度的 100%，即占满整个屏幕。
    3.  父类`display: flex; justify-content:center;align-item:center ` 子类的长宽设置成任意百分比
2.  利用`transform`变形
    1.  同样父元素高度设置为 height:100vh；
    2.  将子元素的宽和高设置为百分数，如宽设置为 80%，则需要向 X 轴偏移 10%；那么 translateX 为10/80 = 0.125，即 12.5%；如果高设置为 60%，则需要向 Y 轴偏移 20%，那么 translateY 为20/60 = 33%，即子元素需要设置 transfrom\:translate(12.5%,33%)。
        1.  translateX （-50%）向下平移自己宽度的50%
        2.  translateY（-50%）向右平移自己长度的50%
    3.  设置`transform: translate(-50%,-50%);position:absolute`，
    4.  可以使用transform设置   垂直居中或者水平居中
3.  利用`position`定位 绝对定位
    1.  将父元素设置为 `position: absolute`，然后上下左右都为 0；使其填满整个屏幕；
    2.  子元素也设置为 `position: absolute`，然后上下左右都为 0；margin 设置为 auto，实现水平垂直居中。
    3.  `father{position:fixed;},son:{margin:auto}`
4.  使用`transform`与`position`结合
    1.  父元素设置成fixed，然后上下左右都为 0；使其填满整个屏幕。
    2.  子元素设置成fixed，然后上下各设为 50%， transform\:translate(-50%,-50%)  // 元素仅在水平方向移动 向左移动50%物体的宽度。
5.  使用line-light 垂直居中 `line-height`  。

`align-items`属性用于定义项目在交叉轴上的对齐方式，也就是垂直方向的对齐方式。

`flex-direction` 属性设置为 `column` 时，主轴方向为垂直方向，主轴上的对齐方式由`justify-content` 控制

`justify-content`设置为 `center`，这会使项目在主轴上垂直居中对齐

#### 实现垂直居中

*   父类 `position:relative`  子类 `transform: translateY: -50%;`
*   使用 Flexbox布局，`align-items: center;`

#### 实现水平居中

*   使用 Flexbox布局，`justify-content: center`;

#### 三栏布局

*   绝对布局，左右两栏设置为`position:absolute`，中间设置为对应方向大小的`margin-left:100px; margin-right:100px;`
*   利用flex布局，`outer:{display: flex}`，`left:{width:100px}` ，`right:{width:100px}`，`center:{flex:1}`
*   浮动，在左右两栏设置`float:left` `float:right`，和宽度100px。中间一栏设置左右两个方向的margin值`margin-left"100px`，但是中间一栏得放在最后

#### 两栏布局

*   利用flex

    ```css
    .outer{
        display:flex;
    }
    .left{
        width:100px;
    }
    .right{
        flex:1;
    }
    ```

*   利用浮动，左边元素的宽度设置为200px
    ```css
        .left{
            float:left; 
            width:200px;
        }
        .right{
            margin-left:200px; 
            width:auto;
        }
    ```

*   利用浮动

    ```css
     .left{
            float:left; width:200px;
        }
        .right{
            overflow: hidden;
        }
    ```

#### 文本的对齐方式

*   文本排列属性是用来设置文本的水平对齐方式。文本可居中或对齐到左或右,两端对齐

*   当text-align设置为"justify"，每一行被展开为宽度相等，左，右外边距是对齐（如杂志和报纸）。

*   设置字体大小
    *   em=16px或者px或者rem或者

#### **元素隐藏的方式**

*   使用`display: none`

*   使用`visibility: hidden`; 隐藏元素

*   使用`opacity: 0` 将元素透明度设置为0

    ```css
    content-visibility: hidden;
    ```

*   字体大小设成0px

*   高度和宽度设成无限值  绝对定位于当前界面的不可见地

*   最常用的`display:none`和`visiblity:hidden`

#### display、visibility、opacity区别

关于`display: none`、`  visibility: hidden`、`opacity: 0`的区别，如下表所示：

|             | display: none | visibility: hidden | opacity: 0 |
| :---------- | :------------ | :----------------- | ---------- |
| 页面中         | 不存在           | 存在                 | 存在         |
| 重排          | 会             | 不会                 | 不会         |
| 重绘          | 会             | 会                  | 不一定        |
| 自身绑定事件      | 不触发           | 不触发                | 可触发        |
| transition  | 不支持           | 支持                 | 支持         |
| 子元素可复原      | 不能            | 能                  | 不能         |
| 被遮挡的元素可触发事件 | 能             | 能                  | 不能         |

区别如下：

*   `display:none` 回让元素完全从渲染树中消失，  visibility hidden不会，还在页面占有相应的位置。
*   display: none 是非继承属性

##### display和hidden的区别

*   display让元素从渲染树中消失，hidden是占着位置，内容不可见
*   修改文本的display会造成文档重排，而hidden会重绘

#### **元素浮动**

元素的水平方向浮动，意味着元素只能左右移动而不能上下移动。

一个浮动元素会尽量向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。浮动元素之后的元素将围绕它。

在调整页面尺寸大小时，页面的元素紧贴这`float:right`文本环绕在周围

**清除浮动的方法：**

*   父级div设置高度
*   最后一个浮动元素添加一个空的div
*   包含浮动元素的父级标签添加`overflow: hidden/auto`

#### **flex布局中的align-content与align-items的区别**

*   `align-content`作用于纵轴多行元素，一行元素不起作用
*   `align-items`作用于纵轴单行元素

#### **请谈一谈flex布局**

```shel
flex布局是CSS3新增的一种布局方式，flex是flexibleBox的缩写，意味弹性布局。我们可以通过将一个元素的display属性值设置为flex从而使它成为一个flex容器，它的所有子元素都会成为它的项目。

一个容器有两条轴，一个是水平的主轴，一个是于主轴垂直的交叉轴。使用flex-direction来指定主轴的方向。使用justify-content来指定元素在主轴上的排列方式，使用align-items来指定元素在交叉轴的排列方式。flex-wrap来规定当下一行排列不下的换行方式。

使用order属性来指定项目的排列顺序，使用`flex-grow`来指定当排列空间有剩余的时候，项目的放大比例。使用`flex-shrink`来指定当排列空间不足时，项目的缩小比例。
```

#### **flex：1表示什么**

*   flex: 1 => 0 1 auto, flex\:auto =>  1 1 auto
*   flex-grow，flex-shrink，flex-basic
*   第一个参数是：flex-grow定义项目的放大比例，默认为0，不放大
*   第二个参数是：flex-shrink定义了项目的缩小比例，默认为1，如果空间不足，项目缩小
*   第三个参数手机：flex-basic，指定项目在分配多余空间之前的基准大小

#### flex有哪些属性

*   flex-direction：row, row-reverse, coloumn, coloumn-reverse
*   flex-warp: warp, nowarp
*   align-content: center, flex-start, flex-end, space-end,
*   justify-content:  center, flex-start, flex-end, space-end,
*   align-items: center, flex-start, flex-end,

#### overflow是什么意思

在 CSS 中，`overflow` 属性用于控制一个容器元素中内容溢出时的处理方式

*   hiden

**CSS如何设置一行超出显示省略号**

```scss
overflow: hidden;
text-overflow: ellopsis;
white-space: nowrap
```

#### **什么是BFC**

块级格式化上下文，`Block Formatting Context`

是Web页面的可视化CSS渲染的一部分，有自己渲染界面的规则，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。

通俗来说，BFC是一个独立的布局环境，可以理解成一个容器，在这个容器中按照一定规则进行物体摆放，并且不会影响到其他环境的物品。

BFC的目的是形成一个不受外界影响完全独立于外界的空间，内部的子元素不会影响外部元素。

如何创建BFC、<u>触发条件</u>？

*   根元素或包含根元素的元素
*   浮动元素 float＝left|right或inherit
*   绝对定位元素 position＝absolute或fixed
*   display＝inline-block|flex|inline-flex
*   overflow＝hidden

应用场景：

*   防止margin重叠，两个div之间的margin=100px 这样会重叠相邻的margin取最大的
    *   应用BFC：定义其中一个div 设置为`overflow:hidden`
*   清除浮动，在父div上加上`display:hidden` 使得计算内部元素高度算上
*   自适应多栏布局
    *   例如 main是div aslide是浮动div
    *   然`.aslide`为浮动元素，但是`main`的左边依然会与包含块的左边相接触
    *   BFC区域不会与浮动盒子重叠，我们通过触发main生成BFC，来适应两栏布局

**CSS如何实现固定长宽比的元素**

过去的解决方法是`padding`，一个padding设置为百分比

#### **Grid布局的优势**

提供了一种更灵活、更可控的方式来定义页面布局，特别是适用于响应式布局。

1.  Grid布局提供了更多的灵活性，可以轻松地在不同的屏幕尺寸和设备上调整页面布局。
2.  Grid布局允许您在页面上定义网格和单元格，并在网格中放置元素，使得它们可以根据网格的结构和单元格的位置相对于网格进行定位和对齐。
3.  Grid布局可以更轻松地实现响应式布局，因为您可以使用网格来定义不同的布局和布局规则，并根据设备和屏幕尺寸自动应用适当的布局。
4.  Grid布局提供了更多的控制选项，可以更轻松地定义行和列的大小，以及如何对齐和排列元素

#### `width:auto` 和 `width:100%`的区别

```javascript
一般而言，100% 使元素box的宽度等于父元素的content box的宽度
auto使元素撑满整个父元素，margin border padding content区域会自动分配水平空间
```

**position属性的含义**

*   absolute 生成绝对定位的元素
*   fixed 生成绝对定位的元素，相对于浏览器窗口进行定位。
*   relative 生成相对定位的元素，相对于其元素本身所在正常位置进行定位。
*   static 默认值。没有定位，元素出现在正常的流中（忽略top,bottom,left,right,z-index声明）。
*   inherit 规定从父元素继承position属性的值。

所以relative和absolute的定位原点，relative定位的元素，是相对于元素本身的正常位置来定位；absolute定位的元素，是相对于他的第一个position值不为static的祖先元素。

#### CSS有哪些动画

*   transition 实现渐变动画
*   transform 转变动画  设置以下属性可以发生变化
    *   translate：位移
    *   scale：缩放
    *   rotate：旋转
    *   skew：倾斜
*   animation 实现自定义动画

#### transition和animation的区别

transition是过渡属性，强调过渡，他的实现需要触发一个事件（拨入鼠标移上去，点击），才执行动画。他类似于补帧

animation是动画属性，他的实现不需要触发事件，设定好时间能自己执行，且循环一个动画

**transition**有哪些属性

*   transition-property：设置元素中参与过渡的属性   参数 none all property
*   transition-duration：设置元素过渡的持续时间   参数  时间（.5s, 1.5s）
*   transition-timing-function：设置元素过渡的动画类型   参数 linear ease ease-in ease-out ease-in-out
*   transition-delay：设置过渡效果延迟时间 默认为0  参数 时间（.5s）

**animation**有哪些属性

*   animation-duration 指定动画完成一个周期所需要时间，单位秒（s）或毫秒（ms），默认是 0
*   animation-delay  动画的延迟
*   animation-timing-function  指定动画计时函数，即动画的速度曲线，默认是 "ease"

#### CSS预处理器----less sass

都是css的预处理器，是CSS上的一种抽象层。他们是特殊的语法/语言编译成CSS。例如Less是动态语言，他赋予了CSS动态语言的特性，如变量 继承 运算 函数

*   易于扩展
*   轻易实现多重继承

这两者的区别

*   变量表示，sass是\$ less是@
*   less不支持条件判断，但是sass支持
*   引入外部CSS：sass是下划线开头的文件表示为引入文件，

less的优势是兼容低版本浏览器，代码体积小，相比与scss更为简洁

#### Vue框架中CSS如何解决样式冲突

*   Scoped CSS：Vue组件支持使用`scoped`属性来限定样式的作用范围。在组件的`<style>`标签中添加`scoped`属性后，样式将只应用于当前组件的元素，不会影响到其他组件

*   命名约定：通过为每个组件的样式类名添加前缀或命名空间，可以避免样式冲突，给组件添加一个唯一的父类

*   CSS-in-JS：使用CSS-in-JS库（例如，Vue中的`vue-jss`或`styled-components`）可以将样式直接嵌入到组件中，每个组件都有自己独立的样式，避免了全局样式冲突的问题。 底层原理是什么？

#### CSS中样式表加scoped有什么作用

*   当 `<style>` 标签有 `scoped` 属性时，它的 CSS 只作用于当前组件中的元素。
*   使用 scoped 后，父组件的样式将不会渗透到子组件中

### CSS场景题

#### CSS中如何设置屏幕的高度一直等于屏幕的宽度

可以使用视口单位（Viewport Units）来实现

```css
html, body {
  height: 100vh; /* 设置html和body元素的高度为100视口高度 */
  margin: 0;
  padding: 0;
  overflow: hidden; /* 可选，防止页面滚动 */
}

.container {
  width: 100%; /* 设置容器的宽度为100% */
  height: 100%; /* 设置容器的高度为100% */
  background-color: #ccc; /* 可以添加背景颜色以验证效果 */
}
代码中，我们首先将 html 和 body 元素的高度设置为 100vh，表示相对于视口高度的百分比。
```

#### CSS实现省略号

*   单行省略：`text-overflow:ellipis` `overflow:hidden`
*   多行省略：显示文本的行数：`-webkit-line-clamp:3`

#### 手机端和浏览器适配问题

*   浏览器适配：
    *   单独写一套样式来适配旧版浏览器
*   CSS像素   使用rem像素，相对的单位，它以 `HTML` 元素的 `font-size` 为比例
*   使用vh和vw同理
*   控制viewport来实现宽和scale值适配高倍显示
    *   编写 `<meta>` 标签设置 `viewport` 的内容
*   针对一些极端情况，通过媒体查询(@media)针对不同的屏幕进行单独设置
    *   `<meta name="viewport" content="width=device-width" initial="1." maximum-scale="1" >` **响应式设计**是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的页面
    *   使用CSS媒体查询来根据不同的屏幕尺寸和方向应用不同的样式
*   页面头部必须有meta声明的viewport

##### 媒体查询的原理

这些规则会根据设备或浏览器的特性来应用不同的样式。主要是基于以下的概念

*   **媒体类型（Media Type）**：媒体查询可以根据不同的媒体类型来应用不同的样式
*   **媒体特性（Media Features）**：媒体查询还可以使用媒体特性来匹配设备或浏览器的特定属性。比如：宽度、高度
*   媒体查询通常由媒体类型和一个或多个媒体特性组成 `@media screen and (max-width: 768px){}`&#x20;

#### 用flex实现左右都不定宽的自适应布局

```css
.container {
  display: flex;
  flex-direction: row;
}

.left {
  flex: 1;
  background-color: #f2f2f2;
}

.right {
  flex: 1;
  background-color: #ddd;
}
```

*   使用flex布局  在contain而上设置flex-direction: row  实现左右布局

实现二维表格分布

```html
<table boder="1">
    <tr>  第一行
    	<td>1</td>
        <td>1</td>
    </tr>
    <tr>  第二行
    	<td>2</td>
        <td>2</td>
    </tr>
</table>
```

CSS实现三角形

```css
.div{ //下三角
	width:0
	height:0
	boder-top: 50px solid red
	border-left: 50px solid transparent
	border-right: 50px silid transparent
}
```

##### CSS实现轮播图

1.  html设置三张图片 带序号的1-3

2.  CSS设置颜色

3.  script设置 setInterval定时器 和两秒设置函数
    1.  函数里设置while index=1  每次循环index（对应新的图片），index加到3，重置为1，最后一直循环往复

#### 实现ul的li实现点击哪一个li哪个高亮

给每个li绑定一个点击事件，`@click="select_li(index)`，点击时间会将一个全局变量 `selectLi` 赋值为 index 的值。

在每个li上添加class样式

```html
:class="[selectLi == li ?  'activate' : ""]"
```

#### CSS实现一个边框宽度0.5px 的正方形

`transform:scale(0.5)`

CSS实现九宫格

实现圣杯布局
