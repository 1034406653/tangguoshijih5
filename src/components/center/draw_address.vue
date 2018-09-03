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
    margin-bottom: 80px;
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

  .piker-wrapper {
    background-color: white;
    width: 100%;
  }

  .piker-title {
    width: 100%;
    height: 96px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid rgba(239, 239, 239, 1);
  }

  .piker-title span {
    font-family: PingFang-SC-Medium;
    display: block;
    height: 23px;
    line-height: 23px;
    margin-top: 40px;
    width: 14.3%;
    text-align: center;
    font-size: 24px;
  }

  .piker-title .piker-cancel {
    color: #FF273E;
  }

  .piker-title .piker-yes {
    color: #999999;
  }

  .piker-title .piker-title {
    font-size: 30px;
    margin-top: 34px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 32px;
  }

  .popup-wrapper {
    width: 100%;
  }
</style>


<template>
  <div class="content2">
    <headerNav :pageTitle="title" :goBackShow="goBackShow" @headRightClick="deleteAddress"
               :isRightShow="isRightShow" :rightColor="color" :rightValue="rightValue"></headerNav>

    <div class="draw-data-wrapper">
      <div class="draw-data-block" @click="selectListShow">
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

    <colorBtn :cBtnActive="buttonDis" @cBtnTuch="add_currency" :cBtnValue="cBtnValue"></colorBtn>

    <mt-popup class="popup-wrapper"
              v-model="popupVisible" position="bottom">
      <div class="piker-wrapper">
        <div class="piker-title">
          <span class="piker-cancel" @click="pikerCancel">取消</span>
          <span class="piker-title">币种</span>
          <span class="piker-yes" @click="pikerYes">确定</span>
        </div>
        <mt-picker :slots="slots" @change="onValuesChange" :visibleItemCount="visibleCount"
                   :itemHeight="itemHeight" class="slot1" :valueKey="valueKey"></mt-picker>
      </div>
    </mt-popup>

  </div>
</template>

<script>
  import HeaderNav from '../base/headerNav'
  import ColorBtn from '../base/colorBtn'
  import {Picker} from 'mint-ui'
  import {MessageBox} from 'mint-ui'
  import {Popup} from 'mint-ui';

  export default {
    data() {
      return {
        cBtnValue: '保存',
        popupVisible: false,
        bottom: 'bottom',
        visibleCount: 9,
        itemHeight: 76,
        buttonDis: false,
        buttonDisClass: 'buttonDisClass',
        rightValue: '删除',
        color: 'color:#FF273E;font-size:0.32rem;',
        isRightShow: false,
        goBackShow: true,
        title: '添加地址',
        queryData: {id: '', currency_id: '', value: '', name: ''},
        resetShow: false,
        valueKey: 'name',
        slots: [
          {
            flex: 1,
            values: [],
            className: 'slot1',
            textAlign: 'center',
            defaultIndex: 0,
          }
        ]
      }
    },
    computed: {
      selectCoin() {
        if (this.queryData.name !== '' && this.queryData.name !== null && this.queryData.name !== undefined) {
          return false
        } else {
          return true
        }
      }
    },
    components: {
      HeaderNav,
      Picker,
      MessageBox,
      Popup,
      ColorBtn
    },
    created() {
      this.getQueryData()
    },
    methods: {
      getQueryData() {
        this.slots[0].values = this.slots[0].values.concat(this.$route.query.coinList);
        console.log(this.slots[0].values)
        if (this.$route.query.item) {
          this.queryData.id = this.$route.query.item.id
          this.queryData.currency_id = this.$route.query.item.currency_id
          this.queryData.value = this.$route.query.item.value
          this.queryData.name = this.$route.query.item.name
          this.slots[0].defaultIndex = this.$route.query.item.index
          this.resetShow = true
          this.isRightShow = true
        }
      },
      onValuesChange(picker, values) {
        console.log(1)
        console.log(values[0]);
        this.queryData.name = values[0].name;
        this.queryData.currency_id = values[0].id;
        console.log(this.queryData)
      },
      add_currency() {
        let this_ = this
        this.$http.post('/currency/add_currency', {
          token: window.localStorage.getItem("jiazhuoToken"),
          currency_id: this.queryData.currency_id,
          value: this.queryData.item.value,
          id: this.queryData.id
        }).then((result) => {
          if (result.data.code === 0) {
            MessageBox.confirm(result.data.info, '操作成功').then(action => {
              this.$router.back(-1);
            })
          } else {
            MessageBox.alert(result.data.info, '操作成功')
          }
        })
      },
      deleteAddress() {
        let this_ = this
        this.$http.post('/currency/del_currency', {
          token: window.localStorage.getItem("jiazhuoToken"),
          id: this.queryData.id
        }).then((result) => {
          if (result.data.code === 0) {
            MessageBox.confirm(result.data.info, '操作成功').then(action => {
              this.$router.back(-1);
            })
          } else {
            MessageBox.alert(result.data.info, '操作成功')
          }
        })
      },
      reset() {
        this.queryData.value = ''
      },
      selectListShow() {
        this.popupVisible = true
      },
      pikerCancel() {
        this.popupVisible = false
      },
      pikerYes() {
        this.popupVisible = false
      }
    },
    watch: {
      queryData: {
        handler(curVal, oldVal) {
          if (curVal.name === '') {
            this.selectCoin = true
          } else if (curVal.name !== '' && curVal.value !== '') {
            this.buttonDis = true
            this.buttonDisClass = ''
          } else {
            this.buttonDis = false
            this.buttonDisClass = 'buttonDisClass'
          }
          if (curVal.value !== '') {
            this.resetShow = true
          } else {
            this.resetShow = false
          }
        },
        deep: true,
        immediately: true
      }
    }
  }
</script>


