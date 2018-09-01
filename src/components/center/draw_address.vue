<style scoped>
  input::-webkit-input-placeholder {
    font-size: 24px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: #999999;
  }

  input::-moz-placeholder { /* Mozilla Firefox 19+ */
    font-size: 24px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: #999999;
  }

  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    font-size: 24px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: #999999;
  }

  input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    font-size: 24px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: #999999;
  }

  .draw-data-wrapper {
    width: 100%;
    background: rgba(255, 255, 255, 1);
  }

  .draw-data-wrapper .draw-data-block {
    position: relative;
    width: 90%;
    margin: 0 auto;
    height: 100px;
    border-bottom: rgba(239, 239, 239, 1) solid 1px;
  }

  .draw-data-wrapper .draw-data-block .draw-data-span {
    position: absolute;
    display: block;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    font-size: 28px;
    top: 34px;
    left: 0;
  }

  .draw-data-wrapper .draw-data-block .draw-coin {
    font-size: 28px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    width: 100%;
    top: 34px;
    left: 0;
    position: absolute;
  }

  .draw-data-wrapper .draw-data-block .selectCoin {
    font-size: 24px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: #999999;
  }

  .draw-data-wrapper .draw-data-block .draw-address {
    font-size: 24px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    top: 34px;
    left: 12%;
    width: 76%;
    position: absolute;
  }

  .draw-data-wrapper .draw-data-block .draw-data-reset {
    top: 30px;
    right: 0;
    width: 37px;
    height: 37px;
    position: absolute;
  }

  .draw-data-wrapper .draw-data-block .draw-data-reset img {
    background-size: 100% 100%;
  }

  .draw-button {
    margin-top: 80px;
    width: 670px;
    height: 80px;
    background: linear-gradient(140deg, rgba(229, 118, 236, 1), rgba(116, 65, 163, 1));
    border-radius: 40px;
    box-shadow: none;
    outline: none;
    border: none;
    font-size: 30px;
    font-family: PingFang-SC-Medium;
    letter-spacing: 5px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 32px;
  }

  .buttonDisClass {
    background: gray;
  }
</style>


<template>
  <div class="content2">
    <headerNav :pageTitle="title" :goBackShow="goBackShow" @headRightClick="deleteAddress"
               :isRightShow="isRightShow" :rightColor="color" :rightValue="rightValue"></headerNav>

    <div class="draw-data-wrapper">
      <div class="draw-data-block" @clcik="selectListShow">
        <span class="draw-data-span">币种</span>
        <div class="draw-coin">{{ queryData.name }}</div>
        <div class="draw-coin selectCoin" v-if="selectCoin">请选择币种</div>
      </div>
      <div class="draw-data-block">
        <span class="draw-data-span">地址</span>
        <input type="text" class="draw-address" v-model="queryData.value" placeholder="请输入或黏贴地址" @blur="">
        <span class="draw-data-reset" @click="reset" v-if="resetShow">
          <img src="../../assets/img/center/delete.png" alt="">
        </span>
      </div>
    </div>

    <button class="draw-button" :class="buttonDisClass" @click="add_currency" :disabled="buttonDis">保存</button>

    <div class="piker-wrapper">
      <div class="piker-title">
        <span class="piker-cancel">取消</span>
        <span class="piker-title">币种</span>
        <span class="piker-yes">确定</span>
      </div>
      <mt-picker :slots="slots" @change="onValuesChange" :visible-item-count="visibleCount" :showToolbar="true"></mt-picker>
    </div>
  </div>
</template>

<script>
  import HeaderNav from '../base/headerNav'
  import {Picker} from 'mint-ui'
  import {MessageBox} from 'mint-ui'

  export default {
    data() {
      return {
        slots: [
          {
            flex: 1,
            values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            className: 'slot1',
            textAlign: 'center'
          }
        ],
        visibleCount: '10',
        buttonDis: true,
        buttonDisClass: 'buttonDisClass',
        selectCoin: true,
        rightValue: '删除',
        color: 'color:#FF273E;font-size:0.32rem;',
        isRightShow: true,
        goBackShow: true,
        title: '添加地址',
        queryData: {id: '', currency_id: '', value: '', name: ''},
        resetShow: false
      }
    },
    components: {
      HeaderNav,
      Picker,
      MessageBox
    },
    created() {
      this.getQueryData()
      this.getCoinList()
    },
    methods: {
      getQueryData() {
        if (this.$route.query) {
          this.queryData.id = this.$route.query.item.id
          this.queryData.currency_id = this.$route.query.item.currency_id
          this.queryData.value = this.$route.query.item.value
          this.queryData.name = this.$route.query.item.name
          this.resetShow = true
        }
      },
      getCoinList() {

      },
      add_currency() {
        let this_ = this
        this.$http.post('/currency/add_currency', {
          token: window.localStorage.getItem("jiazhuoToken"),
          currency_id: this.queryData.currency_id,
          value: this.$route.query.item.value,
          id: this.queryData.id
        }).then((result) => {
          if (result.data.code === 0) {

          }
          this_.currencyList = this_.currencyList.concat(result.data.data);
        })
      },
      reset() {

      },
      deleteAddress() {

      },
      selectListShow() {

      }
    },
    watch: {
      queryData: {
        handler(curVal, oldVal) {
          if (curVal.name === '') {
            this.selectCoin = true
          } else if (curVal.name !== '' && curVal.value !== '') {
            this.buttonDis = false
            this.buttonDisClass = ''
          }
        },
        deep: true
      }
    }
  }
</script>


