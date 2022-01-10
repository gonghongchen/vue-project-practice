# vue-project-practice

`Vue` 相关知识技术的学习和练习

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