<template>
  <div class="anuncioPrincipal">
    <ul class="anuncioLista">
    <li><h1 class="anuncioTexto">Dezembro Promocional</h1></li>
    <li><h2 class="anuncioTexto">Produtos Selecionados com 33% de desconto</h2></li>
    <li><botao estilo="primarioLime" rotulo="Ver Promoções" class="anuncioBotao"></botao></li>
    </ul>
  </div>
</template>

<script>
import Botao from '../Botoes/Botao.vue'
export default {
  components: { Botao },

}
</script>

<style>
.anuncioPrincipal{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  position: static;
  width: 100%;
  height: 352px;
  left: 0px;
  top: 115px;
  padding: auto;

  /* imagemhero */
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, rgba(0, 0, 0, 0.8) 100%), green;
  background-repeat: no-repeat;
  background-size: 100%;
}
.anuncioLista{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;
  padding: 0% 40% 0% 5%;
  text-align: left;
}
.anuncioTexto{
  color: white;
}
.anuncioBotao{
  padding: 1em 3em;
}
</style>