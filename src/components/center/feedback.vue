<style scoped>
  .navBox {
    width: 670px;
    height: 260px;
    opacity: 0.8;
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
    background-size: 100% 100%;
  }

  .boxImg02 {
    background-size: 100% 100%;
  }
</style>

<template>
  <div class="content2">
    <headerNav :pageTitle="pageTitle"></headerNav>
    <div class="navBox boxImg01" @click="goQuestion">
      <span>基本信息反馈</span>
    </div>
    <div class="navBox boxImg02" @click="goFuture">
      <span>未来信息展示</span>
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


