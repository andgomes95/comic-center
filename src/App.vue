<template>
  <div id="app">
    <nav-bar></nav-bar>
    <anuncio-principal />
  </div>
</template>

<script>
import AnuncioPrincipal from './components/Home/AnuncioPrincipal.vue'
import NavBar from './components/NavBar/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    AnuncioPrincipal
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
  min-width: 400px;
  }
</style>
