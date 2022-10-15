<template>
  <div class="categories">
    <div class="category" :key="categoryObj.id" v-for="categoryObj in selectedCategories">
      <div class="category-name"> {{ categoryObj.category }} </div>
      <my-ico ico="cross" class="cross" @remove="$emit('remove', categoryObj)" @click="removeCategory"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryList"
}
</script>

<style scoped>

</style>