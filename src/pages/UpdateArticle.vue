<template>
  <div class="write-article">
    <form class="article-form" @submit.prevent="submit">
      <my-select v-model="selectedCategory" :options="categoriesOptions">
        Select some categories
      </my-select>
      <div class="categories">
        <div class="category" :key="categoryObj.id" v-for="categoryObj in selectedCategories">
          <div class="category-name"> {{ categoryObj.category }} </div>
          <my-ico ico="cross" class="cross" @click="this.removeCategory(categoryObj)"/>
        </div>
      </div>
      <my-input placeholder="Title" class="title form-element" v-model="title" required maxlength="50"/>
      <textarea placeholder="Write your article here..." class="article form-element" v-model="articleText" required/>
      <my-button type="submit" class="submit-btn form-element">Submit</my-button>
    </form>
  </div>
</template>

<script>
import MyIco from "@/components/ui/MyIco";
import MySelect from "@/components/ui/MySelect";
import MyInput from "@/components/ui/MyInput";
import {mapGetters} from "vuex";
import axios from "axios";
import {toRaw} from "vue";

export default {
  name: "UpdateArticle",
  components: {MyIco, MySelect, MyInput},
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated'
    })
  },
  data() {
    return {
      selectedCategory: '',
      selectedCategories: [],
      categoriesOptions: [],
      title: '',
      articleText: '',
    }
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get(`http://localhost:8080/api/categories`);
        this.categoriesOptions = response.data;
      } catch (e) {
        alert("ошибка во время сетевого запрос");
        console.log(e);
      }
    },

    async submit() {
      try {
        let categoriesIds = toRaw(this.selectedCategories).map(function(item) {
          return item.id
        })
        let article = {
          title:this.title,
          text:this.articleText,
          categories:categoriesIds,
          author:this.authenticated
        }
        await axios.put(`http://localhost:8080/api/article/update/${this.$route.params.id}`, article)
        alert("Article has been edit")
        await this.$router.push("/")
      } catch (e) {
        alert("Update article error")
      }
    },

    removeCategory(category) {
      this.selectedCategories = toRaw(this.selectedCategories).filter(p => p.id !== toRaw(category).id)
    },

    async fetchPost() {
      try {
        const response = await axios.get(`http://localhost:8080/api/articles/${this.$route.params.id}`);
        this.title = response.data.title
        this.articleText = response.data.text
        this.selectedCategories = response.data.categories
      } catch (e) {
        alert("ошибка");
        console.log(e);
      }
    },


  },
  mounted() {
    this.fetchCategories()
    this.fetchPost()
  },
  watch: {
    selectedCategory(newValue) {
      let obj = toRaw(this.categoriesOptions).find(o => o.id === Number(newValue));
      this.selectedCategories.push(obj)
    }
  }
}
</script>

<style scoped>
.categories {
  display: flex;
  padding: 10px;
}

.category {
  background-color: #bdbdbd;
  border-radius: 24px;
  color: white;
  font-size: larger;
  padding: 5px 15px;
  margin: 0 5px;
  display: flex;
  justify-content: center;
}

.cross:hover {
  background-color: #a0a0a0;
  border-radius: 24px;
}

.cross {
  width: 24px;
  height: 24px;
  margin-left: 4px;
}

.article-form {
  padding: 10px;
}

.form-element {
  margin: 10px 0 10px 0;
}

textarea {
  padding: 10px 15px;
  font-size: larger;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  min-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
}

.article-form {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
}
</style>