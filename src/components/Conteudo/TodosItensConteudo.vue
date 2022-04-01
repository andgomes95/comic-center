<template>
  <div class="todosItens">
    <div class="header__todosItens">
      <span class="titulo__todosItens">{{titulo}}</span>
      <botao
        :url="{ name: 'Inserir Produto' }"
        estilo="primario"
        rotulo="Adicionar Produto"
      ></botao>
    </div>
    <div class="produtos__todosItens">
      <div v-for="conteudoCard in listaDeItens" :key="conteudoCard.id">
        <card-conteudo
          :produto="conteudoCard.nome"
          :preco="'R$ ' +conteudoCard.preco.toFixed(2)"
          :image="conteudoCard.imagem"
          :temLink="false"
          :numeroProduto="conteudoCard.categoria"
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
import axios from "axios";

fontawesome.library.add(brands, solid);
export default {
  components: { CardConteudo, Botao },
  props: {
    isProdutoSimilares: Boolean,
    semTitulo: Boolean,
  },
  data: () => {
    return {
      listaDeItens: [],
      titulo: "Marvel"
    };
  },
    mounted (){
    //http://localhost:3000
    axios.get('https://comic-center-api.herokuapp.com/produtos?=Mangas').then(response =>{
      this.listaDeItens = response.data.filter((item)=>{
          return item.categoria == this.titulo
      })
    })
  },
  watch: {
    "$route.query.titulo":{
      immediate: true,
      async handler(titulo){
        this.titulo = titulo;
          await axios.get('https://comic-center-api.herokuapp.com/produtos?categoria='+titulo).then(response =>{
            console.log(response.data)
            this.produto = response.data;
        })
      }
    }
  }
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
