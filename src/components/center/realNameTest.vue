<style>
  input::-webkit-input-placeholder {
    font-size: 24px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: #999999;
    line-height: 96px;
  }

  input::-moz-placeholder { /* Mozilla Firefox 19+ */
    font-size: 24px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: #999999;
    line-height: 96px;
  }

  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    font-size: 24px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: #999999;
    line-height: 96px;
  }

  input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    font-size: 24px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: #999999;
    line-height: 96px;
  }

  input:disabled {
    border: none;
    background-color: rgba(255, 255, 255, 0) !important;
  }

  .realname-data-wrapper {
    width: 100%;
    background: rgba(255, 255, 255, 1);
    margin-bottom: 80px;
  }

  .realname-data-wrapper .realname-data-block {
    position: relative;
    width: 90%;
    margin: 0 auto;
    height: 100px;
    border-bottom: rgba(239, 239, 239, 1) solid 1px;
  }

  .realname-data-wrapper .realname-data-block .realname-data-span {
    position: absolute;
    display: block;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    font-family: PingFang-SC-Medium;
    font-size: 28px;
    top: 34px;
    left: 0;
  }

  .realname-input {
    text-align: center;
    font-size: 28px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 96px;
    width: 70%;
  }

  .confirm {
    width: 100%;
    position: relative;
    height: 100px;
  }

  .confirmFir {
    text-align: left;
    display: block;
    width: 20%;
    position: absolute;
    top: 30px;
    left: 5%;
    font-size: 30px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 32px;
  }

  .confirmSec {
    display: block;
    position: absolute;
    top: 30px;
    width: 70%;
    right: 0;
    text-align: center;
    font-size: 30px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 32px;
  }

  .realname-seeNumber {
    display: block;
    position: absolute;
    top: 30px;
    right: 40px;
    width: 40px;
    height: 40px;
    background: url("../../assets/img/acount/reg_reg_show@2x.png");
    background-size: 100% 100%;
  }

  .realname-seeNumber-active {
    display: block;
    position: absolute;
    top: 30px;
    right: 40px;
    width: 40px;
    height: 40px;
    background: url("../../assets/img/acount/reg_reg_hide@2x.png");
    background-size: 100% 100%;
  }

  .contact {
    width: 38%;
    margin-top: 60px;
    margin-left: 31%;
    font-size: 24px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    line-height: 36px;
  }
</style>

<template>
  <div class="content2">
    <headerNav :pageTitle="title" :goBackShow="goBackShow"></headerNav>

    <div class="realname-data-wrapper">
      <div class="realname-data-block">
        <span class="realname-data-span">姓名</span>
        <input type="text" class="realname-input" v-model="realData.realname" placeholder="请输入姓名"
               :disabled="realnameDis">

      </div>
      <div class="realname-data-block">
        <span class="realname-data-span">身份证</span>
        <input type="number" class="realname-input" v-model="realData.identity_card" placeholder="在此输入身份证号码"
               :disabled="identity_cardDis" v-show="seeShowNum">
        <input type="text" class="realname-input" :value=" retrunValue "
               disabled v-show="seeHideNum">
        <span class="realname-seeNumber" :class="toggleSeeNumber" @click="seeNumber" v-show="seeShow">
        </span>
      </div>
    </div>

    <div class="contact" v-if="contact">
      <p>如需更改请联系客服</p>
      <p>客服电话：15306544612</p>
    </div>

    <div class="realname-button" v-if="seeButton">
      <colorBtn :cBtnActive="buttonDis" @cBtnTuch="cofirmshow" :cBtnValue="cBtnValue"></colorBtn>
    </div>
  </div>
</template>

<script>
  import HeaderNav from '../base/headerNav'
  import ColorBtn from '../base/colorBtn'
  import {MessageBox} from 'mint-ui'
  import {Toast} from 'mint-ui'

  export default {
    data() {
      return {
        realData: {
          realname: '',
          identity_card: ''
        },
        identity_cardDis: false,
        realnameDis: false,
        seeButton: true,
        buttonDis: false,
        cBtnValue: '保存',
        seeShow: false,
        goBackShow: true,
        title: '实名认证',
        toggleSeeNumber: 'realname-seeNumber-active',
        seeShowNum: true,
        seeHideNum: false,
        contact: true,
        wrongTip: '信息不能为空',
        wrongTipContrl: true
      }
    },
    components: {
      HeaderNav,
      ColorBtn,
      MessageBox,
      Toast
    },
    created() {
      this.get_realauth()
    },
    computed: {
      retrunValue() {
        let xing = '';
        for (var i = 0; i < 16; i++) {
          xing += '*';
        }
        return this.realData.identity_card.substring(0, 1) + xing + this.realData.identity_card.substring(this.realData.identity_card.length, 17)
      }
    },
    methods: {
      get_realauth() {
        let this_ = this
        this.$http.post('/user/get_realauth').then((result) => {
          if (result.data.code === 0) {
            this.realData.realname = result.data.data.realname
            this.realData.identity_card = result.data.data.identity_card
            this.identity_cardDis = true
            this.realnameDis = true
            this.buttonDis = true
            this.seeShow = true
            this.seeButton = false
            this.seeShowNum = false
            this.seeHideNum = true
            this.contact = true
          } else {
            this.seeShowNum = true
            this.seeHideNum = false
            this.contact = false
          }
        })
      },
      cofirmshow() {
        let this_ = this
        if (this.wrongTipContrl === true) {
          Toast({
            message: this_.wrongTip,
            position: 'center',
            duration: 1500,
            className: "toastName"
          })
        } else if (this.wrongTipContrl === false) {
          MessageBox.confirm('', {
            message: `<div class="confirm">
                     <span class="confirmFir">姓名</span> <span class="confirmSec">${this.realData.realname}</span>
                  </div>
                  <div class="confirm">
                     <span class="confirmFir">身份证</span> <span class="confirmSec">${this.realData.identity_card}</span>
                  </div>`,
            title: ''
          }).then(action => {
            if (action === 'confirm') {
              this.save_realauth()
            }
          }).catch(err => {
            if (err === 'cancel') {

            }
          })
        }
      },
      save_realauth() {
        let this_ = this
        this.$http.post('/user/realauth', {
          realname: this.realData.realname,
          identity_card: this.realData.identity_card
        }).then((result) => {
          if (result.data.code === 0) {
            Toast({
              message: '保存成功！',
              position: 'center',
              duration: 1500,
              className: "toastName"
            })
            this.buttonDis = true
            this.seeButton = false
            this.contact = true
            this.seeShow = true
            this.seeShowNum = false
            this.seeHideNum = true
          } else {
            console.log(result.data.info)
            this.contact = true
          }
        })
      },
      seeNumber() {
        if (this.toggleSeeNumber === '') {
          this.seeShowNum = false
          this.seeHideNum = true
          this.toggleSeeNumber = 'realname-seeNumber-active'
        } else {
          this.seeShowNum = true
          this.seeHideNum = false
          this.toggleSeeNumber = ''
        }
      }
    },
    watch: {
      realData: {
        handler(curVal, oldVal) {
          if (curVal.realname.length === 0) {
            this.buttonDis = false
            this.wrongTip = '姓名不能为空'
            this.wrongTipContrl = true
          } else if (curVal.realname.length > 10) {
            this.buttonDis = false
            this.wrongTip = '姓名长度过长'
            this.wrongTipContrl = true
          } else if (curVal.identity_card.length !== 18 || /(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(curVal.identity_card) === false) {
            this.buttonDis = false
            this.wrongTip = '非18位身份证号'
            this.wrongTipContrl = true
          } else {
            this.buttonDis = true
            this.wrongTipContrl = false
          }
        },
        deep: true,
        immediately: true
      }
    }
  }
</script>

