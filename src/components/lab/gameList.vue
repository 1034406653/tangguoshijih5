<style scoped>
  body{
    background: rgba(255, 255, 255, 1);
  }

  .gameList li {
    float: left;
    width: 160px;
    height: 160px;
    border-radius: 20px 20px 20px 30px;
    margin: 20px 42px;
  }

  .gameList li img {
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 20px 30px;
    display: block;
  }

  .gameBox {
    width: 100%;
    height: auto;
    padding-bottom: 30px;
  }
</style>

<template>
  <div class="content2">
    <headerNav :pageTitle="title" :goBackShow="goBack"></headerNav>

    <div class="gameBox">
      <ul class="gameList">
        <li v-for="item in gameList" @click="goGame(item.game_url,item.id)">
          <img :src="item.game_icon"/>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import HeaderNav from '../base/headerNav'
  import Vue from 'vue'

  export default {
    data() {
      return {
        goBack: true,
        gameList: [],
        title: '游戏'
      }
    },
    components: {
      HeaderNav
    },
    created (){
      this.init()
    },
    methods: {
      init() {
        let that = this;
        this.$http.post('/power/get_power').then(res => {
          if(res.data.code === 0) {
            that.gameList = that.gameList.concat(res.data.data.game)
          }
        })
      },
      goGame(game_url, game_id) {
        window.open(`${game_url}?token=${localStorage.jiazhuoToken}&nickname=${encodeURI(encodeURI(localStorage.nickname))}&head_pic=${localStorage.head_pic === 'null' ? '' : localStorage.head_pic}&game_id=${game_id}`);
      },
    }
  }
</script>

