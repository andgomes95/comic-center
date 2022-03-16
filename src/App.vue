<template>
  <div id="app">
    <nav-bar></nav-bar>
    <anuncio-principal />
    <carrossel-conteudo :isProdutoSimilares="false" titulo="Limão"/>
    <carrossel-conteudo :isProdutoSimilares="false" titulo="Limão"/>
    <carrossel-conteudo :isProdutoSimilares="false" titulo="Limão"/>
    <footer-bar />
    <rodape-desenvolvedor></rodape-desenvolvedor>
  </div>
</template>

<script>
import CarrosselConteudo from './components/Conteudo/CarrosselConteudo.vue'
import FooterBar from './components/FooterBar/FooterBar.vue'
import RodapeDesenvolvedor from './components/FooterBar/RodapeDesenvolvedor.vue'
import AnuncioPrincipal from './components/Home/AnuncioPrincipal.vue'
import NavBar from './components/NavBar/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    AnuncioPrincipal,
    FooterBar,
    RodapeDesenvolvedor,
    CarrosselConteudo
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
