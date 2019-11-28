<template>
  <div id="app">
      <van-loading v-show="LOADING"/>
    <router-view/>
  </div>
</template>

<style lang="less" scoped>
#app {
  .router-move-enter {
    transform: translate3d(-100%, 0, 0);
  }
  .router-move-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  .router-move-enter-active,
  .router-move-leave-active {
    transition: transform 0.3s;
  }
  position: relative;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: #fff;
    .van-loading--circular {
            top: 0;
            position: fixed;
            width: 100%;
            height: 100%;
            z-index: 4000;
            background: #fff;
            opacity: 0.7;
    }
    .van-loading__spinner--circular {
            z-index: -1;
            width: 15%;
            height: 15%;
            position: relative;
            display: inline-block;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-animation: van-rotate .8s linear infinite;
            animation: van-rotate .8s linear infinite;
            position: fixed;
            top: 40%;
            left: 41%;
    }
}
</style>





<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
  computed:{
        ...mapState([
            'LOADING'
        ])
    },
    

}
</script>


