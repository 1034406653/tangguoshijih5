import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Dio from '@/components/index/dio'
import EnergyRecode from '@/components/index/energy_recode'
import Energy from '@/components/index/energy'
import Share from '@/components/index/share'
import Lab from '@/components/lab/lab'
import GameList from '@/components/lab/gameList'
import Center from '@/components/center/center'
import CandyBox from '@/components/center/candyBox'
import Contact from '@/components/center/contact'
import Set from '@/components/center/set'
import FeedBack from '@/components/center/feedback'
import Set_question from '@/components/center/set_question'
import Set_future from '@/components/center/set_future'
import Draw from '@/components/center/draw'
import Draw_address from '@/components/center/draw_address'
import RealNameTest from '@/components/center/realNameTest'
import Login from '@/components/acount/login'
import Register from '@/components/acount/register'
import Agreement from '@/components/acount/agreement'
import PasswordBack from '@/components/acount/passwordBack'
import ChangePassword from '@/components/acount/changePassword'

import Guide from '@/components/index/guide'
import Wxshare from '@/components/share/wxshare'
Vue.use(Router)

export default new Router({
  routes: [
    { //重定向
      path: "*",
      redirect: "/"
    },
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['../components/index/index'], resolve),
      meta: { keepAlive: true }
    },
    {
    	path: '/index/dio',
      name: 'Dio',
      component: resolve => require(['../components/index/dio'], resolve),
      meta: { keepAlive: false }
    },
    {
    	path: '/index/energy_recode',
      name: 'EnergyRecode',
      component: resolve => require(['../components/index/energy_recode'], resolve),
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
      meta: { keepAlive: true }
    },
    {
    	path: '/lab/lab',
      name: 'Lab',
      component: resolve => require(['../components/lab/lab'], resolve),
      meta: { keepAlive: true }
    },
    {
      path: '/lab/gameList',
      name: 'GameList',
      component: resolve => require(['../components/lab/gameList'], resolve),
      meta: { keepAlive: false }
    },
    {
    	path: '/center/center',
      name: 'Center',
      component: resolve => require(['../components/center/center'], resolve),
      meta: { keepAlive: true }
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
      meta: { keepAlive: true }
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
      path: '/center/set_future',
      name: 'Set_future',
      component: resolve => require(['../components/center/set_future'], resolve),
      meta: { keepAlive: false }
    },
    {
      path: '/center/realNameTest',
      name: 'RealNameTest',
      component: resolve => require(['../components/center/realNameTest'], resolve),
      meta: { keepAlive: false }
    },
    {
      path: '/center/set_question',
      name: 'Set_question',
      component: resolve => require(['../components/center/set_question'], resolve),
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
      path: '/index/guide',
      name: 'Guide',
      component: resolve => require(['../components/index/guide'], resolve),
      meta: { keepAlive: false }
    },
    {
      path: '/share/wxshare',
      name: 'Wxshare',
      component: resolve => require(['../components/share/wxshare'], resolve),
      meta: { keepAlive: true }
    }
  ]
})
