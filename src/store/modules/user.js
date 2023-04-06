const user = localStorage.getItem('user')
let userinfo = {
  username: '',
  ifLogon: false,
  token: ''
}
if (user) {
  userinfo = JSON.parse(user)
}

export default {
  namespaced: true,
  state: {
    userinfo
  },
  mutations: {
    setUser (state, payload) {
      state.userinfo = payload
    },
    deleteUser (state) {
      state.userinfo = {
        username: '',
        ifLogon: false,
        token: ''
      }
    }
  }
}
