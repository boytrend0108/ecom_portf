<template>
  <header-mini>
    <my-title class="title">Product</my-title>
  </header-mini>
  <slider-comp></slider-comp>

</template>


<script>
// ------------------------ДЛЯ ПОДДЕРЖАНИЯ АВТОРИЗАЦИИ--------------------------
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import HeaderMini from "@/components/HeaderMini"
import SliderComp from '../components/SliderComp.vue';

// const auth = getAuth();

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