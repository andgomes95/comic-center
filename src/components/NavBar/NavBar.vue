<template>
  <ul class="nav-bar">
    <li><logo></logo></li>
    <li>INSERIR SEARCH BAR</li>
    <li><botao-login></botao-login></li>
  </ul>
</template>

<script>
import BotaoLogin from '../Botoes/BotaoLogin.vue'
import Logo from '../Utils/Logo.vue'
export default {
  components: { Logo, BotaoLogin },

}
</script>

<style scoped>
.nav-bar{
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 20px;
  overflow: hidden;
}
</style>