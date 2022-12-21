<template>
   <div class="order-box">
      <orders-comp
        v-for="item in RECIEVED_ORSERS"
        :key="item.id"
        :item="item"
      />
   </div>
</template>

<script>
import OrdersComp from "@/components/admin/OrdersComp.vue"
import { mapGetters } from "vuex";
export default {
   components:{OrdersComp},
   name:'recieved-orders',
   elems:3,
   computed:{
      ...mapGetters([
         "RECIEVED_ORSERS"
      ])
   }
}
</script>

<style lang="scss" scoped>
.order-box{
   width: 100%;
   padding: 20px;
   border: 1px solid blue;
}


</style>
