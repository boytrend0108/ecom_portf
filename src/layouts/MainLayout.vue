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
// import info from "@/store/info"
export default {
  components: {
    FooterComp, SubscribeComp, AdvantageComp
  },

 async mounted() {
    // if (!Object.keys(this.$store.getters.info).length) { // if state.info is empty- fetch info from FireBase
      await this.$store.dispatch('fetchInfo')
      // commit('setInfo', info)
    }
  // }

}
</script>

<style lang="scss" scoped>

</style>
