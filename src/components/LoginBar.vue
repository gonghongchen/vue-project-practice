<template>
  <div class="bar">
    <a-button v-if="true" type="primary" @click="gotoLogin">去登录</a-button>
    <a-button v-else type="default" @click="logout">退出登录</a-button>
  </div>
</template>

<script>
export default {
  name: 'LoginBar',
  methods: {
    gotoLogin() {
      this.$router.push('/login')
    },
    logout() {},
  },
}
</script>

<style scoped>
.bar {
  margin-bottom: 50px;
}
</style>
