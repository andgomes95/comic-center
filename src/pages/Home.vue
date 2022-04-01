<template>
  <div>
    <anuncio-principal />
    <div class="conteudo">
      <carrossel-conteudo id="mangas" :isProdutoSimilares="false" titulo="Mangas" />
      <carrossel-conteudo id="marvel" :isProdutoSimilares="false" titulo="Marvel" />
      <carrossel-conteudo id="dc" :isProdutoSimilares="false" titulo="DC" />
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
@media only screen and (min-width: 1100px) {
  .conteudo {
    padding: 1% 15%;
  }
}
</style>
