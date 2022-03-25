<template>
  <div class="carrossel">
    <div class="titulo__carrossel" v-if="!semTitulo">
      <span class="texto-titulo__carrossel">{{ titulo }}</span>
      <router-link
        :to="{ name: 'Listagem dos Produtos' }"
        class="ver-tudo__Carrossel"
        v-if="!isProdutoSimilares"
        >Ver tudo <font-awesome-icon icon="arrow-right"
      /></router-link>
    </div>
    <div class="conteudo__carrossel">
      <div class="conteudo-fixo__carrossel">
        <card-conteudo
          class="card-conteudo__carrossel"
          produto="ProdutoXYZ"
          preco="R$ 60,00"
          image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"
          :temLink="true"
        />
        <card-conteudo
          class="card-conteudo__carrossel"
          produto="ProdutoXYZ"
          preco="R$ 60,00"
          image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"
          :temLink="true"
        />
      </div>
      <div class="conteudo-fixo__carrossel">
        <card-conteudo
          class="card-conteudo__carrossel"
          produto="ProdutoXYZ"
          preco="R$ 60,00"
          image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"
          :temLink="true"
        />
        <card-conteudo
          class="card-conteudo__carrossel"
          produto="ProdutoXYZ"
          preco="R$ 60,00"
          image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"
          :temLink="true"
        />
      </div>
      <div class="conteudo-apenas-desktop__carrossel">
        <card-conteudo
          class="card-conteudo__carrossel"
          produto="ProdutoXYZ"
          preco="R$ 60,00"
          image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"
          :temLink="true"
        />
        <card-conteudo
          class="card-conteudo__carrossel"
          produto="ProdutoXYZ"
          preco="R$ 60,00"
          image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"
          :temLink="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardConteudo from "./CardConteudo.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(brands, solid);
export default {
  components: { CardConteudo, FontAwesomeIcon },
  props: {
    isProdutoSimilares: Boolean,
    titulo: String,
    semTitulo: Boolean,
  },
};
</script>

<style scoped>
.carrossel {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem;
}
.titulo__carrossel {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: var(--fonte-principal);
  font-style: normal;
}
.conteudo__carrossel {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.conteudo-apenas-desktop__carrossel {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.conteudo-fixo__carrossel {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.texto-titulo__carrossel {
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
}
.ver-tudo__Carrossel {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: var(--cor-primaria);
}
@media only screen and (max-width: 1100px) {
  .conteudo-apenas-desktop__carrossel {
    display: none !important;
  }
}
@media only screen and (max-width: 750px) {
  .conteudo__carrossel {
    flex-direction: column;
  }
}
</style>
