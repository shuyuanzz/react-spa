## 依赖安装 `yarn`
## 项目启动  `yarn start`
## 项目构建  `yarn build`
## 分析打包产物体积 `yarn analyze`

# 技术选型 
## why create-react-app

`Create React App`是 FaceBook 的 React 团队官方出的一个构建 React 单页面应用的脚手架工具。它本身集成了 Webpack，并配置了一系列内置的 loader 和默认的 npm 的脚本，可以很轻松的实现零配置就可以快速开发 React 的应用。这样可以省去一些繁琐的配置流程，其最基础默认功能也基本满足我们的项目需求，也提供了许多扩展功能，可以根据具体需求去做一些引入。

## 项目代码规范风格统一

本项目使用 `Eslint + Prettier + husky + lint-staged `提高前端项目质量、统一项目代码风格:

`Eslint` 代码检查，编辑器启用 Eslint 之后，不符合规范的会自动进行提示。  

`Prettier` 让代码变得更 pretty，会更改不符合检测要求的代码，自动格式化。    

`husky`  git 每步操作的钩子，每执行一个操作都会执行一次对应的钩子函数，执行 pre-commit 操作时，执行 Prettier 格式化脚本，即可自动的格式化代码，让 commit 之后的代码都符合 Prettier规范。  

`lint-staged` lint-staged 就是用来只对变更的文件进行处理的。

### Eslint  

对于Typescript项目的编码规范而言，主要有两种选择ESLint和TSLint。ESLint不仅能规范js代码，通过配置解析器，也能规范TS代码。此外由于性能问题，TypeScript 官方决定全面采用ESLint，甚至把仓库作为测试平台，而 ESLint 的 TypeScript 解析器也成为独立项目，专注解决双方兼容性问题。

### Prettier
#### what?
1. An opinionated code formatter
2. Supports many languages
3. Integrates with most editors
4. Has few options

#### why?

1. You press save and code is formatted
2. No need to discuss style in code review
3. Saves you time and energy

## why react-router & mobx
