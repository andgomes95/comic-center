<template>
  <div class="mobileSearchBar">
    <font-awesome-icon icon="search" v-if="isBotaoAparece" @click="buscaAtivada"/>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(brands, solid);
export default {
  components: { FontAwesomeIcon },
  data: () => {
    return{ 
      isBotaoAparece: true,
    }
  },
  methods:{
    buscaAtivada(){
      this.isSearchBarOpen = !this.isSearchBarOpen;
    }
  }

}
</script>

<style scoped>
  .mobileSearchBar {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 0.5em;
    border-radius: 20px;
  }
</style>