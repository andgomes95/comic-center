<!--TODO Ajustar tamanhos definidos previamente para Rem ou %-->
<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="fundoConteudo__app">
    <router-view />
    </div>
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
}
.fundoConteudo__app {
  background-color: #efefef;
}
.conteudo__app{
  align-items: center;
}
</style>
