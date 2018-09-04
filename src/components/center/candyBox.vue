<style scoped type="text/css">

  .mint-loadmore-top span {
    display: inline-block;
    vertical-align: middle
  }

  .mint-loadmore-top span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
  }

  .page-loadmore .mint-spinner {
    display: inline-block;
    vertical-align: middle
  }

  .page-loadmore-listitem {
    height: 130px;
    width: 100%;
    display: block;
    position: relative;
    margin-bottom: 30px;
  }

  .page-loadmore-list {
    margin-top: -36px;
  }

  .candy-wrapper {
    width: 89%;
    height: 100%;
    margin: 0 auto;
    border-bottom: rgba(239, 239, 239, 1) solid 2px;
  }

  .candy-wrapper {
    position: relative;
    width: 90%;
    height: 120px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 1);
    margin: 0 auto;

  }

  .candy-icon {
    width: 60px;
    height: 60px;
    background-size: 100% 100%;
    position: absolute;
    top: 30px;
    left: 30px;
  }

  .candy-name {
    position: absolute;
    top: 42px;
    left: 112px;
    font-size: 28px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }

  .candy-count {
    position: absolute;
    top: 24px;
    right: 30px;
    font-size: 28px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }

  .candy-price {
    position: absolute;
    top: 62px;
    right: 30px;
    font-size: 28px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }

  .mint-loadmore-bottom span {
    display: inline-block;
    -webkit-transition: .2s linear;
    transition: .2s linear;
    vertical-align: middle
  }

  .mint-loadmore-bottom span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
  }

  .topStatus {
    height: 80px !important;
  }

  .noMoreData {
    height: 100px;
    width: 100%;
  }

  .noMoreData-span {
    display: block;
    height: 30px;
    margin: 0 auto;
    margin-top: 40px;
  }

  .noMoreData-span img {
    display: inline-block;
    margin-top: 4px;
    width: 75px;
    height: 24px;
    background-size: 100% 100%;
  }

  .noMoreData-span span {
    font-size: 23px;
    height: inherit;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
  }

  .dio-top-message {
    width: 100%;
    height: 360px;
    background: url("../../assets/img/index/pic@2x.png");
    background-size: 100% 100%;
    position: relative;
  }

  .dio-top-message .dio-top_01 {
    position: absolute;
    display: block;
    width: 100%;
    top: 100px;
    left: 0;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }

  .dio-top-message .dio-top_02 {
    position: absolute;
    display: block;
    width: 100%;
    top: 178px;
    left: 0;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    font-size: 72px;
    font-weight: 400;
  }

  .dio-detail-block span {
    position: absolute;
    font-size: 36px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    display: block;
    top: 100px;
    left: 42px;
  }

  .drop-down-loadmore {
    margin-top: 30px;
    font-size: 24px;
    color: rgba(153, 153, 153, .8);
  }

  .drop-down-updata {
    margin-bottom: 30px;
    font-size: 24px;
    color: rgba(153, 153, 153, .8);
  }


</style>
<template>
  <div class="content2">
    <headerNav :pageTitle="title"></headerNav>

    <mt-loadmore :top-method="loadTop" @translate-change="translateChange"
                 @top-status-change="handleTopChange" :auto-fill="false"
                 :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded"
                 ref="loadmore" class="loadmore-content" style="margin-top: -26px;">

      <div class="dio-top-message">
        <span class="dio-top_01">糖果盒子(总资产)</span>
        <span class="dio-top_02">¥{{ candyTotal }}</span>
      </div>

      <ul class="page-loadmore-list">
        <li v-for="item in candyList" class="page-loadmore-listitem">
          <div class="candy-wrapper">
            <img class="candy-icon" :src=" item.candy_icon " alt="">
            <span class="candy-name">{{ item.candy_name }}</span>
            <span class="candy-count">{{ item.user_count }}</span>
            <span class="candy-price">￥{{ item.price }}</span>
          </div>
        </li>
      </ul>


      <div slot="top" class="mint-loadmore-top topStatus">
        <span v-show="topStatus !== 'loading'" class="drop-down-updata">
          下拉刷新
        </span>
        <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
      </div>

      <div slot="bottom" class="mint-loadmore-bottom topStatus">
        <span v-show="bottomStatus !== 'loading'" class="drop-down-loadmore">
          上拉加载更多
        </span>
        <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
      </div>

      <div class="noMoreData" v-show="allLoaded">
        <span class="noMoreData-span">
          <img src="../../assets/img/base/icon_nomore@2x.png" alt="">
          <span> 没有更多了哦！</span>
        </span>
      </div>
    </mt-loadmore>

    <!--<router-link :to="{ path: '/index/dio', query: {}}">dio</router-link>-->
  </div>
</template>

<script>
  import HeaderNav from '../base/headerNav'
  import {Loadmore} from 'mint-ui'
  import '../../assets/css/dio_detail.css'

  export default {
    data() {
      return {
        title: '糖果盒子',
        noMoreData: false,
        pageIndex: 1,
        pagesize: 20,
        candyTotal: '',
        candyList: [],
        allLoaded: false,
        bottomStatus: '',
        topStatus: '',
        translate: 0,
        moveTranslate: 0,
        base_url: '',
        height: ''
      }
    },
    components: {
      HeaderNav,
      Loadmore
    },
    created() {
      this.getDioData()
    },
    methods: {
      getDioData(page) {
        let this_ = this
        if (page === 'update') {
          console.log(1)
          this_.allLoaded = false
          this_.candyList = []
          this_.pageIndex = 1
          this.$http.post('/web/get_candy', {
              page: 1,
              pagesize: this_.pagesize
            }
          ).then((result) => {
            console.log(result)
            if (result.data.code === 0) {
              console.log(result.data.data);
              if (result.data.data.candy.length < this_.pagesize) {
                this_.allLoaded = true
              } else {
                this_.pageIndex++
              }
              this_.candyList = this_.candyList.concat(result.data.data.candy)

              this_.candyTotal = result.data.data.all_price;
              this_.$refs.loadmore.onTopLoaded()
            } else {
              console.log(result.data.info)
            }

          })
        } else {
          console.log(2)

          this.$http.post('/web/get_candy', {
              page: this_.pageIndex,
              pagesize: this_.pagesize
            }
          ).then((result) => {
            if (result.data.code === 0) {
              console.log(result.data.data);
              if (result.data.data.candy.length < this_.pagesize) {
                this_.allLoaded = true
              } else {
                this_.pageIndex++
              }

              this_.candyList = this_.candyList.concat(result.data.data.candy)
              this_.candyTotal = result.data.data.all_price;
              this.$refs.loadmore.onBottomLoaded()
            } else {
              console.log(result.data.info)
            }
          })
        }
      },
      getDioDataDemo() {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue < 40) {
            console.log(1);
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i);
            }
          } else {
            console.log(2);
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded();
        }, 1500);
      },
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
        console.log('bottom')
        this.getDioData()
      },
      handleTopChange(status) {
        this.moveTranslate = 1;
        this.topStatus = status;
      },
      translateChange(translate) {
        const translateNum = +translate;
        this.translate = translateNum.toFixed(2);
        this.moveTranslate = (1 + translateNum / 70).toFixed(2);
      },
      loadTop() {
        console.log('top')
        this.getDioData('update')
      },
    },
    mounted() {
      this.height = document.documentElement.clientHeight - 188;
      console.log(this.height);
      console.log(document.documentElement.clientHeight);
    }
  }
</script>

