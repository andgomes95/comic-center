<template>
  <ul class="nav-bar">
    <li><logo></logo></li>
    <li><search-bar class="searchBar"/></li>
    <li class="right-nav-bar">
      <botao-login class="right-nav-bar-child"></botao-login>
      <mobile-search-bar class="mobileSearchBar right-nav-bar-child" />
    </li>
  </ul>
</template>

<script>
import BotaoLogin from '../Botoes/BotaoLogin.vue'
import Logo from '../Utils/Logo.vue'
import SearchBar from '../Utils/SearchBar.vue'
import MobileSearchBar from '../Utils/MobileSearchBar.vue'
export default {
  components: { Logo, BotaoLogin, SearchBar,MobileSearchBar },

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
.right-nav-bar{
  display: flex;
  justify-content: center;
}
.right-nav-bar-child{
  margin: 1em;
}
@media only screen and (max-width: 600px) {
  .searchBar{ 
    display: none !important; 
  }
}
@media only screen and (min-width: 600px){
  .mobileSearchBar{
    display: none !important;
  }
}
</style>