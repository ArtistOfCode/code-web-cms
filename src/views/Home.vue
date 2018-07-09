<template>
  <div class="layui-layout layui-layout-admin">
    <AppHeader></AppHeader>
    <AppBody></AppBody>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
  import AppHeader from "../components/main/AppHeader";
  import AppBody from "../components/main/AppBody";
  import AppFooter from "../components/main/AppFooter";

  export default {
    name: 'home',
    components: {AppFooter, AppBody, AppHeader}
  }
</script>
