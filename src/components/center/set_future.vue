<style scoped>
  .pageContent {
    width: 100%;
    margin-top: -88px;
  }

  .pageContent img {
    width: 100%;
  }

  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .2);
  }

  .showDetail {
    width: 100%;
    height: 100px;
    opacity: 0;
    position: absolute;
    top: 490px;
    left: 0;
  }

  .futAlert {
    position: absolute;
    top: 339px;
    left: 14%;
    width: 72%;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
  }

  .futAlert .futAlert-content {
    width: 90%;
    font-size: 24px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 48px;
    margin: 37px auto;
  }

  .futAlert .futAlert-button {
    vertical-align: center;
    border-radius: 20px;
    border-top: 2px solid rgba(239,239,239,1);
    width: 540px;
    height: 100px;
    font-size: 30px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(226, 104, 220, 1);
    line-height: 40px;
    background: rgba(255, 255, 255, 1);
    padding-top: 30px;
  }

  .futAlert .futAlert-button span {
    display: block;
  }
</style>

<template>
  <div class="content2">
    <headerNav :pageTitle="pageTitle"></headerNav>
    <div class="pageContent">
      <img src="../../assets/img/center/future@2x.png" alt="">
      <div class="mask" v-show="maskShow"></div>
      <button class="showDetail" @click="show"></button>
      <div class="futAlert" v-show="maskShow">
        <div class="futAlert-content">
          糖果世纪将深耕于数字资产领域，以区块链游戏和糖果分发为切入点，着力打造一个分布式的资产管理、资产服务的数据平台，通过数字替身（Avatar）、去中心化媒介（Oracle）实现个体对数字化资产的管理，登记、流通、交换功能，在确保承载资产信息的数据本身是可信赖的基础上，实现点对点的数字资产管理。
          糖果世纪拥有近百人的研发及运营队伍，核心成员来自阿里、网易、百度、平安银行、蚂蚁金服等知名企业。顾问团队来自中国顶级互联网，区块链领域投资机构，涵盖大数据、金融科技、社交领域顶级行业专家，助力糖果世纪业务落地及全球化布局。
        </div>
        <div class="futAlert-button" @click="show"><span>知道了</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderNav from '../base/headerNav'

  export default {
    data() {
      return {
        height: 'height: ',
        maskShow: false,
        pageTitle: "产品介绍"
      }
    },
    components: {
      HeaderNav,
    },
    created(){
    },
    methods: {
      show() {
        if (this.maskShow === false) {
          this.maskShow = true
        } else {
          this.maskShow = false
        }
      }
    }
  }
</script>


