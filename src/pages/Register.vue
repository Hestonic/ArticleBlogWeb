<template>
  <div class="auth_wrap">
    <form class="register-form" @submit.prevent="submit">

      <my-input
          v-model="registerForm.login"
          type="text"
          placeholder="Login"
      />
      <my-input
          v-model="registerForm.password"
          type="password"
          placeholder="Password"
      />
      <my-input
          v-model="registerForm.repeatPassword"
          type="password"
          placeholder="Repeat password"
      />
      <div class="buttons">
        <my-button
            type="submit"
        >
          Register
        </my-button>
        <my-link @click="$router.push('/login')">Login</my-link>
      </div>
    </form>
  </div>
</template>

<script>
import MyInput from "@/components/ui/MyInput";
import MyButton from "@/components/ui/MyButton";
import MyLink from "@/components/ui/MyLink";
export default {
  name: "Register",
  components: {MyLink, MyButton, MyInput},

  data() {
    return {
      registerForm: {
        login: '',
        password: '',
        repeatPassword: ''
      }
    }
  },
  methods: {
    submit() {
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