<template>
  <div>
    <!-- TODO criar tela com inputs para arrastar imagem, procurar no computador, inserir nome, preço e descrição do produto, e botão de confirmar adição-->
    <form class="loginArea">
      <div class="campos__loginArea"><span class="titulo__loginArea">Adicionar novo produto</span></div>
      <div class="campos__loginArea"><input type="text" placeholder="Nome" class="input-nome__loginArea input__loginArea"></div>
      <div class="campos__loginArea"><input type="text" placeholder="Preço do Produto" class="input-nome__loginArea input__loginArea"></div>
      <div class="campos__loginArea"><textarea rows="5" placeholder="Descrição do Produto" class="input__loginArea"></textarea></div>
      <div class="campos__loginArea"><botao rotulo="Adicionar Produto" estilo="primario" url="/"></botao></div>
  </form>
  </div>
</template>

<script>
import Botao from '@/components/Botoes/Botao.vue'
export default {
  components: { Botao },
}
</script>

<style scoped>
  .loginArea{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    background-color: #E5E5E5;
  }
  .campos__loginArea{
    padding: 10px;
  }
  .titulo__loginArea{
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
  }
  .input__loginArea{
      width: 30em;
      border: 4px;
      background: white;
      border-radius: 4px;
      resize:none;
  }
  .input-nome__loginArea{
    height: 2em;
  }

</style>