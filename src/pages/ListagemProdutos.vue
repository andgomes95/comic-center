<template>
  <div class="conteudo">
    <todos-itens-conteudo />
    <!-- TODO Criar componente baseada no carrossel, com itens infinitos com o mesmo comportamento. Ao inves de ver tudo, ter botão de adicionar produto -->
  </div>
</template>

<script>
import TodosItensConteudo from "../components/Conteudo/TodosItensConteudo.vue";

export default {
  components: { TodosItensConteudo },
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
