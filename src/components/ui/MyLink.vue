<template>
  <a><slot></slot></a>
</template>

<script>
export default {
  name: "my-link"
}
</script>

<style scoped>
a {
  font-size: larger;
  color: teal;
}

a:hover {
  color: #ffcc00;
}
</style>