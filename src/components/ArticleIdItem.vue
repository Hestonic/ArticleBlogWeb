<template>
  <div class="post">
    <div class="post-top">
      <div class="author">Author: {{ post.author }}</div>
      <div class="widgets">

        <div class="widget views">
          <my-ico class="ico" ico="eye"></my-ico>
          <p class="widget-value">{{ articleInfo.views }}</p>
        </div>

        <div class="widget likes">
          <my-ico class="ico" ico="like"></my-ico>
          <p class="widget-value">{{ articleInfo.likes }}</p>
        </div>

      </div>

    </div>

    <div>
      <my-button class="edit-btn" v-if="post.author === user" @click="$router.push(`/update-article/${this.$route.params.id}`)">Edit post</my-button>
      <my-button v-if="post.author === user" @click="deletePost">Delete post</my-button>
    </div>

    <div class="title"> {{ post.title }}</div>
    <div class="categories">
      <div class="category" v-for="categoryModel in post.categories"> {{ categoryModel.category }}</div>
    </div>
    <div class="content"> {{ post.text }}</div>
  </div>
</template>

<script>
import MyIco from "@/components/ui/MyIco";
import {mapGetters} from "vuex";
import MyButton from "@/components/ui/MyButton";
import axios from "axios";

export default {
  components: {MyButton, MyIco},
  name: "article-id-item",
  computed: {
    ...mapGetters({
      user: 'auth/user',
    })
  },
  props: {
    post: Object,
    articleInfo: Object
  },
  methods: {
    async deletePost() {
      try {
        await axios.delete(`http://localhost:8080/api/article/delete/${this.$route.params.id}`);
        alert("Article has been deleted")
        await this.$router.push("/")
      } catch (e) {
        alert("ошибка");
        console.log(e);
      }
    },
  },
}
</script>

<style scoped>
.post, .post-top, .widgets, .widget, .categories {
  display: flex;
}

.post {
  width: 50%;
  height: 100%;
  margin: auto;
  flex-direction: column;
}

.post-top {
  justify-content: space-between;
}

.author {
  color: #ffcc00;
  font-size: larger;
  padding: 10px;
}

.title {
  font-size: xxx-large;
  font-weight: bold;
  padding: 10px;
}

.widget {
  align-items: center;
  padding: 0 10px;
}

.ico {
  width: 20px;
  height: 20px;
  filter: invert(40%);
  margin: auto;
}

.widget-value {
  margin-left: 5px;
  font-size: large;
}

.categories {
  padding: 10px;
}

.category {
  background-color: #bdbdbd;
  border-radius: 24px;
  color: white;
  font-size: larger;
  padding: 5px 15px;
  margin: 0 5px;
}

.content {
  padding: 10px;
  font-size: x-large;
}

.edit-btn {
  margin-right: 20px;
}
</style>