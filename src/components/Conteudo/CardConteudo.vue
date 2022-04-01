<template>
  <div class="card-conteudo">
    <img class="imagem__card-conteudo" :src="image" :alt="produto" />
    <div class="container__card-conteudo">
      <span class="titulo__card-conteudo">{{ produto }}</span>
      <span class="preco__card-conteudo">{{ preco }}</span>
      <router-link
        v-if="temLink"
        :to="{ name: 'Visão Geral do Produto', query:{produto: this.produto} }"
        class="detalhes__card-conteudo"
        >Ver Produto</router-link
      >
      <span v-if="!temLink" class="preco__card-conteudo">{{
        "#"+numeroProduto
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    produto: String,
    preco: String,
    numeroProduto: String,
    temLink: Boolean,
  },
};
</script>

<style scoped>
.card-conteudo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 10rem;
  min-height: 15rem;
  transition: 0.3s;
  margin: 0.5rem;
}
.card-conteudo:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.imagem__card-conteudo {
  width: 100%;
  width: 100%;
}
.container__card-conteudo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: start;
  width: 100%;
  padding: 5%;
  font-family: var(--fonte-principal);
  font-style: normal;
}
.preco__card-conteudo {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  padding: 1%;
}
.titulo__card-conteudo {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  padding: 1%;
}
.detalhes__card-conteudo {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  padding: 1%;
  color: var(--cor-primaria);
  text-decoration: none;
}
</style>
