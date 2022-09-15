<template>
  <div class="post" v-for="post in posts">
    <div class="post-top">
      <p class="title">{{ post.title }}</p>
      <p class="author">{{ post.author }}</p>
    </div>
    <p class="content">{{ post.text }}</p>
    <div class="post_bottom">
      <p class="category">{{ post.categories[0].category }}</p>
      <div class="widgets">
        <div class="widget views">
          <my-ico class="ico" ico="eye"></my-ico>
          <p class="widget-value">{{ post.articleInfo.views }}</p>
        </div>
        <div class="widget likes">
          <my-ico class="ico" ico="like"></my-ico>
          <p class="widget-value">{{ post.articleInfo.likes }}</p>
        </div>
      </div>
      <my-link @click="$router.push(`/article/${post.id}`)">details...</my-link>
    </div>
  </div>
</template>

<script>
import MyIco from "@/components/ui/MyIco";
import MyLink from "@/components/ui/MyLink";

export default {
  components: {MyLink, MyIco},
  name: "post-list",
  props: {
    posts: Array,
    // required: true,
  }
}
</script>

<style scoped>
.post {
  background-color: rgb(247, 247, 247);
  padding: 10px;
  border-radius: 20px;
}

.post, .post-top, .post_bottom, .widgets, .widgets, .widget {
  display: flex;
}

.post-top, .content, .post_bottom {
  padding: 20px;
}

.post {
  flex-direction: column;
  width: 50%;
  margin: 0 auto 20px auto;
}

.post-top {
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: xx-large;
  font-weight: bold;
}

.author {
  color: gray;
  font-size: larger;
}

.content {
  font-size: larger;
}

.post_bottom {
  justify-content: space-between;
  align-items: center;
}

.category {
  font-size: xx-large;
}

.widget {
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


</style>