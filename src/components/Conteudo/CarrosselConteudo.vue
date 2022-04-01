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
          :produto="listaDeCartas[0].nome"
          :preco="'R$ ' +listaDeCartas[0].preco.toFixed(2)"
          :image="listaDeCartas[0].imagem"
          :temLink="true"
        />
        <card-conteudo
          class="card-conteudo__carrossel"
          :produto="listaDeCartas[1].nome"
          :preco="'R$ ' +listaDeCartas[1].preco.toFixed(2)"
          :image="listaDeCartas[1].imagem"
          :temLink="true"
        />
      </div>
      <div class="conteudo-fixo__carrossel">
        <card-conteudo
          class="card-conteudo__carrossel"
          :produto="listaDeCartas[2].nome"
          :preco="'R$ ' +listaDeCartas[2].preco.toFixed(2)"
          :image="listaDeCartas[2].imagem"
          :temLink="true"
        />
        <card-conteudo
          class="card-conteudo__carrossel"
          :produto="listaDeCartas[3].nome"
          :preco="'R$ ' +listaDeCartas[3].preco.toFixed(2)"
          :image="listaDeCartas[3].imagem"
          :temLink="true"
        />
      </div>
      <div class="conteudo-apenas-desktop__carrossel">
        <card-conteudo
          class="card-conteudo__carrossel"
          :produto="listaDeCartas[4].nome"
          :preco="'R$ ' +listaDeCartas[4].preco.toFixed(2)"
          :image="listaDeCartas[4].imagem"
          :temLink="true"
        />
        <card-conteudo
          class="card-conteudo__carrossel"
          :produto="listaDeCartas[5].nome"
          :preco="'R$ ' +listaDeCartas[5].preco.toFixed(2)"
          :image="listaDeCartas[5].imagem"
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
import axios from "axios";

fontawesome.library.add(brands, solid);
export default {
  components: { CardConteudo, FontAwesomeIcon },
  props: {
    isProdutoSimilares: Boolean,
    titulo: String,
    semTitulo: Boolean,
  },
  data: () =>{
    return {
      listaDeCartas: []
    }
  },
  mounted (){
    //http://localhost:3000
    axios.get('https://comic-center-api.herokuapp.com/produtos').then(response =>{
      this.listaDeCartas = response.data.filter((item)=>{
          return item.categoria == this.titulo
      })
    })
  }
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
