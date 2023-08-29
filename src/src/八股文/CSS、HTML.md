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

***

#### 网站开发中，如何实现图片的懒加载

触发条件为    img元素顶部距离文档顶部的距离 <   视口高度 + 浏览器滚动过的距离

图片加载条件 `img.offsetTop<window.innerHeight + document.body.scrollTop`

`imgs[i].src=imgs[i].getAttribute('data-src')`

> offsetTop 当前元素顶端距离父元素顶端距离，鼠标滚动不会影响其数值
>
> srcollTop 当前元素顶端距离窗口顶端距离，鼠标滚动会影响其数值(浏览器滚动过的距离 )

属于提前加载，在长网页中延迟加载图片的时机，当用户需要时，在去访问加载

*   如果页面滚动到 图片的可视化区域中 从自定义属性中取出真实路径赋值给图片的src

***

**伪数组**转化成数组  `Array.from()`

`getElementsByTagName` 获取过来元素对象的集合，以伪数组的形式。

***

#### 回流和重绘

\*\*回流（重排）\*\*是指 渲染树中部分或者全部元素的尺寸、结构或者属性<u>发生变化</u>时，浏览器<u>会重新渲染部分</u>或者全部文档

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

1.  W3C标准盒子 属性值包含内容`content` 不包括`padding` `border`

2.  IE盒子 属性`width`，`height`包括`padding` `border` `content`

3.
           标准盒模型和IE盒模型的区别在于设置width和height时，所对应的范围不同。标准盒模型的width和height属性的
           范围只包含了content，而IE盒模型的width和height属性的范围包含了border、padding和content。

4.  通过修改box-sizing属性来改变元素的模型  `content-box:标准盒子模型` 和 `border-box:IE盒子标准`

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
*   总结：

#### **display有那些值**

*   flex 子元素设置成flex布局   
*   block 此元素将显示为块级元素
*   none 规定不显示
*   inline 行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示
*   inline-block 行内元素类型。默认宽度为内容宽度，可设置宽高，同行显示
*   table 此元素会作为块级表格来显示。
*   inherit 规定应该从父元素继承display属性的值

#### position有那些值

*   absolute  生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位
*   fixed  生成绝对定位的元素，相对于浏览器窗口进行定位
*   relative  生成相对定位的元素，相对于其正常位置进行定位
*   static 默认值
*   inherit 继承

#### transition有哪些属性

*   transition-property  规定设置过渡效果的名称
*   transition-duration  规定过渡效果需要多少毫秒
*   transition-timing-function  动画的曲线
*   transition-delay  过渡合何时结束

**CSS性能优化**

*   异步加载CSS，在`CSS`文件请求、下载、解析完成之前，`CSS`会阻塞渲染，浏览器不会渲染任何已处理的内容
*   资源压缩 使用`webpack`,等模块化工具，将CSS代码变小，大大降低浏览器的加载时间
*   不要使用`@import`，css样式文件有两种引入方式，一种`link`元素，另一种`@import`
    *   `@import`会影响浏览器的并行下载，使得页面在加载时增加额外的延迟，增添了额外的往返耗时

#### **CSS5的新样式**

*   css新增了三个边框属性，分别是：
    *   flex
    *   border-radius: 创建圆角边框
    *   box-shadow: 为元素添加阴影
    *   border-image: 使用图片来绘制边框
    *   box-sizing属性：
        *   `box-sizing:content-box` 表示标准的盒子模型，左右 `border`+左右 `padding+width`
        *   `box-sizing:border-box` 表示的是 IE 盒子模型,IE 盒子模型的盒子宽度：`width`,`width` 表示 `content+padding+border` 这三个部分的宽度

### CSS布局

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
3.  利用`position`定位
    1.  将父元素设置为 `position: fixed`，然后上下左右都为 0；使其填满整个屏幕；
    2.  子元素也设置为 `position: fixed`，然后上下左右都为 0；margin 设置为 auto，实现水平垂直居中。
    3.  `father{position:fixed;},son:{margin:auto}`
4.  使用`transform`与`position`结合
    1.  父元素设置成fixed，然后上下左右都为 0；使其填满整个屏幕。
    2.  子元素设置成fixed，然后上下各设为 50%， transform\:translate(-50%,-50%)  // 元素仅在水平方向移动 向左移动50%物体的宽度。
5.  使用line-light 垂直居中 `line-height`  。

实现垂直居中

*   父类 `position:relative`  子类 `transform: translateY: -50%;`
*   使用padding 计算padding值

#### 三栏布局

*   绝对布局，左右两栏设置为`position:absolute`，中间设置为对应方向大小的`margin-left:100px; margin-right:100px`
*   利用flex布局，`outer:{display: flex}`，`left:{width:100px}` ，`right:{width:100px}`，`center:{flex:1}`
*   浮动，在左右两栏设置`float:left` `float:right`，和宽度100px  。中间一栏设置左右两个方向的margin值`margin-left"100px`，但是中间一栏得放在最后。

#### 两栏布局

*   利用flex

    *
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

    *
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

    *
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

*   ![image-20221201155409660](C:\Users\cxy\AppData\Roaming\Typora\typora-user-images\image-20221201155409660.png)

*   设置字体大小
    *   em=16px或者px或者rem或者

#### **元素隐藏的方式**

*   使用`display: none`

*   使用`visibility: hidden`; 隐藏元素

*   使用`opacity: 0` 将元素透明度设置为0

*
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

清除浮动的方法：

*   父级div设置高度
*   最后一个浮动元素添加一个空的div
*   包含浮动元素的父级标签添加`overflow: hidden/auto`

#### **flex布局中的align-content与align-items的区别**

*   `align-content`作用于纵轴多行元素，一行元素不起作用
*   `align-items`作用于纵轴单行元素

#### **请谈一谈flex布局**

    flex布局是CSS3新增的一种布局方式，flex是flexibleBox的缩写，意味弹性布局。我们可以通过将一个元素的display属性值设置为flex从而使它成为一个flex容器，它的所有子元素都会成为它的项目。

    一个容器有两条轴，一个是水平的主轴，一个是于主轴垂直的交叉轴。使用flex-direction来指定主轴的方向。使用justify-content来指定元素在主轴上的排列方式，使用align-items来指定元素在交叉轴的排列方式。flex-wrap来规定当下一行排列不下的换行方式。

    使用order属性来指定项目的排列顺序，使用`flex-grow`来指定当排列空间有剩余的时候，项目的放大比例。使用`flex-shrink`来指定当排列空间不足时，项目的缩小比例。

#### **flex：1表示什么**
* flex-grow，flex-shrink，flex-basic
* 第一个参数是：flex-grow定义项目的放大比例，默认为0，不放大
* 第二个参数是：flex-shrink定义了项目的缩小比例，默认为1，如果空间不足，项目缩小
* 第三个参数手机：flex-basic

**CSS如何设置一行超出显示省略号**

```scss
overflow: hidden;
text-overflow: ellopsis;
white-space: nowrap
```

#### **什么是BFC**

块级格式化上下文，`Block Formatting Context`

是Web页面的可视化CSS渲染的一部分，有自己渲染界面的规则，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。

通俗来说  BFC是一个独立的布局环境，可以理解成一个容器，在这个容器中按照一定规则进行物体摆放，并且不会影响到其他环境的物品。

BFC的目的是形成一个不受外界影响完全独立于外界的空间，内部的子元素不会影响外部元素。

如何创建BFC、<u>触发条件</u>

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

**line-height的设置**

line-height是根据元素自身的字体大小来取值，但同时会被继承

#### **Grid布局的优势**

提供了一种更灵活、更可控的方式来定义页面布局，特别是适用于响应式布局。

1.  Grid布局提供了更多的灵活性，可以轻松地在不同的屏幕尺寸和设备上调整页面布局。
2.  Grid布局允许您在页面上定义网格和单元格，并在网格中放置元素，使得它们可以根据网格的结构和单元格的位置相对于网格进行定位和对齐。
3.  Grid布局可以更轻松地实现响应式布局，因为您可以使用网格来定义不同的布局和布局规则，并根据设备和屏幕尺寸自动应用适当的布局。
4.  Grid布局提供了更多的控制选项，可以更轻松地定义行和列的大小，以及如何对齐和排列元素

#### `width:auto` 和 `width:100%`的区别

    一般而言，100% 使元素box的宽度等于父元素的content box的宽度
    auto使元素撑满整个父元素，margin border padding content区域会自动分配水平空间

**position属性的含义**

*   absolute 生成绝对定位的元素
*   fixed 生成绝对定位的元素，相对于浏览器窗口进行定位。
*   relative 生成相对定位的元素，相对于其元素本身所在正常位置进行定位。
*   static 默认值。没有定位，元素出现在正常的流中（忽略top,bottom,left,right,z-index声明）。
*   inherit 规定从父元素继承position属性的值。

所以relative和absolute的定位原点，relative定位的元素，是相对于元素本身的正常位置来定位；absolute定位的元素，是相对于他的第一个position值不为static的祖先元素。

#### transition和animation的区别

transition是过渡属性，强调过渡，他的实现需要触发一个事件（拨入鼠标移上去，点击），才执行动画。他类似于补帧

animation是动画属性，他的实现不需要触发事件，设定好时间能自己执行，且循环一个动画

**transition**有哪些属性

*   transition-property：设置元素中参与过渡的属性   参数 none all property

*   transition-duration：设置元素过渡的持续时间   参数  时间（.5s, 1.5s）

*   transition-timing-function：设置元素过渡的动画类型   参数 linear ease ease-in ease-out ease-in-out

*   transition-delay：设置过渡效果延迟时间 默认为0  参数 时间（.5s）

#### CSS预处理器----less sass

都是css的预处理器，是CSS上的一种抽象层。他们是特殊的语法/语言编译成CSS。例如Less是动态语言，他赋予了CSS动态语言的特性，如变量 继承 运算 函数

*   易于扩展
*   轻易实现多重继承

### CSS场景题

#### CSS实现省略号

*   单行省略：`text-overflow:ellipis` `overflow:hidden`
*   多行省略：显示文本的行数：-webkit-line-clamp:3

#### 手机端和浏览器适配问题

*   浏览器适配：
    *   单独写一套样式来适配旧版浏览器
*   CSS像素   使用rem像素，相对于根元素的字体大小的单位
*   控制 viewport来实现宽和scale值适配高倍显示，编写 `<meta>` 标签设置 `viewport` 的内容
*   响应式布局，通过媒体查询(@media)针对不同的屏幕进行单独设置
    *   `<meta name="viewport" content="width=device-width" initial="1." maximum-scale="1" >`
**响应式设计**是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的页面
* 关于原理：基本原理是通过媒体查询`@media`查询检测不同的设备屏幕尺寸做处理
* 页面头部必须有meta声明的viewport
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

CSS实现九宫格

实现圣杯布局
