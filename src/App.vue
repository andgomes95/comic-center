<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view class="fundoConteudo__app"/>
    <footer-bar />
    <rodape-desenvolvedor></rodape-desenvolvedor>
  </div>
</template>

<script>
import FooterBar from "./components/FooterBar/FooterBar.vue";
import RodapeDesenvolvedor from "./components/FooterBar/RodapeDesenvolvedor.vue";
import NavBar from "./components/NavBar/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterBar,
    RodapeDesenvolvedor,
  },
};
</script>

<style>
:root {
  --cor-primaria: #2a7ae4; /* #77AF9C; */
  --cor-secundaria: #d4e4fa; /*#FEEFDD;*/
  --cor-terciaria: #5595e9; /*#132A13;*/
  --fonte-principal: "Raleway";
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 450px;
}
.fundoConteudo__app{
  background-color: #EEEEEE;
}
</style>
