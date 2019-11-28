import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { install as Axios } from './api'
import API from './api/url'
import Utils from './utils/utils'
import Tools from './utils/tools'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.use(Axios)
Vue.prototype.API = API
Vue.prototype.Tools = Tools
Vue.config.productionTip = false

Vue.directive('scroll', {
    inserted(el,binding,context){
      let ele =  document.getElementsByClassName('scrollParentEle')[0]
      console.log("scr")
     ele.addEventListener('scroll',()=> {
     console.log(2)
        if(ele.scrollHeight - ele.clientHeight <= ele.scrollTop) {
          console.log('到底了')
          binding.value()
        }
      })
    }
  })

new Vue({
  router,
  store,
  render: h => h(App),
  created: function () {
    Utils.initRem()
  }
}).$mount('#app')
