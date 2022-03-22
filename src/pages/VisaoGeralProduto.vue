<template>
  <div>

    <carrossel-conteudo :isProdutoSimilares="true" titulo="Produtos Similares"/>
  </div>
</template>

<script>
import CarrosselConteudo from '../components/Conteudo/CarrosselConteudo.vue'
export default {
  components: { CarrosselConteudo },

}
</script>

<style>

</style>