import { createStore } from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'

const store = createStore({
  state() {
    return state
  },
  mutations,
  actions
})

export default store
