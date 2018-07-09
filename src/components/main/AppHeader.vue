<template>
  <div class="layui-header">
    <div class="layui-logo">后台管理系统</div>
    <ul class="layui-nav layui-layout-right">
      <li class="layui-nav-item">
        <a href="javascript:void(0);">超级管理员</a>
        <dl class="layui-nav-child">
          <dd><a href="javascript:void(0);">基本资料</a></dd>
          <dd><a href="javascript:void(0);">安全设置</a></dd>
        </dl>
      </li>
      <li class="layui-nav-item"><a href="/">退出</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "AppHeader"
  }
</script>

<style scoped>

</style>