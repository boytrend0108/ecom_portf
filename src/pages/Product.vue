<template>
  <header-mini>
    <my-title class="title">Product</my-title>
  </header-mini>
  <slider-comp></slider-comp>

</template>


<script>
// ------------------------ДЛЯ ПОДДЕРЖАНИЯ АВТОРИЗАЦИИ--------------------------
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HeaderMini from "@/components/HeaderMini"
import SliderComp from '../components/SliderComp.vue';

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    this.$store.commit('SET_UID',uid)
    console.log("user is sign in")
  } else {
    console.log("user is sign out")
  }
});
// -----------------------------------------------------------------------------
export default {
  components:{
    HeaderMini,
    SliderComp
  },
  name:"product",
}
</script>

<style lang="scss" scoped>

</style>