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
    setTimeout(() => {
      this.$store.commit("setInfo")
    }, 2000);
    this.$store.commit('SET_MOBILE')
  }
}   


</script>

<style lang="scss" scoped>

.wrapper{
  flex-direction: column;
}

</style>
