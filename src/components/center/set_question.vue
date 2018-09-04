<style scoped>
  .pageContent {
    width: 100%;
    margin-top: -88px;
  }

  .pageContent img {
    width: 100%;
  }
</style>

<template>
  <div class="content2">
    <headerNav :pageTitle="pageTitle"></headerNav>
    <div class="pageContent">
      <img src="../../assets/img/center/question@2x.png" alt="">
    </div>
  </div>
</template>

<script>
  import HeaderNav from '../base/headerNav'
  export default {
    data() {
      return {
        pageTitle: "产品介绍"
      }
    },
    components: {
      HeaderNav,
    },
  }
</script>


