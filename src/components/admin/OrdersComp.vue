<template>
  <div class="orders">
    <div class="client-info">
      <h3>Name: {{userName}}</h3>
      <h3>Email: {{email}}</h3>
      <h3>Phone: {{userPhone}}</h3>
      <h3>Total Price: {{getTotalPrice}} $</h3>
      <font-awesome-icon 
      icon="fa-solid fa-list" 
      @click="showOrders = !showOrders"
      />
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
import { mapGetters } from "vuex";
export default {
  data(){
    return{
      email: '',
      userName: '',
      userPhone: '',
      showOrders: true
    }
    
  },
   name:'orders-comp',
   components:{OrdersItem},
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

   .img{
    width: 4rem;
    height: 6rem;
    background-color: aqua;
   }
   .client-info{
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: gray;
   color:aliceblue;
   height: 4rem;
   padding: 0 1rem;
}
.fa-list{
  font-size: 2rem;
  cursor: pointer;
  transition: 0.5s;
}
.fa-list:hover{
    transform: scale(1.2);
  } 


</style>