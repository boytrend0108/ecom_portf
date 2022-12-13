<template>
  <div class="about">
    <h1>This is an CATALOG page</h1>
  </div>
</template>


<script>
// -----------------------------------------------------------------------------
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("user is sign in")
  } else {
    console.log("user is sign out")
  }
});
// -----------------------------------------------------------------------------
export default {
  name:'catalog'

}
</script>

<style lang="scss" scoped>

</style>
