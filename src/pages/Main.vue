<template>
  <div>
    <post-list :posts="posts"/>
  </div>
</template>

<script>
import MyIco from "@/components/ui/MyIco";
import axios from 'axios';
import MyButton from "@/components/ui/MyButton";
import PostList from "@/components/PostList";

export default {
  name: "Main",
  components: { MyButton, MyIco, PostList },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get("http://localhost:8080/api/articles");
        this.posts = response.data.articlesList;
      } catch (e) {
        alert("ошибка");
        console.log(e);
      }
    }
  },
  mounted() {
    this.fetchPosts();
  }
}
</script>

<style scoped>

</style>