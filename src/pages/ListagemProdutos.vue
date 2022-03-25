<template>
  <div class="conteudo">
    <todos-itens-conteudo />
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
