<style scoped type="text/css">
  .loading-background, .mint-loadmore-top span {
    -webkit-transition: .2s linear;
    transition: .2s linear
  }

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

  .page-loadmore-desc {
    text-align: center;
    color: #666;
    padding-bottom: 5px
  }

  .page-loadmore-desc:last-of-type,
  .page-loadmore-listitem {
    height: 130px;
    width: 100%;
    display: block;
    position: relative;
  }

  .dioData-wrapper {
    width: 89%;
    height: 100%;
    margin: 0 auto;
    border-bottom: rgba(239, 239, 239, 1) solid 2px;
  }

  .dioData-count {
    display: block;
    position: absolute;
    top: 78px;
    right: 45px;
    font-size: 24px;
    font-weight: 400;
    color: rgba(255, 39, 62, 1);
  }

  .dioData-balance {
    display: block;
    position: absolute;
    top: 76px;
    left: 41px;
    font-size: 24px;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
  }

  .dioData-time {
    position: absolute;
    top: 34px;
    color: rgba(153, 153, 153, 1);
    font-size: 24px;
    right: 41px;
  }

  .dioData-type {
    position: absolute;
    top: 30px;
    left: 41px;
    font-size: 28px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }

  .page-loadmore-listitem:first-child {
    border-top: 1px solid #eee
  }

  .page-loadmore-wrapper {
    overflow: scroll;
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
    height: 300px;
    background: url("../../assets/img/index/index_dio_detail.png");
    background-size: 100% 100%;
    position: relative;
  }

  .dio-top-message .dio-top_01 {
    position: absolute;
    display: inline-block;
    font-size: 36px;
    top: 90px;
    left: 62px;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }

  .dio-top-message .dio-top_02 {
    position: absolute;
    display: inline-block;
    color: rgba(255, 255, 255, 1);
    top: 156px;
    left: 62px;
    font-size: 72px;
    font-weight: 400;
  }

  .dio-detail-block {
    position: relative;
    width: 100%;
    height: 140px;
  }

  .dio-detail-block span {
    position: absolute;
    font-size: 36px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    display: block;
    top: 60px;
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
        <span class="dio-top_01">DIO</span>
        <span class="dio-top_02">{{ dioTotal }}</span>
      </div>

      <div class="dio-detail-block">
        <span>DIO明细</span>
      </div>
      <ul class="page-loadmore-list">
        <li v-for="item in dioDataList" class="page-loadmore-listitem">
          <div class="dioData-wrapper">
            <span class="dioData-type">{{ item.type }}-{{ item.remark }}</span>
            <span class="dioData-balance">余额{{ item.balance }}</span>
            <span class="dioData-time">{{ item.time | trimSpace }}</span>
            <span class="dioData-count">{{ item.count }}</span>
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

  </div>
</template>

<script>
  import HeaderNav from '../base/headerNav'
  import {Loadmore} from 'mint-ui'
  import '../../assets/css/dio_detail.css'

  export default {
    data() {
      return {
        title: 'DIO',
        noMoreData: false,
        pageIndex: 1,
        pagesize: 10,
        dioTotal: '',
        dioDataList: [],
        allLoaded: false,
        bottomStatus: '',
        topStatus: '',
        translate: 0,
        moveTranslate: 0,
        base_url: '',
        height: '',
        candyId: 1
      }
    },
    filters: {
      trimSpace(value) {
        let spaceIndex = value.indexOf(' ');
        return value.substring(0,spaceIndex)
      }
    },
    components: {
      HeaderNav,
      Loadmore
    },
    created() {
      this.candyId = this.$route.query.id || 1
      this.base_url = this.$store.state.base_url
      this.getDioData()
    },
    methods: {
      getDioData(page) {
        let this_ = this
        if (page === 'update') {
          console.log(1)
          this_.allLoaded = false
          this_.dioDataList = []
          this_.pageIndex = 1
          this.$http.post('/web/candy_bill',{
              candy_id: 1,
              page: 1,
              pagesize: this_.pagesize
            }).then((result) => {
            if (result.data.code === 0) {
              if (result.data.data.bill.length < this_.pagesize) {
                this_.allLoaded = true
              } else {
                this_.pageIndex++
              }
              this_.dioDataList = this_.dioDataList.concat(result.data.data.bill)

              this_.dioTotal = result.data.data.gold_coin;
              this_.$refs.loadmore.onTopLoaded()
            } else {
            }

          })
        } else {
          this.$http.post('/web/candy_bill',{
              candy_id: 1,
              page: this_.pageIndex,
              pagesize: this_.pagesize
            }).then((result) => {
            if (result.data.code === 0) {
              if (result.data.data.bill.length < this_.pagesize) {
                this_.allLoaded = true
              } else {
                this_.pageIndex++
              }

              this_.dioDataList = this_.dioDataList.concat(result.data.data.bill)
              this_.dioTotal = result.data.data.gold_coin;
              this.$refs.loadmore.onBottomLoaded()
            } else {

            }


          })
        }

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


