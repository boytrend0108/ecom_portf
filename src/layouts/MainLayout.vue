<template>
  <main>
    <router-view />
    <advantage-comp />
    <subscribe-comp />
    <footer-comp />
  </main>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue';
import SubscribeComp from '@/components/SubscribeComp.vue';
import AdvantageComp from '@/components/AdvantageComp.vue';
export default {
  components:{
    FooterComp,SubscribeComp,AdvantageComp
  }
}
</script>

<style lang="scss" scoped>

</style>
