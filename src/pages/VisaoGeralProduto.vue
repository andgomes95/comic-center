<template>
  <div class="conteudo__visaoGeralProduto">
    <div class="produtoPrincipal__visaoGeralProduto">
      <img
        class="imagemPrincipal__visaoGeralProduto"
        src="https://media-we-cdn.oriflame.com/-/media/Images/Ingredient-Library/Ingredients/lime.ashx?u=0101010000"
      />
      <div class="texto__visaoGeralProduto">
        <span class="titulo__visaoGeralProduto">{{ titulo }}</span>
        <span class="preco__visaoGeralProduto">{{ preco }}</span>
        <span>{{ texto }} </span>
      </div>
    </div>
    <carrossel-conteudo
      :isProdutoSimilares="true"
      titulo="Produtos Similares"
    />
  </div>
</template>

<script>
import CarrosselConteudo from "../components/Conteudo/CarrosselConteudo.vue";
export default {
  components: { CarrosselConteudo },
  data: () => {
    return {
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius tristique egestas. Aenean ut gravida turpis, a mattis lorem. Nullam sit amet dui tristique, convallis erat blandit, consequat enim. Proin viverra sodales facilisis. Maecenas vel rhoncus justo. Donec rutrum elementum ante, quis venenatis ante blandit sed. Curabitur sed blandit ante. Cras eleifend mi eu felis placerat scelerisque. Nulla efficitur tellus eu urna efficitur vulputate. Aenean sodales semper mi vitae venenatis. In hendrerit id nibh ac fermentum. Fusce est est, ullamcorper non lectus at, lobortis convallis leo. Pellentesque sodales mauris in libero viverra, eu efficitur dolor posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam purus tellus, faucibus dignissim velit quis, feugiat pretium quam. Vestibulum erat libero, vulputate vitae nunc eget, tristique convallis leo.",
      titulo: "LIMÃO",
      preco: "R$ 5,00",
    };
  },
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
  justify-content: center;
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

@media only screen and (min-width: 900px) {
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
