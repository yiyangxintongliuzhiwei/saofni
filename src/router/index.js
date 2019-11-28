import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/Login.vue'
import Index from '../views/index/Index.vue'
import Scroll from '../views/scroll/Scroll.vue'
import Echart from '../views/echart/Echart.vue'

//趋势图
const TrendHome = () => import('@/components/page/Trend/Trend.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
        path: '/scroll',
        component: Scroll
      },
      {
        path: '/echart',
        component: Echart
      },
    {
      path: '/',
      component: TrendHome
    }
    
  ]
})
