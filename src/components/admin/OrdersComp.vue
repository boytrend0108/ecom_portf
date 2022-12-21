<template>
  <article class="orders">
    <div class="client-info">
         <h3>Name: Vetal</h3>
         <h3>Email: eur-usd@bk.ru</h3>
         <h3>Phone: +7(000)000-0000</h3>
         <h3>Total Price: {{getTotalPrice}} $</h3> 
      </div>
    <orders-item
      v-for="item in RECIEVED_ORSERS[item.Id].userOrder"
      :key="item.id"
      :item="item"
    ></orders-item>   
  </article>
</template>

<script>
import OrdersItem from "@/components/admin/OrdersItem.vue"
import { mapGetters } from "vuex";
export default {
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
       const order = this.RECIEVED_ORSERS[this.item.Id].userOrder
       console.log(order.length)
       let sum = 0;
       for (let i = 0; i < order.length; i++) {
         const totalPrice = this.RECIEVED_ORSERS[this.item.Id].userOrder[i].totalPrice
         sum = sum + totalPrice;
       }
       return sum
     }
   },
   methods:{
    
    
   },

   mounted(){
    this.getTotalPrice;
    // console.log(this.RECIEVED_ORSERS[this.item.Id].userOrder[0].totalPrice)
    // console.log(this.RECIEVED_ORSERS[this.item.Id].userOrder)
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
}


</style>