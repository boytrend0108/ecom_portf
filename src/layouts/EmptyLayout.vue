<template>
  <div class="empty">
    <router-view/>
  </div>
</template>

<script>
import messages from '@/utils/messages';
export default {
  computed:{
    error(){
      return this.$store.getters.ERROR
    }
  },

  watch:{
    error(fbError){ // watch tth  error
      // if getters ERROR chanded - go to message.plugin and show message
      this.$error(messages[fbError.code].summary, messages[fbError.code].details ||
      'Ups!!', 'Something went wrong...' )
    }
  },

  mounted(){
    // console.log(this.ERROR)
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

