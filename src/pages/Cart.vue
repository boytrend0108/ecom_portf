<template>
  <main>
    <header-mini class="cart-header"></header-mini>
    <cart-section />
  </main>
</template>

<script>
import HeaderMini from "@/components/HeaderMini.vue"
import CartSection from "@/components/CartSection.vue"
import { mapActions } from "vuex"

export default {
  name:"cart",
  components: {
    HeaderMini, CartSection
  },
  
  methods:{
    ...mapActions([
    'GET_PAGE_PATH','GET_NAVCART_BTN_DISABLED','GET_BTN_DISABLED'
    ])
  },

  mounted(){
    this.GET_PAGE_PATH('/cart');
    this.GET_NAVCART_BTN_DISABLED();
    if(JSON.parse(localStorage.getItem('cart')).length === 0){
      this.GET_BTN_DISABLED();
    }  
  }
}
</script>

<style lang="scss" scoped>

</style>
