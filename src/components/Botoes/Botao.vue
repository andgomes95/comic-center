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
    border: 1px solid var(--primarioAluraGeek);
    color: var(--primarioAluraGeek);
  }
  .secundario:hover {
    /* Azul/20% */
    background: var(--secundarioAluraGeek);;
  }
  .primario {
    /* Azul/100% */
    background: var(--primarioAluraGeek);
    color: #FEEFDD;
  }
  .primario:hover {
    background: var(--terciarioAluraGeek);
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