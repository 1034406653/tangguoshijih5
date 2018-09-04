<style scoped>
  .draw-list {
    width: 100%;
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
    <headerNav :pageTitle="title" @headRightClick="url(coinList)" :isRightShow="show" :rightValue="title_"
               :rightColor="rightColor"></headerNav>

    <ul class="draw-list">
      <li class="draw-list-items" v-for="item in currencyList">
        <div style="width: 100%;height: 100%" @click="addAddress( item, coinList )">
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
        rightColor: 'color:#666666; font-size:0.32rem;',
        title: '提币地址',
        currencyList: [],
        show: true,
        title_: '添加地址',
        datas: [
          {
            id: 2,
            currency_id: 2,
            value: "22222",
            name: "ETH",
            index: 1
          },
          {
            id: 1,
            currency_id: 1,
            value: "1111",
            name: "ETC",
            index: 0
          }
        ],
        coinList: []
      }
    },
    components: {
      HeaderNav
    },
    created() {
      this.base_url = this.$store.state.base_url;
      this.getCoinList()
      this.get_currency()
    },
    methods: {
      getCoinList() {
        let this_ = this
        this.$http.post('/currency/get_currency', {
          token: window.localStorage.getItem("jiazhuoToken"),
        }).then((result) => {
          console.log(result.data.data)
          if (result.data.code === 0) {
            this_.coinList = this_.coinList.concat(result.data.data);
          }
        })
      },
      get_currency() {
        let this_ = this
        this.$http.post('/currency/get_currency_address'
        ).then((result) => {
          console.log(result);
          this_.currencyList = this_.currencyList.concat(result.data.data);
          for (let i = 0; i < result.data.data.length; i++) {
            for (let j = 0; j < this_.coinList.length; j++) {
              if (this_.coinList[j].name === result.data.data[i].name){
                this_.currencyList[i].index = j;
              }
            }
          }
        })
      },
      url(coinList) {
        this.$router.push({path: '/center/draw_address', query: {coinList}})
      },
      addAddress(item, coinList) {
        this.$router.push({
          path: '/center/draw_address',
          query: {item, coinList}
        })
      }
    },
    computed: {}
  }
</script>


