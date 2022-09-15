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

export default {
  name: "Navbar",
  components: {MyButton}
}
</script>

<style scoped>
.logo {
  cursor: pointer;
  font-size: x-large;
}

.logo:hover {
  color: teal;
}

.navbar {
  height: 60px;
  background-color: #F7F7F7;
  display: flex;
  align-items: center;
  padding: 0 50px;
}

.navbar_btns {
  margin-left: auto;
}

.btn {
  margin: 0 10px;
}
</style>