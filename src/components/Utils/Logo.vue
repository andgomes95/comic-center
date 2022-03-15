<template>
  <div class="logo">
    <img alt="Vue logo" src="@/assets/lime.png" class="lime-logo">
    <div class="texto-logo">
      <span class="texto-logo-inicio">Lime</span><span class="texto-logo-fim">Comics</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .logo{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: "Roboto";
    position: static;
    width: 176px;
    height: 50px;
    left: 0px;
    top: 0px;
  }
  .texto-logo{
    font-weight: 400;
    font-size: 20px;
    line-height: 19px;
  }
  .texto-logo-inicio{
    color: #132A13;
  }
  .texto-logo-fim{
    color: #77AF9C;
  }
  .lime-logo{
    height: 100%;
    width: 25%;
  }
</style>