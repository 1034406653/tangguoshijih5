<style scoped>
  .content3 {
    max-width: 750px;
    margin: 0 auto;
  }

  .pageContent {
    width: 100%;
    margin-top: -88px;
  }

  .pageContent img {
    width: 100%;
  }
</style>

<template>
  <div class="content2 content3">
    <headerNav :pageTitle="pageTitle"></headerNav>
    <div class="pageContent">
      <img src="../../assets/img/center/question@2x.png" alt="" onclick="return false">
    </div>
  </div>
</template>

<script>
  import HeaderNav from '../base/headerNav'
  export default {
    data() {
      return {
        pageTitle: '问题反馈'
      }
    },
    components: {
      HeaderNav,
    },
  }
</script>


