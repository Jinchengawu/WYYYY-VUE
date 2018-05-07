import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home.vue'
import sousuo from '../pages/sousuo.vue'
import resou from '../pages/resou.vue'
import xiangqing from '../components/xiangqing.vue'
import shipin from '../components/shipin/shipin.vue'
import mymusic from '../components/mymusic/mymusic.vue'
import MvList from '../components/home/MVList.vue'
import mcdetails from '../components/home/mcdetails.vue'
import playMusic from '../components/home/playMusic.vue'


Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
  {
      path: '/',
      redirect: '/home'
    },
  {
  	path:'/home',
  	component:home,
    /*children:{
      path:'/Mv',
      component:'MvList'

    }*/
  },
  {
  	path:'/resou',
  	component:resou
  },
  {
  	path:'/sousuo',
  	component:sousuo
  },  
  {
    path:'/xiangqing/:id',
    component:xiangqing
  },
  {
    path:'/mymusic',
    component:mymusic
  },
  {
    path:'/shipin',
    component:shipin
  },
  {
    path:'/mcdetails/:id',
    component:mcdetails
  },
  {
    path:'/playMusic/:id',
    component:playMusic
  }
  
  ]
})
