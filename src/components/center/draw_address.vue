<style scoped>
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

  .draw-data-wrapper .draw-data-block #drwa-data-placeholder_1 {
    position: absolute;
    display: block;
    width: 60%;
    text-align: center;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    font-size: 24px;
    top: 34px;
    left: 20%;
    z-index: 999;
    background-color: white;
  }

  .draw-data-wrapper .draw-data-block #drwa-data-placeholder_2 {
    position: absolute;
    display: block;
    width: 60%;
    text-align: center;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    font-size: 24px;
    top: 34px;
    left: 20%;
    z-index: 999;
    background-color: white;
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
    background: url("../../assets/img/center/delete.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .draw-data-wrapper .draw-data-block #draw-data-reset {
    display: block;
    top: 30px;
    right: 0;
    width: 37px;
    height: 37px;
    position: absolute;
    background: url("../../assets/img/center/delete.png");
    background-size: 100% 100%;
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
        <span id="drwa-data-placeholder_1" v-show="placeholderSpan_1">请选择币种</span>
        <div class="draw-coin">{{ queryData.name }}</div>
        <div class="draw-coin selectCoin" v-if="selectCoin">请选择币种</div>
      </div>
      <div class="draw-data-block" @click="placeholderHide">
        <span class="draw-data-span">地址</span>
        <input type="text" class="draw-address" v-model="queryData.value" ref="drawAddressPlace">
        <span id="drwa-data-placeholder_2" v-show="placeholderSpan_2">请输入或黏贴地址</span>
        <span id='draw-data-reset' class="draw-data-reset" @click="reset" v-if="resetShow">
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
    <div id="toastlxl" class="toastlxl"></div>
  </div>
</template>

<script>
  import HeaderNav from '../base/headerNav'
  import ColorBtn from '../base/colorBtn'
  import {MessageBox, Popup, Picker} from 'mint-ui'
  import {Toastlxl} from "../../../static/js/toastlxl.js"

  var showModal = '';
  export default {
    data() {
      return {
        popupShow: '',
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
        ],
        placeholderSpan_1: false,
        placeholderSpan_2: false
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
    mounted() {
      showModal = new Toastlxl('toastlxl');
    },
    methods: {
      placeholderHide() {
        this.placeholderSpan_2 = false
        this.$refs.drawAddressPlace.focus()
      },
      getQueryData() {
        let this_ = this
        if (this.$route.query.coinList[0] === "[object Object]") {
          this.$http.post('/currency/get_currency').then((result) => {
            if (result.data.code === 0) {
              this_.slots[0].values = this_.slots[0].values.concat(result.data.data);
            }
          })
        } else {
          this.slots[0].values = this.slots[0].values.concat(this.$route.query.coinList);
        }

        if (this.$route.query.item !== "[object Object]" && this.$route.query.item) {
          this.popupShow = false
          this.queryData.id = this.$route.query.item.id
          this.queryData.currency_id = this.$route.query.item.currency_id
          this.queryData.value = this.$route.query.item.value
          this.queryData.name = this.$route.query.item.name
          this.slots[0].defaultIndex = this.$route.query.item.index
          this.resetShow = true
          this.isRightShow = true
        } else if (this.$route.query.add === true) {
          this.resetShow = false
          this.isRightShow = false
          this.buttonDis = false
          this.popupShow = true
          this.placeholderSpan_1 = true
        } else {
          this.resetShow = false
          this.isRightShow = false
          this.buttonDis = false
          this.popupShow = true
          this.$router.back(-1)
        }
      },
      onValuesChange(picker, values) {
        if (this.popupShow === false) {
          return false
        } else {
          this.queryData.name = values[0].name;
          this.queryData.currency_id = values[0].id;
        }
      },
      add_currency() {
        let this_ = this
        if (this_.buttonDis === false) {
          if(this.placeholderSpan_1){
            console.log(1)
            showModal.show(`<p>请选择币种</p>`)
          }else if(this.placeholderSpan_2){
            console.log(2)
            showModal.show(`<p>请输入正确的地址</p>`)
          }
        }else {
          this.$http.post('/currency/add_currency', {
            currency_id: this.queryData.currency_id,
            value: this.queryData.value,
            id: this.queryData.id
          }).then((result) => {
            if (result.data.code === 0) {
              showModal.show(`<div class='toastlxl_icon'></div><p>添加成功</p>`);
              setTimeout(() => {
                this.$router.back(-1)
              }, 1500);
            } else {
              console.log(result.data.info)
            }
          })
        }
      },
      deleteAddress() {
        let this_ = this
        MessageBox.confirm('确认删除该地址', '').then(action => {
          this.$http.post('/currency/del_currency', {
            id: this.queryData.id
          }).then((result) => {
            if (result.data.code === 0) {
              showModal.show(`<div class='toastlxl_icon'></div><p>删除成功</p>`);
              setTimeout(() => {
                this.$router.back(-1)
              }, 1500);
            } else {
              console.log(result.data.info)
            }
          })
        }).catch(err => {
        });
      },
      reset() {
        this.queryData.value = ''
      },
      selectListShow() {
        if (this.popupShow === false) {
          return false
        } else {
          this.popupVisible = true
        }
        this.placeholderSpan_1 = false
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
          }

          if (curVal.value !== '') {
            this.placeholderSpan_2 = false
          } else {
            this.placeholderSpan_2 = true
          }

          if ((curVal.name !== '' && curVal.value !== '') && !(/.*[\u4e00-\u9fa5]+.*$/.test(curVal.value)) && (!this.placeholderSpan_1 && !this.placeholderSpan_2)) {
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


