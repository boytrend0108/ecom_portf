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
import { mapGetters } from 'vuex';

// import info from "@/store/info"
export default {
  components: {
    FooterComp, SubscribeComp, AdvantageComp
  },
  computed: {
    ...mapGetters(['GET_UID'])
  },

  async mounted() {
    if (localStorage.getItem('firebase').length !== 0) {
      await this.$store.dispatch('fetchInfo')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
