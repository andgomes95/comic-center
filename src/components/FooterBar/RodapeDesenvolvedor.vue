<template>
  <ul class="rodapeDesenvolvedor">
    <li class="rodapeDesenvolvedorChild">Desenvolvido por <b>André Gomes</b></li>
    <li class="rodapeDesenvolvedorChild">2022</li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>
.rodapeDesenvolvedor{
  display: flex;
  flex-direction: column;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background: #FFFFFF  
}
.rodapeDesenvolvedorChild{
  padding:5px;
}
</style>