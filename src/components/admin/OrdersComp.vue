<template>
  <div class="orders swing-in-top-fwd ">
    <div class="client-info">
      <h3 class="client-data">Name:<span class="client-data_span">{{userName}}</span></h3>
      <h3 class="client-data">Email:<span class="client-data_span">{{email}}</span></h3>
      <h3 class="client-data">Phone:<span class="client-data_span">{{userPhone}}</span></h3>
      <h3 class="client-data">Total Price:<span class="client-data_span">{{getTotalPrice}}</span> $</h3>
      <font-awesome-icon 
      icon="fa-solid fa-list" 
      @click="showOrders = !showOrders"
      />
    </div>
    <div class="status">
      <my-button 
        class="status-btn" 
        >Звонок клиенту</my-button>
      <my-button 
        class="status-btn"
        >Заказ оплачен</my-button>
      <my-button 
        class="status-btn"
        >Заказ сформирован</my-button>
      <my-button 
        class="status-btn"
        @click="sendToArchive"
        >Заказ отправлен</my-button>
    </div>
    <div class="item-box" v-show="showOrders">
        <orders-item 
          v-for="item in RECIEVED_ORSERS[item.id].userOrder" 
          :key="item.id" 
          :item="item" 
        />
    </div>
  </div>
</template>

<script>
import OrdersItem from "@/components/admin/OrdersItem.vue"
import { getDatabase, remove, ref } from "@firebase/database";
const db = getDatabase();
import { mapGetters } from "vuex";
export default {
  data(){
    return{
      email: '',
      userName: '',
      userPhone: '',
      showOrders: false,
      statusColor:''
    }
    
  },
   name:'orders-comp',
   components:{ OrdersItem},
   props:{
     item:{
      type: Object,
      required: true
     },
   },
   computed:{
     ...mapGetters([
      'RECIEVED_ORSERS'
     ]),
     getTotalPrice() {
       const order = this.RECIEVED_ORSERS[this.item.id].userOrder
       let sum = 0;
       for (let i = 0; i < order.length; i++) {
         const totalPrice = this.RECIEVED_ORSERS[this.item.id].userOrder[i].totalPrice
         sum = sum + totalPrice;
       }
       return sum
     },
     getUserData(){
      this.email = this.RECIEVED_ORSERS[this.item.id].userEmail
      this.userName = this.RECIEVED_ORSERS[this.item.id].userName
      this.userPhone = this.RECIEVED_ORSERS[this.item.id].userPhone
     }
     
   },
   methods:{
   async sendToArchive(){
      try{
        await remove(ref(db, `recievedOrders/${this.item.id}`))
      } catch (e){
        console.log(e)
      }
    }
   },

   mounted(){
    this.getTotalPrice;
    this.getUserData;
   }
}
</script>

<style lang="scss" scoped>
html{
      font-size: 40px;
    }
   .orders{
    min-height: 50px;
    margin: 20px 0 ;
    padding: 20px;
    background-color: wheat;
   }
.item-box{
  padding: 20px;
  overflow-y: scroll;
  max-height: 400px;
}
   .img{
    width: 4rem;
    height: 6rem;
    background-color: aqua;
   }
   .client-info{
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;
   background-color: gray;
   color:aliceblue;
   padding: 1rem 2rem;
   border-radius: 4px;
}

.client-data{
  font-size: 1.5rem;
  .client-data_span{
    margin-left: 1rem;
  }
}
.fa-list{
  font-size: 2rem;
  cursor: pointer;
  transition: 0.5s;
}
.fa-list:hover{
    transform: scale(1.2);
  } 

  .swing-in-top-fwd {
	-webkit-animation: swing-in-top-fwd 3s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
	        animation: swing-in-top-fwd 3s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
}

 @-webkit-keyframes swing-in-top-fwd {
  0% {
    -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 1;
  }
}
@keyframes swing-in-top-fwd {
  0% {
    -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 1;
  }
}

.status{
  display: flex;
  align-items: center;
  justify-content: center;
}
.status-btn {
  height: 3rem;
  width: 14rem;
  font-size: 1rem;
  margin: 1rem;
}
</style>