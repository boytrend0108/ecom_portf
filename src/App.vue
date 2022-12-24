<template>
   <Toast></Toast>
  <navbar :isMobile="IS_MOBILE"></navbar>
  <div class="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import CartLayout from '@/layouts/CartLayout.vue'
import Navbar from '@/components/Navbar.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    Navbar,EmptyLayout,MainLayout,CartLayout
  },

  computed: {
    ...mapGetters([
      "IS_MOBILE"
    ]),
    layout() {
      return (this.$route.meta.layout || "main-layout") 
    }
  },

  methods: {
    ...mapActions([
      "SWITCH_MOBILE", "SWITCH_TABLET", 
    ])
  },

  mounted() {
    const vm = this;
    window.addEventListener('resize', () => {
      if (window.innerWidth > 425) {
        vm.SWITCH_TABLET()
      } else {
        vm.SWITCH_MOBILE()
      }
    })
  }
}
</script>

<style lang="scss">
html{
  font-size: 10px;
}
* {
  margin: 0;
  padding: 0;
  font-family: 'Lato';
  font-style: normal;
  box-sizing: border-box;
}

.app {
  width: 100%;
  position: absolute;
  top: 67px;
}

.wrapper {
  height: 100%;
  max-width: $wrapper-laptop;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 20px;

  @media(max-width: $media-tablet) {
    max-width: $wrapper-tablet;
  }
}

.p-toast-summary{
  font-size: 2rem;
}
.p-toast-message{
  font-size: 1.5rem;
}

.p-toast{
  width: 500px;
}
</style>
