<template>
  <div class="anuncio">
    <ul class="lista__anuncio">
      <li><h1 class="texto__anuncio">Abril Marvel</h1></li>
      <li>
        <h2 class="texto__anuncio">
          Produtos Selecionados com 33% de desconto
        </h2>
      </li>
      <li>
        <botao
          estilo="primario"
          rotulo="Ver Sessão Marvel"
          class="botao__anuncio"
          url="#marvel"
        ></botao>
      </li>
    </ul>
  </div>
</template>

<script>
import Botao from "../Botoes/Botao.vue";
export default {
  components: { Botao },
};
</script>

<style>
.anuncio {
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
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 41.15%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url(../../assets/banner.jpg);
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
}
.lista__anuncio {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;
  padding: 0% 40% 0% 5%;
  text-align: left;
}
.texto__anuncio {
  color: white;
}
.botao__anuncio {
  padding: 1em 3em;
}
@media only screen and (min-width: 1450px) {
  .anuncio {
    background-size: 100%;
  }
}
</style>
