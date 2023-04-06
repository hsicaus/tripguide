import base from './base.js'
import axios from '../utils/request.js'

// console.log(base)

const api = {
  getHotCities () {
    return axios.get(base.hotcity)
  },
  getSearch (params) {
    return axios.get(base.search, { params })
  }
}

export default api
