<template>
  <div class="about">
    <h1>This is an Product page</h1>
  </div>
</template>


<script>
// ------------------------ДЛЯ ПОДДЕРЖАНИЯ АВТОРИЗАЦИИ--------------------------
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
  name:"product",
}
</script>

<style lang="scss" scoped>

</style>