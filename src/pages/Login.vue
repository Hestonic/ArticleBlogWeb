<template>
  <div class="auth_wrap">
    <form class="login-form">
      <my-input
          v-model="loginForm.login"
          type="text"
          placeholder="Login"
      />
      <my-input
          v-model="loginForm.password"
          type="password"
          placeholder="Password"
      />
      <my-button
          @click="login"
      >
        Login
      </my-button>
    </form>
  </div>
</template>

<script>
import MyInput from "@/components/ui/MyInput";
import MyButton from "@/components/ui/MyButton";
export default {
  name: "Login",
  components: {MyButton, MyInput},

  data() {
    return {
      loginForm: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      alert("login")
    }
  }
}
</script>

<style scoped>
* {
  margin: 10px;
}
.auth_wrap {
  margin: auto;
  width: 30%;
}
</style>