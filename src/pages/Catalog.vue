<template>
  <header-mini class="header_catalog">
    <my-title class="title">Catalog</my-title>
  </header-mini>
  <catalog-comp></catalog-comp>
  <my-pagination/>
</template>

<script>
import HeaderMini from "@/components/HeaderMini.vue";
import CatalogComp from "@/components/CatalogComp,.vue";

// ------------------------ДЛЯ ПОДДЕРЖАНИЯ АВТОРИЗАЦИИ--------------------------
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();

export default {
  name:'catalog',
  components:{
   HeaderMini, CatalogComp
  },

  mounted(){
// ------------------------ДЛЯ ПОДДЕРЖАНИЯ АВТОРИЗАЦИИ--------------------------
    onAuthStateChanged(auth, (user) => {
      const uid = user.uid;
      this.$store.commit('SET_UID', uid)
      if (user) {
        console.log("user is sign in")
      } else {
        console.log("user is sign out")
      }
    });
  }
  
}
</script>

<style lang="scss" scoped>


 


 
</style>
