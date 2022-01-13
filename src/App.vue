<template>
  <div id="app">
    <LoginBar />
    <router-view></router-view>
  </div>
</template>

<script>
import LoginBar from '@components/LoginBar.vue'

export default {
  name: 'App',
  components: {
    LoginBar,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
