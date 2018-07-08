<template>
  <div class="login-img login-form">
    <div class="login">
      <h1>后台管理系统</h1>
      <p></p>
      <form class="layui-form">
        <div class="layui-form-item">
          <input type="text" v-model="$v.admin.username.$model" placeholder="请输入账号" class="layui-input">
        </div>
        <div class="layui-form-item">
          <input type="password" v-model="$v.admin.password.$model" placeholder="请输入密码" class="layui-input">
        </div>
        <button class="layui-btn login_btn" @click="login">登陆系统</button>
      </form>
    </div>
  </div>
</template>

<script>
  import {alphaNum, maxLength, minLength, required} from 'vuelidate/lib/validators'

  export default {
    name: "Login",
    data() {
      return {admin: {username: '', password: ''}}
    },
    validations: {
      admin: {
        username: {
          required,
          alphaNum,
          minLength: minLength(5),
          maxLength: maxLength(16)
        },
        password: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(16)
        }
      }
    },
    methods: {
      login: function () {
        if (this.$v.$invalid) {
          const username = this.$v.admin.username;
          const password = this.$v.admin.password;
          if (!username.required || !password.required) {
            this.$layer.msg('账号和密码不能为空！');
            return;
          }
          if (!username.alphaNum) {
            this.$layer.msg('账号应为字母和数字组合！');
            return;
          }
          if (!username.minLength || !username.maxLength) {
            this.$layer.msg('账号长度应为5至16位！');
            return;
          }
          if (!password.minLength || !password.maxLength) {
            this.$layer.msg('密码长度应为6至16位！');
            return;
          }
        }
        this.$store.commit('increment', '123');
        this.$router.push(this.$route.query.redirect || '/home');
      }
    }
  }
</script>

<style scoped>
  .login-form {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 90;
    background: url(../assets/login-bg.png) fixed center center;
  }

  .login {
    height: 200px;
    width: 260px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -150px 0 0 -150px;
    z-index: 99;
  }

  .login h1 {
    text-align: center;
    color: #fff;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .login_btn {
    width: 100%;
  }
</style>