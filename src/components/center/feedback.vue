<style scoped>
  .navBox {
    width: 670px;
    height: 260px;
    border-radius: 20px;
    margin: 20px auto;
    font-size:55px;
    font-family:PingFang-SC-Bold;
    font-weight:600;
  }

  .navBox span {
    float: left;
    display: block;
    margin-top: 90px;
    margin-left: 172px;
  }

  .boxImg01 {
    background: url("../../assets/img/center/banner1@2x.png");
    background-size: 100% 100%;
  }

  .boxImg02 {
    background: url("../../assets/img/center/banner2@2x.png");
    background-size: 100% 100%;
  }
</style>

<template>
  <div class="content2">
    <headerNav :pageTitle="pageTitle"></headerNav>
    <div class="navBox boxImg01" @click="goQuestion">
    </div>
    <div class="navBox boxImg02" @click="goFuture">
    </div>
  </div>

</template>

<script>
  import HeaderNav from '@/components/base/headerNav'

  export default {
    data() {
      return {
        pageTitle: "说明中心",
      }
    },
    components: {
      HeaderNav,
    },
    methods: {
      goQuestion() {
        this.$router.push({path: '/center/set_question'});
      },
      goFuture() {
        this.$router.push({path: '/center/set_future'});
      }
    }
  }
</script>


