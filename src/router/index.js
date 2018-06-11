import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import MainPage from '../components/MainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },{
      path: '/MainPage',
      // meta: {
      //   //添加该字段表明进入该路由是需要登录的
      //   requireAuth: true,
      // },
      component: MainPage,
    }
  ]
})


