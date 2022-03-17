<template>
  <section class="bar__footer">
    <div class="contentFooter">
      <div class="info-empresa__footer">
        <logo class="logoFooter"></logo>
        <ul class="linksUteis">
          <li class="linksUteisChildLink">Quem Somos Nós</li>
          <li class="linksUteisChildLink">Politica de Privacidade</li>
          <li class="linksUteisChildLink">Programa Fidelidade</li>
          <li class="linksUteisChildLink">Nossas Lojas</li>
          <li class="linksUteisChildLink">Quero ser Franqueado</li>
          <li class="linksUteisChildLink">Anuncie aqui</li>
        </ul>
      </div>
      <div><form class="contatosFooter">
        <div class="contatosChildLink"><span class="FaleConoscoFooter">Fale Conosco</span></div>
        <div class="contatosChildLink"><input type="text" placeholder="Nome" class="inputNameFooter inputFooter"></div>
        <div class="contatosChildLink"><textarea rows="3" placeholder="Escreva sua mensagem" class="inputFooter"></textarea></div>
        <div class="contatosChildLink"><botao rotulo="Enviar" estilo="primario"></botao></div>
      </form></div>
    </div>
  </section>
</template>

<script>
import Botao from '../Botoes/Botao.vue'
import Logo from '../Utils/Logo.vue'
export default {
  components:{ Logo, Botao }
}
</script>


<style scoped>
.bar__footer{
  background: var(--secundarioAluraGeek);
  padding: 20px;
}
.contentFooter{
  display: inline-grid;
  grid-template-columns: 2fr 1.5fr;
}
.info-empresa__footer{
  display: grid;
  grid-template-columns: 1fr 1.5fr;
}
.linksUteis{
  display: flex;
  list-style-type: none;
  flex-direction: column;
  align-items: flex-start;
}
.logoFooter{
  position: static;
  padding: 20px 20px;
}
.linksUteisChildLink{
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #464646;
  position: static;
  margin: 0.2em 0.5em;
}
.contatosFooter{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 0;
}
.faleConoscoFooter{
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
}
.inputFooter{
    width: 30em;
    border: 4px;
    background: white;
    border-radius: 4px;
    resize:none;
}
.inputNameFooter{
  height: 2em;
}
.contatosChildLink{
  padding: 5px;
}
@media only screen and (max-width: 900px) {
  .info-empresa__footer{ 
    display: flex;
    flex-direction: column;
  }
}
@media only screen and (max-width: 750px) {
  .contentFooter{ 
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>