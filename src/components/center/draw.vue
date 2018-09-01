<style scoped>
  .draw-list {
    width: 750px;
    background: rgba(255, 255, 255, 1);
  }

  .draw-list .draw-list-items {
    position: relative;
    width: 90%;
    margin: 0 auto;
    height: 100px;
    border-bottom: rgba(239, 239, 239, 1) solid 1px;
  }

  .draw-list .draw-list-items .drwa-list-01 {
    position: absolute;
    display: block;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    font-size: 28px;
    top: 34px;
    left: 0;
  }

  .draw-list .draw-list-items .drwa-list-02 {
    position: absolute;
    display: block;
    width: 10px;
    height: 20px;
    background-size: 100% 100%;
    top: 43px;
    right: 0;
  }
</style>
<template>
  <div class="content2">
    <headerNav :pageTitle="title" @headRightClick="url" :isRightShow="show" :rightValue="title_"></headerNav>

    <ul class="draw-list">
      <li class="draw-list-items" v-for="item in datas">
        <div style="width: 100%;height: 100%" @click="addAddress( item )">
          <span class="drwa-list-01">{{ item.name }}</span>
          <img class="drwa-list-02" src="../../assets/img/index/right@2x.png" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import HeaderNav from '../base/headerNav'

  export default {
    data() {
      return {
        title: '提币地址',
        currencyList: [],
        show: true,
        title_: 'blabla',
        datas: [
          {
            id: 2,
            currency_id: 2,
            value: "22222",
            name: "ETH"
          },
          {
            id: 1,
            currency_id: 1,
            value: "1111",
            name: "ETC"
          }
        ]
      }
    },
    components: {
      HeaderNav
    },
    created() {
      this.base_url = this.$store.state.base_url;
      this.get_currency()
    },
    methods: {
      get_currency() {
        let this_ = this
        this.$http({
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          url: this.base_url + '/currency/get_currency_address',

          data: this_.$qs.stringify({
            token: window.localStorage.getItem("jiazhuoToken"),
          }),

          responseType: 'json'
        }).then((result) => {
          console.log(result.data.data);
          this_.currencyList = this_.currencyList.concat(result.data.data);
        })
      },
      url() {
        this.$router.push({path: '/center/draw_address', query: {  }})
      },
      addAddress(item) {
        this.$router.push({path: '/center/draw_address',
          query: { item }})
      }
    },
    computed: {}
  }
</script>


