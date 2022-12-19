<template>
  <main>
    <header-mini class="cart-header"></header-mini>
    <cart-section />
  </main>
</template>

<script>
import HeaderMini from "@/components/HeaderMini.vue"
import CartSection from "@/components/CartSection.vue"
import { mapActions, mapGetters } from "vuex"
// ------------------------ДЛЯ ПОДДЕРЖАНИЯ АВТОРИЗАЦИИ--------------------------
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();

// -----------------------------------------------------------------------------

export default {
  name:"cart",
  components: {
    HeaderMini, CartSection
  },
  computed:{
    ...mapGetters([
      "USER_CART"
    ])
  },
  
  methods:{
    ...mapActions([
    'GET_PAGE_PATH','GET_NAVCART_BTN_DISABLED','GET_BTN_DISABLED'
    ])
  },

  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        this.$store.commit('SET_UID', uid)
        console.log("user is sign in")
      } else {
        console.log("user is sign out")
      }
    });
    this.GET_PAGE_PATH('/cart');
    this.GET_NAVCART_BTN_DISABLED();
    if (this.USER_CART.length === 0) {
      this.GET_BTN_DISABLED();
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
