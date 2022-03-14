<template>
  <div id="app">
    
    <img alt="Vue logo" src="./assets/balao-comic.png">
    <botao-login></botao-login>
  </div>
</template>

<script>
import BotaoLogin from './components/Botoes/BotaoLogin.vue'

export default {
  name: 'App',
  components: {
    BotaoLogin
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }
</style>
