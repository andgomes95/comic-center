<template>
  <router-link class="logo" :to="{ name: 'Home' }">
    <img alt="Vue logo" src="@/assets/lime.png" class="lime-logo" />
    <div class="texto-logo">
      <span class="texto-logo-inicio">Lime</span
      ><span class="texto-logo-fim">Comics</span>
    </div>
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Roboto";
  position: static;
  width: 176px;
  height: 50px;
  left: 0px;
  text-decoration: none;
  top: 0px;
}
.texto-logo {
  font-weight: 400;
  font-size: 30px;
  line-height: 30px;
}
.texto-logo-inicio {
  color: var(--cor-primaria);
}
.texto-logo-fim {
  color: black;
}
.lime-logo {
  height: 100%;
}
</style>
