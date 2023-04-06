import router from './index.js'
import store from '../store/index.js'

router.beforeEach((to, from, next) => {
  if (to.meta.ifLogin) {
    // next('/Login')
    if (store.state.user.userinfo.ifLogin) {
      next()
    } else {
      next('/Login')
    }
  } else {
    next()
  }
})
