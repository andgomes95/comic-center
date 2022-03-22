<template>
  <section class="bar__footer">
    <div class="content__footer">
      <div class="info-empresa__footer">
        <logo class="logo__footer"></logo>
        <ul class="links-uteis__footer">
          <li class="links-uteis-child__footer">Quem Somos Nós</li>
          <li class="links-uteis-child__footer">Politica de Privacidade</li>
          <li class="links-uteis-child__footer">Programa Fidelidade</li>
          <li class="links-uteis-child__footer">Nossas Lojas</li>
          <li class="links-uteis-child__footer">Quero ser Franqueado</li>
          <li class="links-uteis-child__footer">Anuncie aqui</li>
        </ul>
      </div>
      <div><form class="contatos__footer">
        <div class="contatos-child__footer"><span class="fale-conosco__footer">Fale Conosco</span></div>
        <div class="contatos-child__footer"><input type="text" placeholder="Nome" class="input-nome__footer input__footer"></div>
        <div class="contatos-child__footer"><textarea rows="5" placeholder="Escreva sua mensagem" class="input__footer"></textarea></div>
        <div class="contatos-child__footer"><botao rotulo="Enviar" estilo="primario" url="/"></botao></div>
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
  background: var(--cor-secundaria);
  padding: 20px;
}
.content__footer{
  display: inline-grid;
  grid-template-columns: 2fr 1.5fr;
}
.info-empresa__footer{
  display: grid;
  grid-template-columns: 1fr 1.5fr;
}
.links-uteis__footer{
  display: flex;
  list-style-type: none;
  flex-direction: column;
  align-items: flex-start;
}
.logo__footer{
  position: static;
  padding: 20px 20px;
}
.links-uteis-child__footer{
  font-family: var(--fonte-principal);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #464646;
  margin: 0.5em;
}
.contatos__footer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 0;
}
.fale-conosco__footer{
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
}
.input__footer{
    width: 30em;
    border: 4px;
    background: white;
    border-radius: 4px;
    resize:none;
}
.input-nome__footer{
  height: 2em;
}
.contatos-child__footer{
  padding: 5px;
}
@media only screen and (max-width: 900px) {
  .info-empresa__footer{ 
    display: flex;
    flex-direction: column;
  }
}
@media only screen and (max-width: 750px) {
  .content__footer{ 
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>