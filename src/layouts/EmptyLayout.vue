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
    error(fbError){ // watch the error
      // if getters ERROR chanded - go to message.plugin and show message
      if(messages[fbError.code]){
        this.$error(messages[fbError.code].summary, messages[fbError.code].details)
      }
      this.$error('Ups!!', 'Something went wrong...' )
    }
  },

}
</script>

<style lang="scss" scoped>
.empty {
  width: 100%;
  height: 100%;
  background: $pink-color;
}
</style>

