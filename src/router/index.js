import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage.vue'
import explore from '../components/explore.vue'
import destination from '../views/destination.vue'
import mall from '../views/mall.vue'
import myPage from '../views/myPage.vue'
import Login from '../views/Login.vue'
import destinationDetail from '../destination/detail.vue'
import mallDetail from '../mall/detail.vue'
import tripItem from '../myPage/tripItem.vue'
import goodsItem from '../myPage/goodsItem.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: homePage,
    children: [
      {
        path: '',
        name: 'explore',
        component: explore
      },
      {
        path: 'destination',
        name: 'destination',
        component: destination
      },
      {
        path: 'destination/detail',
        name: 'destinationDetail',
        component: destinationDetail
      },
      {
        path: 'mall',
        name: 'mall',
        component: mall
      },
      {
        path: 'mall/detail',
        name: 'mallDetail',
        component: mallDetail
      },
      {
        path: 'myPage',
        redirect: 'myPage/tripItem',
        name: 'myPage',
        meta: {
          ifLogin: true
        },
        component: myPage,
        children: [
          {
            path: 'tripItem',
            name: 'tripItem',
            component: tripItem,
            meta: {
              ifLogin: true
            }
          },
          {
            path: 'goodsItem',
            name: 'goodsItem',
            component: goodsItem,
            meta: {
              ifLogin: true
            }
          }
        ]
      }
    ]
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
