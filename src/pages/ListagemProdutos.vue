<template>
  <div>
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
<style scoped></style>
