<template>
  <ul class="nav-bar">
    <li><logo></logo></li>
    <li><search-bar class="search-bar__nav-bar"/></li>
    <li class="right__nav-bar">
      <botao-login class="right-child__nav-bar"></botao-login>
      <!--TODO navbar mobile não operacional-->
      <mobile-search-bar class="mobile-search__nav-bar right-child__nav-bar" />
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
.right__nav-bar{
  display: flex;
  justify-content: center;
}
.right-child__nav-bar{
  margin: 1em;
}
@media only screen and (max-width: 750px) {
  .search-bar__nav-bar{ 
    display: none !important; 
  }
}
@media only screen and (min-width: 750px){
  .mobile-search__nav-bar{
    display: none !important;
  }
}
</style>