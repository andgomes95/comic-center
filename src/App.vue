<template>
  <div id="app">
    <nav-bar></nav-bar>
    <anuncio-principal />
    <home />
    <footer-bar />
    <rodape-desenvolvedor></rodape-desenvolvedor>
  </div>
</template>

<script>
import FooterBar from './components/FooterBar/FooterBar.vue'
import RodapeDesenvolvedor from './components/FooterBar/RodapeDesenvolvedor.vue'
import AnuncioPrincipal from './components/Home/AnuncioPrincipal.vue'
import NavBar from './components/NavBar/NavBar.vue'
import Home from './pages/Home.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    AnuncioPrincipal,
    FooterBar,
    RodapeDesenvolvedor,
    Home
  }
}
</script>

<style>
:root{
  --cor-primaria: #77AF9C;/*#2A7AE4;*/
  --cor-secundaria: #FEEFDD;/*#D4E4FA;*/
  --cor-terciaria:#132A13;/*#5595E9;*/
  --fonte-principal: 'Raleway';
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 450px;
  }
</style>
