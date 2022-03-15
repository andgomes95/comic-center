<template>
  <div 
    :class="estilo"
    class="botao">
    {{rotulo}}
  </div>
</template>

<script>
export default {
   props: {
    rotulo: {
      required: true,
      type: String
    },
    estilo: String
  },
}
</script>

<style scoped>
  .botao{
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    /* Texto */
    font-family: 'Raleway';
    font-style: normal;
  }

  .secundario {
    /* Azul/100% */
    border: 1px solid #132A13;
    color: #132A13;
  }
  .secundario:hover {
    /* Azul/20% */
    background: #77AF9C;
  }
  .primario {

    /* Azul/100% */
    background: #132A13;
    /* Preto/branco */
    color: #FEEFDD;
  }
  .primario:hover {
    background: #77AF9C;
  }

  

  @media only screen and (max-width: 600px) {
    .botao{
      padding: 12px 16px;
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
    }

  }

  @media only screen and (min-width: 600px){
    .botao{
      padding: 16px;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
  }
</style>