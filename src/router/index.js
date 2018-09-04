import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Dio from '@/components/index/dio'
import DioDetail from '@/components/index/dio_detail'
import Energy from '@/components/index/energy'
import Share from '@/components/index/share'
import User from '@/components/index/user'
import Introduce from '@/components/index/introduce'
import IntroduceHelp from '@/components/index/introduce_help'
import IntroduceFuture from '@/components/index/introduce_future'
import Lab from '@/components/lab/lab'
import Center from '@/components/center/center'
import CandyBox from '@/components/center/candyBox'
import Contact from '@/components/center/contact'
import Set from '@/components/center/set'
import FeedBack from '@/components/center/feedback'
import Draw from '@/components/center/draw'
import Draw_address from '@/components/center/draw_address'
import Login from '@/components/acount/login'
import Register from '@/components/acount/register'
import Agreement from '@/components/acount/agreement'
import PasswordBack from '@/components/acount/passwordBack'
import ChangePassword from '@/components/acount/changePassword'
import Turntable from '@/components/game/turntable'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['../components/index/index'], resolve),
      meta: { keepAlive: false }
    },
    {
    	path: '/index/dio',
      name: 'Dio',
      component: Dio,
      meta: { keepAlive: false }
    },
    {
    	path: '/index/dio_detail',
      name: 'DioDetail',
      component: resolve => require(['../components/index/dio_detail'], resolve),
      meta: { keepAlive: false }
    },
    {
    	path: '/index/energy',
      name: 'Energy',
      component: resolve => require(['../components/index/energy'], resolve),
      meta: { keepAlive: false }
    },
    {
    	path: '/index/share',
      name: 'Share',
      component: resolve => require(['../components/index/share'], resolve),
      meta: { keepAlive: false }
    },
    {
    	path: '/index/user',
      name: 'User',
      component: resolve => require(['../components/index/user'], resolve),
      meta: { keepAlive: false }
    },
    {
    	path: '/index/introduce',
      name: 'Introduce',
      component: resolve => require(['../components/index/introduce'], resolve),
      meta: { keepAlive: false }
    },
    {
    	path: '/index/introduce_help',
      name: 'IntroduceHelp',
      component: resolve => require(['../components/index/introduce_help'], resolve),
      meta: { keepAlive: false }
    },
    {
    	path: '/index/introduce_future',
      name: 'IntroduceFuture',
      component: resolve => require(['../components/index/introduce_future'], resolve),
      meta: { keepAlive: false }
    },
    {
    	path: '/lab/lab',
      name: 'Lab',
      component: resolve => require(['../components/lab/lab'], resolve),
      meta: { keepAlive: false }
    },
    {
    	path: '/center/center',
      name: 'Center',
      component: resolve => require(['../components/center/center'], resolve),
      meta: { keepAlive: false }
    },
    {
    	path: '/center/set',
      name: 'Set',
      component: resolve => require(['../components/center/set'], resolve),
      meta: { keepAlive: false }
    },
    {
    	path: '/center/candyBox',
      name: 'CandyBox',
      component: resolve => require(['../components/center/candyBox'], resolve),
      meta: { keepAlive: false }
    },
    {
    	path: '/center/contact',
      name: 'Contact',
      component: resolve => require(['../components/center/contact'], resolve),
      meta: { keepAlive: false }
    },
    {
    	path: '/center/feedback',
      name: 'FeedBack',
      component: resolve => require(['../components/center/feedback'], resolve),
      meta: { keepAlive: false }
    },
    {
      path: '/center/draw',
      name: 'Draw',
      component: resolve => require(['../components/center/draw'], resolve),
      meta: { keepAlive: false }
    },
    {
      path: '/center/draw_address',
      name: 'Draw_address',
      component: resolve => require(['../components/center/draw_address'], resolve),
      meta: { keepAlive: false }
    },
    {
      path: '/acount/register',
      name: 'Register',
      component: resolve => require(['../components/acount/register'], resolve),
      meta: { keepAlive: false }
    },
    {
      path: '/acount/login',
      name: 'Login',
      component: resolve => require(['../components/acount/login'], resolve),
      meta: { keepAlive: false }
    },
    {
      path: '/acount/agreement',
      name: 'Agreement',
      component: resolve => require(['../components/acount/agreement'], resolve),
      meta: { keepAlive: true }
    },
    {
      path: '/acount/passwordBack',
      name: 'PasswordBack',
      component: resolve => require(['../components/acount/passwordBack'], resolve),
      meta: { keepAlive: false }
    },
    {
      path: '/acount/changePassword',
      name: 'ChangePassword',
      component: resolve => require(['../components/acount/changePassword'], resolve),
      meta: { keepAlive: false }
    },
    {
      path: '/game/turntable',
      name: 'Turntable',
      component: resolve => require(['../components/game/turntable'], resolve),
      meta: { keepAlive: false }
    }
  ]
})
