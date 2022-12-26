<template>
   <Toast position="top-right"></Toast>
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
  @media(max-width: $media-phone) {
    max-width: $wrapper-phone;
    justify-content: center;

  }
}
.p-toast{
  width: 40rem !important;
  @media(max-width: $media-phone){
    width: 24rem !important;
  }
}
.p-toast-summary{
  font-size: 2rem !important;
}
.p-toast-message{
  font-size: 1.5rem !important;
}
.p-toast-top-right {
    top: 90px !important;
    right: 20px !important;
  }


</style>
