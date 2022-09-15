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

    <div class="title"> {{ post.title }}</div>
    <div class="categories">
      <div class="category" v-for="categoryModel in post.categories"> {{ categoryModel.category }}</div>
    </div>
    <div class="content"> {{ post.text }}</div>
  </div>
</template>

<script>
import MyIco from "@/components/ui/MyIco";

export default {
  components: {MyIco},
  name: "article-id-item",
  props: {
    post: Object,
    articleInfo: Object
  }
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
</style>