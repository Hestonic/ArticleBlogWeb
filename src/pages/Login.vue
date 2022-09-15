<template>
  <div class="auth_wrap">
    <form class="login-form" @submit.prevent="submit">
      {{loginForm}}
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
      <div class="buttons">
        <my-button type="submit">Login</my-button>
        <my-link @click="$router.push('/register')">Register</my-link>
      </div>
    </form>
  </div>
</template>

<script>
import MyInput from "@/components/ui/MyInput";
import MyButton from "@/components/ui/MyButton";
import MyLink from "@/components/ui/MyLink";
import { mapActions } from 'vuex'

export default {
  name: "Login",
  components: {MyLink, MyButton, MyInput},

  data() {
    return {
      loginForm: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),

    submit() {
      this.login(this.loginForm)
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