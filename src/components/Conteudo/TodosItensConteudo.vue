<template>
  <div class="todosItens">
    <div class="header__todosItens">
      <span class="titulo__todosItens">Titulo Chamativo</span>
      <botao
        :url="{ name: 'Inserir Produto' }"
        estilo="primario"
        rotulo="Adicionar Produto"
      ></botao>
    </div>
    <div class="produtos__todosItens">
      <div v-for="n in 20" :key="n">
        <card-conteudo
          :class="conteudoCard.class"
          :produto="conteudoCard.produto"
          :preco="conteudoCard.preco"
          :image="conteudoCard.image"
          :temLink="conteudoCard.temLink"
          :numeroProduto="conteudoCard.numeroProduto"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardConteudo from "./CardConteudo.vue";
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";
import Botao from "../Botoes/Botao.vue";

fontawesome.library.add(brands, solid);
export default {
  components: { CardConteudo, Botao },
  props: {
    isProdutoSimilares: Boolean,
    titulo: String,
    semTitulo: Boolean,
  },
  data: () => {
    return {
      conteudoCard: {
        class: "card-conteudo__todosItems",
        produto: "ProdutoXYZ",
        preco: "R$ 60,00",
        image:
          "https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000",
        temLink: false,
        numeroProduto: "#1111111",
      },
      n: 0,
    };
  },
};
</script>

<style scoped>
.todosItens {
  margin: 1rem 2rem;
}
.header__todosItens {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: var(--fonte-principal);
  font-style: normal;
}
.titulo__todosItens {
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
}
.produtos__todosItens {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}
@media only screen and (max-width: 1100px) {
  .produtos__todosItens {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
@media only screen and (max-width: 750px) {
  .produtos__todosItens {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
