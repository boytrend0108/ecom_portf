<template>
  <div class="wrapper">
    <recieved-orders/>
  </div>
</template>

<script>
import RecievedOrders from '@/components/admin/RecievedOrders.vue';
import { mapGetters } from 'vuex';
export default {
  components: { RecievedOrders },
   name:'admin',
   computed:{
    ...mapGetters([
      "RECIEVED_ORSERS","USER_CART"
    ])
   },
  

   mounted(){
    this.$store.dispatch("GET_ORDER_FROM_FIREBASE")
    setTimeout(()=>{
      console.log(this.RECIEVED_ORSERS[1671632350432].userOrder)
      console.log(this.USER_CART)
    }, 2000)
  }
}   


</script>

<style lang="scss" scoped>

.wrapper{
  border: 1px solid #000;
  flex-direction: column;
}

</style>
