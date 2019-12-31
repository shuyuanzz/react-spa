This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## why create-react-app

`Create React App`是 FaceBook 的 React 团队官方出的一个构建 React 单页面应用的脚手架工具。它本身集成了 Webpack，并配置了一系列内置的 loader 和默认的 npm 的脚本，可以很轻松的实现零配置就可以快速开发 React 的应用。这样可以省去一些繁琐的配置流程，其最基础默认功能也基本满足我们的项目需求，也提供了许多扩展功能，可以根据具体需求去做一些引入。

## why Eslint & Prettier

对于Typescript项目的编码规范而言，主要有两种选择ESLint和TSLint。ESLint不仅能规范js代码，通过配置解析器，也能规范TS代码。此外由于性能问题，TypeScript 官方决定全面采用ESLint，甚至把仓库作为测试平台，而 ESLint 的 TypeScript 解析器也成为独立项目，专注解决双方兼容性问题。

## 项目代码规范风格统一

本项目使用 `Eslint + Prettier + husky + lint-staged `提高前端项目质量、统一项目代码风格:

`Eslint` 代码检查，编辑器启用 Eslint 之后，不符合规范的会自动进行提示。  

`Prettier` 让代码变得更 pretty，会更改不符合检测要求的代码，自动格式化。    

`husky`  git 每步操作的钩子，每执行一个操作都会执行一次对应的钩子函数，执行 pre-commit 操作时，执行 Prettier 格式化脚本，即可自动的格式化代码，让 commit 之后的代码都符合 Prettier规范。  

`lint-staged` lint-staged 就是用来只对变更的文件进行处理的。

## why react-router & mobx
