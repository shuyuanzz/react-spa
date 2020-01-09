## 依赖安装 `yarn`
## 项目启动  `yarn start`
## 项目构建  `yarn build`
## 分析打包产物体积 `yarn analyze`

# 技术选型 
 
## why spa not ssr？
### ssr(server side render)
#### 原理
由服务器端接收到用户的请求后，请求数、处理业务逻辑、构建完整的HTML返回给客户端，然后由浏览器呈现网页。

#### 优点

1. 首屏性能。
2. SEO(我门可以将SEO的关键信息直接在服务端就构建好，从而保证搜索引擎的爬虫可以爬取到相关数据)。
3. 服务端渲染不用关心浏览器兼容性问题。
4. 对于设备性能较弱的手机或者平板，可以减少一些电量消耗。

#### 缺点
1. 用户进行一些稍微复杂的操作都要刷新页面，在网络环境比较差的条件下，用户体验不佳。
2. 服务端压力大。

### spa（single page application）
#### 原理 
客户端发起请求后，服务端返回js 、css、 基础HTML， 等静态资源，然后由客户端构建出页面。

#### 优点
1. 局部刷新。无需每次都进行完整页面请求(让页面交互起来更流畅)。
2. 一定程度上减少服务器压力。

#### 缺点
1. 首屏慢，用户首先会看到白屏一段时间。
2. 不利于SEO（由于返回的HTML文档内容基本是空的）。

从业务出发，本项目对SEO和首屏性能没有太多要求，并且首屏性能可以通过 `分拆打包` 和 `交互优化` 的方式去优化，来达到一个良好的用户体验。

## 视图&组件框架 React

 选用`React`的原因主要出于团队技术栈来考虑（都对`React`比较熟悉）

## 基础脚手架 create-react-app

`Create React App`是 FaceBook 的 `React` 团队官方出的一个构建 `React` 单页面应用的脚手架工具。它本身集成了 `Webpack`，并配置了一系列内置的 `loader` 和默认的 `npm` 的脚本，可以很轻松的实现零配置就可以快速开发 `React` 的应用。这样可以省去一些繁琐的配置流程，其最基础默认功能也基本满足我们的项目需求，也提供了许多扩展功能，可以根据具体需求去做一些引入。

## 组件库
### 为什么要选择组件库？
组件库是前端领域一个重要的技术单元，为效率、质量、体验服务：  
效率是为了能够抽象业务研发中业务组件的共同点去避免重复劳动；质量是如果一个组件经过了测试和质量迭代，那么正确的使用不应该出现质量问题；体验方面组件库可以去统一交互的体验，让组件的表现更一致。
#### why antd？
1. `Ant Design`明确了「后台框架的说法」。
2. `Ant Design`给出框架的同时，也给出了设计规范。
3. `Ant Design`拥有着良好的生态，和大量的用户群体。
4. 基于当前项目是一个后台项目的实际情况。


## why TypeScript？
1. JS 动态类型弱类型语言，在运行期间进行类型检查。容易出现空指针问题。
2. TS 静态类型强类型语言,在开发期间或编译期间进行强类型检查,可以帮助我门在开发阶段规避很多错误,使用类型系统让代码可控性、扩展性更强，协作更方便。

### TypeScript优点
1. `RoadMap` 清晰，方向以贴合 `ECMAScript` 为核心，在其之上构建类型系统，传言 `ES8` 也会增加类型系统。
2. `TypeScript` 是 `JavaScript` 的超集，其作用只在开发阶段发挥，其生成的代码不包含任何类型代码，但由类型系统保障。
3. IDE 支持极好，除了自家的 `VSCode` 集成度超高，用户增长飞速，`TypeScript` 还支持市面上几乎所有主流 IDE。
4. 社区庞大，周边工具丰富。
5. 研发团队活力和积极性都很高，很多开源生态均快速推进集成。
6. 当前的框架`angular` `vue3`都在使用`TypeScript` `Create-react-app` 也提供了对`TypeScript`的支持。



## 项目代码规范风格统一

本项目使用 `Eslint + Prettier + husky + lint-staged `提高前端项目质量、统一项目代码风格:

1. `Eslint` 代码检查，编辑器启用 `Eslint` 之后，不符合规范的会自动进行提示。  

2. `Prettier` 让代码变得更 pretty，会更改不符合检测要求的代码，自动格式化。    

3. `husky`  git 每步操作的钩子，每执行一个操作都会执行一次对应的钩子函数，执行 `pre-commit` 操作时，执行 Prettier 格式化脚本，即可自动的格式化代码，让 commit 之后的代码都符合 Prettier规范。  

4. `lint-staged` lint-staged 就是用来只对变更的文件进行处理的。


## why Eslint not Tslint

### TSLint 的优点：

1. 专为 `TypeScript` 服务，bug 比 `ESLint` 少。
2. 不受限于 `ESLint` 使用的语法树 `ESTree`。
3. 能直接通过 `tsconfig.json`。 中的配置编译整个项目，使得在一个文件中的类型定义能够联动到其他文件中的代码检查。

### Eslint 的优点

1. 基础规则比 `TSLint` 多很多。
2. 社区繁荣，插件众多。

### BUT

由于性能问题，`TypeScript` 官方决定全面采用 `ESLint`，甚至把仓库（Repository）作为测试平台，而 `ESLint` 的 `TypeScript` 解析器也成为独立项目，专注解决双方兼容性问题。

## why Hooks
### 什么是`Hooks`
Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
### Hooks解决的问题
1. 在组件之间复用状态逻辑很难：之前只能使用Redux、Mobx等三方库来解决这个问题。Hooks中的useReducer和useContext可以让你在无需修改组件结构的情况下复用状态逻辑。
2. 复杂组件变得难以理解： Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），而并非强制按照生命周期划分。你还可以使用 reducer 来管理组件的内部状态，使其更加可预测。
3. 难以理解的 class： Hook 使你在非 class 的情况下可以使用更多的 React 特性。 从概念上讲，React 组件一直更像是函数。而 Hook 则拥抱了函数，同时也没有牺牲 React 的精神原则。Hook 提供了问题的解决方案，无需学习复杂的函数式或响应式编程技术。


## 缓存
使用 `Cache-Control: max-age=31536000` 用于 `build/static` 资源（每次打包后如果资源内部有改变文件名的hash值会变化这样浏览器可直接使用最新的静态资源），而 `Cache-Control: no-cache` 用于其他所有内容。

## 未来
1. CI/CD
2. 自动化测试

## 参考文章

[使用 `Eslint + Prettier + husky + lint-staged `提高前端项目质量、统一项目代码风格](https://juejin.im/post/5d2b49406fb9a07ed13703fa)  

[为什么要使用`TypeScript` ](https://juejin.im/post/5d19b0305188254e2e4e78e8)  

[前端项目语言选型](https://juejin.im/post/5ccd2cb3f265da03a85ad076#heading-12)  

[React-Hooks简介](https://zh-hans.reactjs.org/docs/hooks-intro.html)  
 
[使用React-Hooks获取数据](https://www.robinwieruch.de/react-hooks-fetch-data)  
