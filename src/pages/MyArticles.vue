<template>
  <div>
    <post-list :posts="posts"/>
  </div>
</template>

<script>
import MyButton from "@/components/ui/MyButton";
import MyIco from "@/components/ui/MyIco";
import PostList from "@/components/PostList";
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: "MyArticles",
  components: { MyButton, MyIco, PostList },
  computed: {
    ...mapGetters({
      user: 'auth/user',
    })
  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get("http://localhost:8080/api/articles");
        let userArticles = [];
        let user = this.user
        response.data.articlesList.forEach(function(item, i, arr) {
          if (item.author === user) { userArticles.push(item) }
        })
        this.posts = userArticles;
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