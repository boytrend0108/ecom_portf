<template>
  <div class="about">
    <h1>This is an CATALOG page</h1>
  </div>
</template>


<script>
// ------------------------ДЛЯ ПОДДЕРЖАНИЯ АВТОРИЗАЦИИ--------------------------
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onMounted } from '@vue/runtime-core';
const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//     this.$store.commit('SET_UID',uid)
//     console.log("user is sign in")
//   } else {
//     console.log("user is sign out")
//   }
// });
// -----------------------------------------------------------------------------
export default {
  name:'catalog',

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
