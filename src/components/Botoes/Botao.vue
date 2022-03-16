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

  .secundarioLime {
    /* Azul/100% */
    border: 1px solid #2A7AE4;
    color: #2A7AE4;
  }
  .secundarioLime:hover {
    /* Azul/20% */
    background: #D4E4FA;
  }
  .primarioLime {
    /* Azul/100% */
    background: #2A7AE4;
    color: #FEEFDD;
  }
  .primarioLime:hover {
    background: #D4E4FA;
  }
  .secundario {
    border: 1px solid #2A7AE4;
    color: #2A7AE4;
  }
  .secundario:hover {
    background: #D4E4FA;
  }
  .primario {
    background: #2A7AE4;
    color: #FEEFDD;
  }
  .primario:hover {
    background: #5595E9;
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