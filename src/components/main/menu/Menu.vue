<template>
  <li class="layui-nav-item layui-nav-itemed">
    <a class="" href="javascript:void(0);">{{parent.name}}</a>
    <dl class="layui-nav-child">
      <dd v-for="menu in parent.children">
        <a :href="menu.url">{{menu.name}}</a>
      </dd>
    </dl>
  </li>
</template>

<script>
  export default {
    name: "Menu",
    data() {
      return {
        parent: {
          name: '所有商品',
          children: [
            {name: '列表一', url: '1'},
            {name: '列表二', url: '2'},
            {name: '列表三', url: '3'}
          ]
        }
      }
    }
  }
</script>

<style scoped>

</style>