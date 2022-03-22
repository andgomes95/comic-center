<template>
  <div><form class="loginArea">
    <div class="campos__loginArea"><span class="titulo__loginArea">Iniciar Sessão</span></div>
    <div class="campos__loginArea"><input type="text" placeholder="Nome" class="input-nome__loginArea input__loginArea"></div>
    <div class="campos__loginArea"><textarea rows="5" placeholder="Escreva sua mensagem" class="input__loginArea"></textarea></div>
    <div class="campos__loginArea"><botao rotulo="Enviar" estilo="primario" url="/"></botao></div>
  </form></div>
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