<template>
  <!--TODO criar display dinamico para exibir inumeros cards-->
  <div class="todosItens">
    <botao
      :url="{ name: 'Inserir Produto' }"
      estilo="primario"
      rotulo="Adicionar Produto"
    ></botao>
    <div class="produtos__todosItens">
      <card-conteudo
        class="card-conteudo__todosItens"
        produto="ProdutoXYZ"
        preco="R$ 60,00"
        image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"
      />
      <card-conteudo
        class="card-conteudo__todosItems"
        produto="ProdutoXYZ"
        preco="R$ 60,00"
        image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"
      />
      <card-conteudo
        class="card-conteudo__todosItems"
        produto="ProdutoXYZ"
        preco="R$ 60,00"
        image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"
      />
      <card-conteudo
        class="card-conteudo__todosItems"
        produto="ProdutoXYZ"
        preco="R$ 60,00"
        image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"
      />
      <card-conteudo
        class="card-conteudo__todosItems"
        produto="ProdutoXYZ"
        preco="R$ 60,00"
        image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"
      />
      <card-conteudo
        class="card-conteudo__todosItems"
        produto="ProdutoXYZ"
        preco="R$ 60,00"
        image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"
      />
      <card-conteudo
        class="card-conteudo__todosItems"
        produto="ProdutoXYZ"
        preco="R$ 60,00"
        image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"
      />
      <card-conteudo
        class="card-conteudo__todosItems"
        produto="ProdutoXYZ"
        preco="R$ 60,00"
        image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"
      />
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
};
</script>

<style scoped></style>
