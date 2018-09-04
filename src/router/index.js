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
import Set_question from '@/components/center/set_question'
import Set_future from '@/components/center/set_future'
import Draw from '@/components/center/draw'
import Draw_address from '@/components/center/draw_address'
import Login from '@/components/acount/login'
import Register from '@/components/acount/register'
import Agreement from '@/components/acount/agreement'
import PasswordBack from '@/components/acount/passwordBack'
import ChangePassword from '@/components/acount/changePassword'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
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
      component: DioDetail,
      meta: { keepAlive: false }
    },
    {
    	path: '/index/energy',
      name: 'Energy',
      component:Energy,
      meta: { keepAlive: false }
    },
    {
    	path: '/index/share',
      name: 'Share',
      component: Share,
      meta: { keepAlive: false }
    },
    {
    	path: '/index/user',
      name: 'User',
      component: User,
      meta: { keepAlive: false }
    },
    {
    	path: '/index/introduce',
      name: 'Introduce',
      component: Introduce,
      meta: { keepAlive: false }
    },
    {
    	path: '/index/introduce_help',
      name: 'IntroduceHelp',
      component: IntroduceHelp,
      meta: { keepAlive: false }
    },
    {
    	path: '/index/introduce_future',
      name: 'IntroduceFuture',
      component: IntroduceFuture,
      meta: { keepAlive: false }
    },
    {
    	path: '/lab/lab',
      name: 'Lab',
      component: Lab,
      meta: { keepAlive: false }
    },
    {
    	path: '/center/center',
      name: 'Center',
      component: Center,
      meta: { keepAlive: false }
    },
    {
    	path: '/center/set',
      name: 'Set',
      component: Set,
      meta: { keepAlive: false }
    },
    {
    	path: '/center/candyBox',
      name: 'CandyBox',
      component: CandyBox,
      meta: { keepAlive: false }
    },
    {
    	path: '/center/contact',
      name: 'Contact',
      component: Contact,
      meta: { keepAlive: false }
    },
    {
    	path: '/center/feedBack',
      name: 'FeedBack',
      component: FeedBack,
      meta: { keepAlive: false }
    },
    {
      path: '/center/draw',
      name: 'Draw',
      component: Draw,
      meta: { keepAlive: false }
    },
    {
      path: '/center/draw_address',
      name: 'Draw_address',
      component: Draw_address,
      meta: { keepAlive: false }
    },
    {
      path: '/center/set_future',
      name: 'Set_future',
      component: Set_future,
      meta: { keepAlive: false }
    },
    {
      path: '/center/set_question',
      name: 'Set_question',
      component: Set_question,
      meta: { keepAlive: false }
    },
    {
      path: '/acount/register',
      name: 'Register',
      component: Register,
      meta: { keepAlive: false }
    },
    {
      path: '/acount/login',
      name: 'Login',
      component: Login,
      meta: { keepAlive: false }
    },
    {
      path: '/acount/agreement',
      name: 'Agreement',
      component: Agreement,
      meta: { keepAlive: true }
    },
    {
      path: '/acount/passwordBack',
      name: 'PasswordBack',
      component: PasswordBack,
      meta: { keepAlive: false }
    },
    {
      path: '/acount/changePassword',
      name: 'ChangePassword',
      component: ChangePassword,
      meta: { keepAlive: false }
    }
  ]
})
