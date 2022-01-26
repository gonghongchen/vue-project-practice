# vue-project-practice

`Vue` 相关知识技术的学习和练习

## 异常处理
`Vue.config.errorHandler` 方法可以捕获到渲染和观察期间未捕获的错误，也能够给出具体的错误信息、错误出现的实例、错误出现的具体场景。相关演示代码详见 `main.js` 和 `error.vue` 这两个文件。

`TODO` 有个问题是：对于 render 期间出现的异常会导致页面渲染失败，如果想在出现渲染错误的情况下另外展示一些内容以增加页面交互的友好性的话，目前针对 `main.js` 和 `error.vue` 通过 `hasRenderError` 和 `refresh` 配合着做了相应处理，也能够达到上述的效果，但仔细想了下觉得这种方法虽然适用于单页场景，但渲染的异常处理显然更需要一种比较通用简洁的方式，目前还是不知道怎么处理？？？在 `React` 项目里，由于捕获异常的方法就在生命周期中，所以可以通过在顶层文件里面进行统一处理，但 `Vue` 里面捕获异常的方法是独立的，所以一时想不到怎么处理。

## 代码格式校验及格式化处理方案
使用 `eslint` + `prettier` 的组合，将 `eslint` 格式校验能力的优势和 `prettier` 格式化处理能力的优势结合起来。用到的库如下：`eslint-plugin-vue` + `eslint` + `prettier` + `eslint-config-prettier` + `eslint-plugin-prettier` + `babel-eslint`

  部分包的说明：
  - `eslint-plugin-vue` 是针对 `Vue.js` 的官方 `ESLint` 插件，这个插件可以允许我们使用 `ESLint` 检查 `<template>` 和 `<script>` 代码块。[官方文档](https://eslint.vuejs.org/)
  - `eslint-config-prettier`： 当项目同时存在 eslint 和 prettier 时，两者在某些格式上的处理会存在差异，通过这个插件来处理差异。[官方文档](https://github.com/prettier/eslint-config-prettier/)
  - `eslint-plugin-prettier` 这个插件的作用在于使用 prettier 的规则对代码进行校验。[官方文档](https://github.com/prettier/eslint-plugin-prettier)
  - `babel-eslint` [官方文档](https://github.com/babel/babel-eslint)

详细的配置内容和规则见 `.eslintrc.js` 和 `.prettierrc.js` 两个文件的代码

针对 VSCode 编辑器可以在项目中增加 `.vscode` 配置文件，以便在编辑代码时可以很方便地通过保存来实时格式化代码，详细见 `.vscode/settings.json`

通过使用 `husky` 和 `lint-stage` 在 `commit` 阶段对代码进行格式化校验和处理，保证提交的代码格式正确，详见 `package.json` 的相关配置信息