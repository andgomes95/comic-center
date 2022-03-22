<template>
  <router-link 
    :to="url"
    :class="estilo"
    class="botao">
    {{rotulo}}
  </router-link>
</template>

<script>
export default {
   props: {
    rotulo: {
      required: true,
      type: String
    },
    estilo: String,
    url: { 
      required: true
      }
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
    font-family: var(--fonte-principal);
    font-style: normal;
    text-decoration: none;
  }

  .secundario {
    /* Azul/100% */
    border: 1px solid var(--cor-primaria);
    color: var(--cor-primaria);
  }
  .secundario:hover {
    /* Azul/20% */
    background: var(--cor-secundaria);;
  }
  .primario {
    /* Azul/100% */
    background: var(--cor-primaria);
    color: #FEEFDD;
  }
  .primario:hover {
    background: var(--cor-terciaria);
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