<template>
  <div>
    <!-- TODO Criar componente baseada no carrossel, com itens infinitos com o mesmo comportamento. Ao inves de ver tudo, ter botão de adicionar produto -->
    <botao
      :url="{ name: 'Inserir Produto' }"
      estilo="primario"
      rotulo="Adicionar Produto"
    ></botao>
  </div>
</template>

<script>
import Botao from "../components/Botoes/Botao.vue";

export default {
  components: { Botao },
};
</script>

<style></style>
