<template>
  <!-- 正常渲染就展示以下内容 -->
  <div v-if="!hasRenderError">
    <a-empty description="这是错误页" />
    <a-button @click="throwError">抛个异常</a-button>
    <!-- 在 render 中出现异常的话也能被 Vue.config.errorHandler 方法捕获到，但也会导致页面渲染失败。比如下面尝试使用未定义的 obj 的 a 属性就会出现异常 -->
    <p>{{ obj.a }}</p>
  </div>
  <!-- 如果渲染异常了，就展示下面的内容 -->
  <div v-else>
    <p>页面渲染失败啦</p>
    <a-button @click="refresh">刷新试试</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasRenderError: false,
    }
  },
  // 无论是在生命周期函数还是在自定义事件中抛出异常，都会被 Vue.config.errorHandler 方法捕获到，且不会影响页面的正常渲染
  mounted() {
    throw new Error('抛出一个自定义错误：mounted。但不影响页面正常渲染。')
  },
  methods: {
    throwError() {
      throw new Error('抛出一个自定义错误：throwError。但不影响页面正常渲染')
    },
    refresh() {
      // 这里通过新增 obj 并将 hasRenderError 设置为 false 来消除渲染异常
      this.obj = { a: 'a' }
      this.hasRenderError = false
    },
  },
}
</script>
