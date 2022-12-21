<template>
  <article class="orders">
    <orders-item
      v-for="item in RECIEVED_ORSERS[1671632350432].userOrder"
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
     ])
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
    background-color: orange;
   }

   .img{
    width: 4rem;
    height: 6rem;
    background-color: aqua;
   }


</style>