export default {
  state:{
    product: {}
  },
  getters: {
    PRODUCT(state){
      return state.product
    }
  },
  actions: {},
  mutations: {
    SET_PRODUCT(state, product){
       state.product = product
    }
  }
}