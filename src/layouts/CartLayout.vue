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
  }
}
</script>

<style lang="scss" scoped>

</style>
