<template>
  <div class="post">
    <div class="post-top">
      <p class="title">Roman Bunka</p>
      <p class="author">coolbob</p>
    </div>
    <p class="content">
      Bunka was born in Frankfurt on 2 December 1951. He started playing the guitar as a teenager.
      In the 1970s, he moved to Munich and joined the world music group Embryo. They toured in Morocco, India and
      Afghanistan, and the music of these countries made a strong impact on Bunka and his fellow musicians. In 1979,
      Embryo traveled overland...
    </p>
    <div class="post_bottom">
      <p class="category">Biography</p>
      <div class="widgets">
        <div class="widget views">
          <my-ico class="ico" ico="eye"></my-ico>
          <p class="widget-value">287</p>
        </div>
        <div class="widget likes">
          <my-ico class="ico" ico="like"></my-ico>
          <p class="widget-value">49</p>
        </div>
      </div>
      <a class="details" href="#">details...</a>
    </div>
  </div>

  <my-button @click="fetchPosts">Post</my-button>
</template>

<script>
import MyIco from "@/components/ui/MyIco";
import axios from 'axios';
import MyButton from "@/components/ui/MyButton";

export default {
  name: "Main",
  components: {MyButton, MyIco},
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get("http://localhost:8080/api/articles")
        this.posts = response.data
        console.log(response)
      } catch (e) {
        alert("ошибка");
        console.log(e)
      }
    }
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
  margin: 0 auto;
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

a {
  font-size: larger;
}

a:link {
  color: teal;
}

a:visited {
  color: teal;
}

a:hover {
  color: #ffcc00;
}
</style>