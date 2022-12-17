<template>
  <main>
    <router-view />
    <subscribe-comp />
    <footer-comp /> 
  </main>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue';
import SubscribeComp from '@/components/SubscribeComp.vue';
export default {
  name: 'cartlayout',
  components: {
    FooterComp, SubscribeComp
  },
  
  async mounted(){
    if(this.GET_UID){
          await this.$store.dispatch('fetchInfo')
        } return
  }
}
</script>

<style lang="scss" scoped>

</style>
