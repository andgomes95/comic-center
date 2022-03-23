<template>
  <div class="searchBar">
    <input
      type="text"
      placeholder="O que deseja encontrar"
      class="inputSearchbar"
    />
    <font-awesome-icon icon="search" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(brands, solid);

export default {
  components: { FontAwesomeIcon },
  props: {},
  methods: {
    buscaEvent() {
      this.$emit("buscaAtivada");
    },
  },
};
</script>

<style scoped>
.searchBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5em 1.5em;

  width: 15em;
  height: 2em;

  /* Preto/05% */
  background: #f5f5f5;
  border-radius: 20px;
}
.inputSearchbar {
  width: 90%;
  height: 100%;
  border: 0;
  background: #f5f5f5;
}
.inputSearchbar:focus {
  border: 0;
  border-color: #f5f5f5;
}
</style>
