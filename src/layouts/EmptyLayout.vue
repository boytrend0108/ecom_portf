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
      }else{
        this.$error('Ups!!', 'Something went wrong...' )
      } 
    }
  },

}
</script>

<style lang="scss" scoped>
.empty {
  width: 100%;
  min-height: 100vh;
  background: $pink-color;
}

// .p-toast{
//   width: 40rem;
// }
// .p-toast-top-right {
//     top: 90px;
//     right: 20px;}

// .p-toast-summary{
//   font-size: 2rem;
// }
// .p-toast-message{
//   font-size: 1.5rem;
// }
</style>

