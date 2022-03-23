<template>
  <div>
    <anuncio-principal />
    <div class="conteudo">
      <carrossel-conteudo :isProdutoSimilares="false" titulo="Limão" />
      <carrossel-conteudo :isProdutoSimilares="false" titulo="Laranja" />
      <carrossel-conteudo :isProdutoSimilares="false" titulo="Lima" />
    </div>
  </div>
</template>

<script>
import CarrosselConteudo from "../components/Conteudo/CarrosselConteudo.vue";
import AnuncioPrincipal from "../components/Home/AnuncioPrincipal.vue";
export default {
  components: { CarrosselConteudo, AnuncioPrincipal },
};
</script>

<style scoped>
.conteudo {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
@media only screen and (min-width: 900px) {
  .conteudo {
    padding: 1% 15%;
  }
}
</style>
