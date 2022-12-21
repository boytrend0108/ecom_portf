export default {
  state:{
    recievedOrders:[]
  },
  getters: {
    RECIEVED_ORSERS(state){
      return state.recievedOrders
    }
  },
  actions: {
    SEND_ORDER_TO_FIREBASE(){
      const userCart = this.$store.getters.USER_CART
      console.log(userCart)
    },
    GET_ORDER_FROM_FIREBASE(){}
  },
  mutatiions: {}
}