<template>
  <div>
    <article-id-item :post="post" :article-info="articleInfo"/>
  </div>
</template>

<script>
import MyIco from "@/components/ui/MyIco";
import axios from "axios";
import MyButton from "@/components/ui/MyButton";
import ArticleIdItem from "@/components/ArticleIdItem";

export default {
  name: "ArticleIdPage",
  components: {ArticleIdItem, MyButton, MyIco},
  data() {
    return {
      post: {},
      articleInfo: {}
    }
  },
  methods: {
    async fetchPost() {
      try {
        const response = await axios.get(`http://localhost:8080/api/articles/${this.$route.params.id}`);
        this.post = response.data;
        this.articleInfo = response.data.articleInfo
      } catch (e) {
        alert("ошибка");
        console.log(e);
      }
    }
  },
  mounted() {
    this.fetchPost();
  }
}
</script>

<style scoped>

</style>