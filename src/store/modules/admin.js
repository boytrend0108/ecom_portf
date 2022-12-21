import { getDatabase, ref, set, onValue } from "firebase/database";
const db = getDatabase();
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
    async SEND_ORDER_TO_FIREBASE(store){
      const userCart = store.getters.USER_CART
      const userData = store.getters.INFO
      const orderId = Date.now();
      const orderData = {
        Id: orderId,
        userName : userData.username,
        userEmail: userData.email,
        userOrder: userCart
      }
      set(ref(db, `recievedOrders/${orderId}`), orderData)
    },
    GET_ORDER_FROM_FIREBASE(){}
  },
  mutatiions: {}
}