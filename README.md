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

[参考文章](https://juejin.im/post/5d19b0305188254e2e4e78e8)为什么要使用TypeScript

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

## why hooks
[参考文章](https://zh-hans.reactjs.org/docs/hooks-intro.html)

## 缓存
### 使用 Cache-Control: max-age=31536000 用于 build/static 资源，而 Cache-Control: no-cache 用于其他所有内容。