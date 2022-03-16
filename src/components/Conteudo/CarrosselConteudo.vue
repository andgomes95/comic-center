<template>
  <div class="carrosselGrid">
    <div class="tituloCarrossel" v-if="!isProdutoSimilares">
      <span class="textoTituloCarrossel">{{titulo}}</span>
      <span class="verTudoTextCarrossel">Ver tudo <font-awesome-icon icon="arrow-right"/></span>
    </div>
    <div class="conteinerCarrosselConteudo">
      <div class="conteinerCarrosselConteudoMobile">
      <card-conteudo class="containerCarrosselConteudoChild" produto="ProdutoXYZ" preco="R$ 60,00" image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"/>
      <card-conteudo class="containerCarrosselConteudoChild" produto="ProdutoXYZ" preco="R$ 60,00" image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"/>
      </div>
      <div class="conteinerCarrosselConteudoMobile">
      <card-conteudo class="containerCarrosselConteudoChild" produto="ProdutoXYZ" preco="R$ 60,00" image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"/>
      <card-conteudo class="containerCarrosselConteudoChild" produto="ProdutoXYZ" preco="R$ 60,00" image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"/>
      </div>
      <div class="carrosselConteudoOnlyDesktop">
      <card-conteudo class="containerCarrosselConteudoChild" produto="ProdutoXYZ" preco="R$ 60,00" image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"/>
      <card-conteudo class="containerCarrosselConteudoChild" produto="ProdutoXYZ" preco="R$ 60,00" image="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"/>
      </div>
    </div>
  </div>
</template>

<script>
import CardConteudo from './CardConteudo.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(brands, solid);
export default {
  components:{CardConteudo, FontAwesomeIcon},
  props: {
    isProdutoSimilares: Boolean,
    titulo: String
  }
}
</script>

<style>
  .carrosselGrid{
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1%;
  }
  .tituloCarrossel{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1%;
    font-family: 'Raleway';
    font-style: normal;
  }
  .conteinerCarrosselConteudo{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
  .containerCarrosselConteudoChild{
    padding: 1%;
  }
  .carrosselConteudoOnlyDesktop{
     display: flex;
    flex-direction: row;
    align-items: center;
  }
  .conteinerCarrosselConteudoMobile{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .textoTituloCarrossel{
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
  }
  .verTudoTextCarrossel{
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #2A7AE4;
  }
  @media only screen and (max-width: 1000px){
    .carrosselConteudoOnlyDesktop{
      display: none !important;
    }
  }
  @media only screen and (max-width: 600px){
    .conteinerCarrosselConteudo{
      flex-direction: column;
    }
  }

</style>