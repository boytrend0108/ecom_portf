<template>
  <div class="empty">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed:{
    ...mapGetters([
      'ERROR'
    ]),

    error(){
      return this.ERROR
    }
  },

  watch:{
    error(fbError){
      console.log(fbError)
    }
  }

}
</script>

<style lang="scss" scoped>
.empty {
  width: 100%;
  height: 100vh;
  background: $pink-color;
}
</style>

