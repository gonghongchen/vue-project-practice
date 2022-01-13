<template>
  <div>
    <h3>这是首页</h3>
    <p>当前的登录状态是：未登录</p>
  </div>
</template>

<script>
export default {
  mounted() {
    throw new Error('抛出一个自定义错误')
  },
  methods: {
    do() {
      console.log(11111, '抛出错误后又调用了这个方法')
    },
  },
}
</script>
