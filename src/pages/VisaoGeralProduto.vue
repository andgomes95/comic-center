<template>
  <div class="conteudo__visaoGeralProduto">
    <div class="produtoPrincipal__visaoGeralProduto">
      <img
        class="imagemPrincipal__visaoGeralProduto"
        :src="produto.imagem"
      />
      <div class="texto__visaoGeralProduto">
        <span class="titulo__visaoGeralProduto">{{ produto.nome }}</span>
        <span class="preco__visaoGeralProduto">{{ 'R$ ' + produto.preco.toFixed(2) }}</span>
        <span>{{ produto.descricao }} </span>
      </div>
    </div>
    <carrossel-conteudo
      :isProdutoSimilares="true"
      :titulo="produto.categoria"
    />
  </div>
</template>

<script>
import CarrosselConteudo from "../components/Conteudo/CarrosselConteudo.vue";
import axios from "axios";
export default {
  components: { CarrosselConteudo },
  data: () => {
    return {
      produto: {
        nome: "",
        descricao: "",
        preco: "0",
        imagem: "",
        categoria: ""
      }
    };
  },
  watch:{
    "$route.query.produto":{
      immediate: true,
      async handler(produto){
          await axios.get('https://comic-center-api.herokuapp.com/produtos?nome='+produto).then(response =>{
            console.log(response.data)
            this.produto = response.data[0];
        })
      }
    }
  }
};
</script>

<style scoped>
.conteudo__visaoGeralProduto {
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.produtoPrincipal__visaoGeralProduto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5%;
}
.imagemPrincipal__visaoGeralProduto {
  width: 100%;
  height: 100%;
  max-width: 350px;
  max-height: 500px;
}
.texto__visaoGeralProduto {
  display: flex;
  flex-direction: column;

  text-align: start;
  padding: 2% 5%;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #464646;
  justify-content: flex-start;
}
.titulo__visaoGeralProduto {
  font-weight: 500;
  font-size: 52px;
  line-height: 61px;
  padding: 1% 0;
}
.preco__visaoGeralProduto {
  font-weight: 700;
  padding: 1% 0;
}

@media only screen and (min-width: 1100px) {
  .conteudo__visaoGeralProduto {
    padding: 1% 15%;
  }
}
@media only screen and (max-width: 750px) {
  .produtoPrincipal__visaoGeralProduto {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
