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
    'GET_PAGE_PATH'
    ])
  },

  mounted(){
    this.GET_PAGE_PATH('/cart')
  }
}
</script>

<style lang="scss" scoped>

</style>
