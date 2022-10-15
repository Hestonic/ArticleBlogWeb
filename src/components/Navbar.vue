<template>
  <div class="navbar">
    <div class="logo" @click="$router.push('/')">ArticleBlog</div>
    <div class="navbar_btns">
      <my-button class="btn" @click="$router.push('/login')">Authorization</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/ui/MyButton";
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Navbar",
  components: {MyButton},
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user',
    })
  },
  methods: {
    ...mapActions({
      logOutAction: 'auth/logOut'
    }),
    logOut() {
      this.logOutAction().then(() => {
        this.$router.replace({
          name: "main"
        })
      })
    }
  }
}
</script>

<style scoped>
.logo {
  cursor: pointer;
  font-size: x-large;
  margin-right: 15px;
}

.logo:hover {
  color: teal;
}

.navbar {
  height: 60px;
  background-color: #F7F7F7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
}

.logo-wrap {
  display: flex;
  justify-content: center;
}

.navbar_btns {
  margin-left: auto;
}

.btn {
  margin: 0 10px;
}

.profile {
  display: flex;
  align-items: center;
}

.profile-name {
  margin-right: 10px;
  font-size: large;
}

</style>