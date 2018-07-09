<template>
  <div>
    <AppSide></AppSide>
    <AppMain></AppMain>
  </div>
</template>

<script>
  import AppSide from "./AppSide";
  import AppMain from "./AppMain";

  export default {
    name: "AppBody",
    components: {AppMain, AppSide}
  }
</script>

<style scoped>

</style>