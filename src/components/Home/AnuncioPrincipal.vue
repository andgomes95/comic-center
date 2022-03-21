<template>
  <div class="anuncio">
    <ul class="lista__anuncio">
    <li><h1 class="texto__anuncio">Dezembro Promocional</h1></li>
    <li><h2 class="texto__anuncio">Produtos Selecionados com 33% de desconto</h2></li>
    <li><botao estilo="primario" rotulo="Ver Promoções" class="botao__anuncio"></botao></li>
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
.anuncio{
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
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, rgba(0, 0, 0, 0.8) 100%), url(../../assets/banner.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}
.lista__anuncio{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;
  padding: 0% 40% 0% 5%;
  text-align: left;
}
.texto__anuncio{
  color: white;
}
.botao__anuncio{
  padding: 1em 3em;
}
</style>