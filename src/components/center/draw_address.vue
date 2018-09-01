<style scoped>

</style>
<template>
  <div class="content2">
    <headerNav :pageTitle="title" :goBackShow="goBackShow"></headerNav>

    <div class="draw-data-wrapper">
      <div class="draw-data-block">
        <span class="draw-data-span">币种</span>
        <div class="draw-coin">{{ }}</div>
      </div>
      <div class="draw-data-block">
        <span class="draw-data-span">地址</span>
        <input type="text" class="draw-address" v-model="queryData.value" @blur="">
        <span class="draw-data-reset" @click="reset" v-if="resetShow">
          <img src="" alt="">
        </span>
      </div>
    </div>

    <button class="draw-button">保存</button>
  </div>
</template>

<script>
  import HeaderNav from '../base/headerNav'
  import {Picker} from 'mint-ui'
  import {MessageBox} from 'mint-ui'

  export default {
    data() {
      return {
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
      this.base_url = this.$store.state.base_url;

      this.getQueryData()
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
      add_currency() {
        let this_ = this
        this.$http.post({
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          url: this.base_url + '/currency/add_currency',

          data: this_.$qs.stringify({
            token: window.localStorage.getItem("jiazhuoToken"),
            currency_id: this.queryData.currency_id,
            value: this.$route.query.item.value,
            id: this.queryData.id
          }),

          responseType: 'json'
        }).then((result) => {
          if (result.data.code === 0) {

          }
          this_.currencyList = this_.currencyList.concat(result.data.data);
        })
      },
      reset() {

      }
    }
  }
</script>


