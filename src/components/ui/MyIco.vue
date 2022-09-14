<template>
  <svg v-if="ico === 'eye'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5.25C7.4505 5.25 3.5985 8.082 2.25 12C3.5985 15.918 7.4505 18.75 12 18.75C16.5495 18.75 20.4015 15.918 21.75 12C20.4015 8.082 16.5495 5.25 12 5.25Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

  <svg v-else-if="ico === 'like'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5015 9.75H15V5.2695C15 4.43025 14.3198 3.75 13.4805 3.75C13.0193 3.75 12.582 3.96 12.294 4.32L6.75 11.25H6.75075H6.75V18.75L9 20.25H18.3547C19.0237 20.25 19.6117 19.806 19.7955 19.1617L21.663 12.618C22.0725 11.181 20.9948 9.75 19.5015 9.75Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.75 9.75H2.25V20.25H6.75V9.75Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.5 18C4.91421 18 5.25 17.6642 5.25 17.25C5.25 16.8358 4.91421 16.5 4.5 16.5C4.08579 16.5 3.75 16.8358 3.75 17.25C3.75 17.6642 4.08579 18 4.5 18Z" fill="black"/>
  </svg>
</template>

<script>
export default {
  name: "my-ico",
  props: ['ico']
};
</script>

<style scoped>

</style>