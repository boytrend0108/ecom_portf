<template>
<navbar></navbar>
<div class="app">
 
  <router-view/>

</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default{
  components:{
    Navbar
  },
  
}

</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  font-family: 'Lato';
  font-style: normal;
  box-sizing: border-box;
}
.app {
    width: 100%
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
</style>
