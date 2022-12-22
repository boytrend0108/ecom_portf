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
    async SEND_ORDER_TO_FIREBASE(store, phone,email) {
      try {
        const userCart = store.getters.USER_CART
        const userData = store.getters.INFO
        const orderId = Date.now();
        const orderData = {
          id: orderId,
          userName: userData.username,
          userEmail: email,
          userPhone: phone,
          userOrder: userCart
        }
        await set(ref(db, `recievedOrders/${orderId}`), orderData)
      } catch (e) {
        console.log(e)
      }

    },
   async GET_ORDER_FROM_FIREBASE({commit}) {
      try{
        onValue(ref(db,'recievedOrders/'), (snapshot)=>{
          const recievedOrders = snapshot.val()
          commit('SET_RESIEVED_ORDERS',recievedOrders)
        })
      }catch(e){
        console.log(e)
      }

    }
  },
  mutations: {
    SET_RESIEVED_ORDERS(state, recievedOrders){
      state.recievedOrders = recievedOrders
    }
  }
}