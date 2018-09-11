<style scoped type="text/css">
  .loading-background, .mint-loadmore-top span {
    -webkit-transition: .2s linear;
    transition: .2s linear
  }

  .mint-loadmore {
    margin-top: -80px;
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

  .dioData-remark {
    display: block;
    position: absolute;
    top: 40px;
    left: 41px;
    font-size: 28px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }

  .dioData-time {
    display: block;
    position: absolute;
    top: 85px;
    left: 41px;
    font-size: 24px;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
  }

  .dioData-tpeCount {
    width: 200px;
    position: absolute;
    top: 50px;
    right: 41px;
  }

  .dioData-count {
    font-size: 28px;
    font-weight: 500;
    color: #FF273E;
  }

  .dioData-type {
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
    font-size:23px;
    height: inherit;
    font-weight:500;
    color:rgba(153,153,153,1);
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
                 ref="loadmore" class="loadmore-content">

      <ul class="page-loadmore-list">
        <li v-for="item in dioDataList" class="page-loadmore-listitem">
          <div class="dioData-wrapper">
            <span class="dioData-remark">{{ item.remark }}</span>
            <span class="dioData-time">{{ item.time }}</span>
            <div class="dioData-tpeCount">
              <span class="dioData-type">{{ item.type }}</span>
              <span class="dioData-count">{{ item.power_count }}</span>
            </div>
          </div>
        </li>
      </ul>


      <div slot="top" class="mint-loadmore-top topStatus">
        <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">
          <!--<img src="../../assets/img/base/icon_refresh@2x.png" alt="">-->
        </span>
        <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
      </div>


      <div slot="top" class="mint-loadmore-top topStatus">
        <span v-show="topStatus !== 'loading'" class="drop-down-updata">
          下拉刷新
        </span>
        <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
      </div>

      <div slot="bottom" class="mint-loadmore-bottom topStatus">
        <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">

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
  import {Loadmore} from 'mint-ui';
  import '../../assets/css/loadmore_top.css'

  export default {
    data() {
      return {
        title: '算力记录',
        noMoreData: false,
        pageIndex: 1,
        pagesize: 10,
        dioDataList: [],
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
      this.base_url = this.$store.state.base_url;
      this.getDioData()
    },
    methods: {
      getDioData(page) {
        let this_ = this
        if (page === 'update') {
          this_.allLoaded = false
          this_.dioDataList = []
          this_.pageIndex = 1
          this.$http.post('/power/power_bill', {
              page: 1,
              pagesize: this_.pagesize
            })
          .then((result) => {
            if (result.data.data.count < this_.pagesize) {
              this_.allLoaded = true
            } else {
              this_.pageIndex++
            }
            this_.dioDataList = this_.dioDataList.concat(result.data.data.list)
            this.$refs.loadmore.onTopLoaded()
          })
        } else {
					this.$http.post('/power/power_bill', {
              page: this_.pageIndex,
              pagesize: this_.pagesize
            }).then((result) => {
            if (result.data.data.count < this_.pagesize) {
              this_.allLoaded = true
            } else {
              this_.pageIndex++
            }
            this.$refs.loadmore.onBottomLoaded()

            this_.dioDataList = this_.dioDataList.concat(result.data.data.list)
          })
        }

      },
      getDioDataDemo() {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue < 40) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i);
            }
          } else {
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded();
        }, 1500);
      },
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
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
        this.getDioData('update')
      },
    },
    mounted() {
      this.height = document.documentElement.clientHeight - 188;
    }
  }
</script>


