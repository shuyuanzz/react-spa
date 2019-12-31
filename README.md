## 依赖安装 `yarn`
## 项目启动  `yarn start`
## 项目构建  `yarn build`
## 分析打包产物体积 `yarn analyze`

# 技术选型 
 
## why spa not ssr
### ssr
1. 首屏性能
2. SEO
3. 服务端渲染不用关心浏览器兼容性问题
4. 对于电量不给力的手机或平板，减少在客户端的电量消耗很重要

### spa
1. 局部刷新。无需每次都进行完整页面请求(让页面交互起来更流畅)
2. 节约服务器成本省电省钱，JS 支持 CDN 部署，且部署极其简单，只需要服务器支持静态文件即可
天生的关注分离设计。服务器来访问数据库提供接口，JS 只关注数据获取和展现

由于本项目对SEO和首屏性能没有太多要求，并且首屏性能可以通过 `分拆打包` 和 `交互优化` 的方式去优化，来达到一个良好的用户体验。


## why create-react-app

`Create React App`是 FaceBook 的 React 团队官方出的一个构建 React 单页面应用的脚手架工具。它本身集成了 Webpack，并配置了一系列内置的 loader 和默认的 npm 的脚本，可以很轻松的实现零配置就可以快速开发 React 的应用。这样可以省去一些繁琐的配置流程，其最基础默认功能也基本满足我们的项目需求，也提供了许多扩展功能，可以根据具体需求去做一些引入。

## why TypeScript

[参考文章](https://juejin.im/post/5d19b0305188254e2e4e78e8 为什么要使用TypeScript)

## 项目代码规范风格统一

本项目使用 `Eslint + Prettier + husky + lint-staged `提高前端项目质量、统一项目代码风格:

1. `Eslint` 代码检查，编辑器启用 Eslint 之后，不符合规范的会自动进行提示。  

2. `Prettier` 让代码变得更 pretty，会更改不符合检测要求的代码，自动格式化。    

3. `husky`  git 每步操作的钩子，每执行一个操作都会执行一次对应的钩子函数，执行 pre-commit 操作时，执行 Prettier 格式化脚本，即可自动的格式化代码，让 commit 之后的代码都符合 Prettier规范。  

4. `lint-staged` lint-staged 就是用来只对变更的文件进行处理的。

### Eslint  

1. 避免代码错误
2. 写出最佳实践的代码
3. 规范变量使用方式
4. 规范代码格式
5. 更好的使用新的语法

### why Eslint not Tslint

#### TSLint 的优点：

1. 专为 TypeScript 服务，bug 比 ESLint 少
2. 不受限于 ESLint 使用的语法树 ESTree
3. 能直接通过 tsconfig.json 中的配置编译整个项目，使得在一个文件中的类型定义能够联动到其他文件中的代码检查

#### Eslint 的优点

1. 基础规则比 TSLint 多很多
2. 社区繁荣，插件众多

#### BUT

由于性能问题，TypeScript 官方决定全面采用 ESLint，甚至把仓库（Repository）作为测试平台，而 ESLint 的 TypeScript 解析器也成为独立项目，专注解决双方兼容性问题

### Prettier

#### what?
1. 一个自己为是的代码格式化工具
2. 支持多种语言
3. 和很多编辑器集成
4. 配置项很少

#### why?

1. prettier 是一个能够统一团队编码风格的工具，能够极大的提高团队执行效率，统一的编码风格能很好的保证代码的可读性。

## why mobx not redux and hooks + context
(ps: hooks + context由于没有做过多的了解 存在一定的学习成本和经验问题 所以没有考虑使用)
### 状态管理的共性
1. 统一维护管理应用状态；
2. 某一状态只有一个可信数据来源（通常命名为store，指状态容器）；
3. 操作更新状态方式统一，并且可控（通常以action方式提供更新状态的途径）；
4. 支持将store与React组件连接，如react-redux，mobx-react；通常使用状态管理库后，我们将React组件从业务上划分为两类：
1. 容器组件（Container Components）：负责处理具体业务和状态数据，将业务或状态处理函数传入展示型组件；
2. 展示型组件（Presentation Components）：负责展示视图，视图交互回调内调用传入的处理函数；
### mobx优点
1. 学习成本少：Mobx基础知识很简单，学习了半小时官方文档和示例代码就搭建了新项目实例；而Redux确较繁琐，流程较多，需要配置，创建store，编写reducer，action，如果涉及异步任务，还需要引入redux-thunk或redux-saga编写额外代码，Mobx流程相比就简单很多，并且不需要额外异步处理库；
2. 面向对象编程：Mobx支持面向对象编程，我们可以使用@observable and @observer，以面向对象编程方式使得JavaScript对象具有响应式能力；而Redux最推荐遵循函数式编程，当然Mobx也支持函数式编程；
3. 模版代码少：相对于Redux的各种模版代码，如，actionCreater，reducer，saga／thunk等，Mobx则不需要编写这类模板代码；

### mobx缺点
1. 过于自由，MobX提供的约定及模版代码很少，如果团队不做一些约定，容易导致团队代码风格不统一。
2. 可拓展，可维护性，也许你会担心Mobx能不能适应后期项目发展壮大呢？确实Mobx更适合用在中小型项目中，但这并不表示其不能支撑大型项目，关键在于大型项目通常需要特别注意可拓展性，可维护性，相比而言，规范的Redux更有优势，而Mobx更自由，需要我们自己制定一些规则来确保项目后期拓展，维护难易程度.

### redux优点

1. 流程规范，按照官方推荐的规范和结合团队风格打造一套属于自己的流程。
2. 函数式编程，在reducer中，接受输入，然后输出，不会有副作用发生，幂等性。
3. 可追踪性，很容易追踪产生BUG的原因。

### redux缺点
1. 流畅太繁琐，需要写各种action，reducer。
2. 要想完成异步数据，得配合其他库。

### 总结
相对于mobx Redux 社区 可扩展性 流行度 占优,适用于大型项目。如果考虑快速的、使用更少的模版代码,构建出一个简单中小型项目，mobx表现的更好。

[参考文章:](https://blog.logrocket.com/redux-vs-mobx/ redux-vs-mobx)