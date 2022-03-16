<template>
  <div class="cardConteudo">
    <img class="imageConteudo" :src="image" :alt="produto">
    <div class="containerConteudo">
      <span class="tituloProduto">{{produto}}</span>
      <span class="precoProduto">{{preco}}</span>
      <span class="detalhesProduto">Ver Produto</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    image: String,
    produto: String,
    preco: String
  }
}
</script>

<style>
  .cardConteudo{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width:100%;
    height: 100%;
    transition: 0.3s;
  }
  .cardConteudo:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  .imageConteudo{
    width: 100%;
    height: 80%;
  }
  .containerConteudo{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
    
    padding: 5%;
    font-family: 'Raleway';
    font-style: normal;
  }
  .precoProduto{
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    padding: 1%;
  }
  .tituloProduto{
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    padding: 1%;
  }
  .detalhesProduto{
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    padding: 1%;
    color: #77AF9C;
  }
</style>