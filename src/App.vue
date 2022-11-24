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
@import '@/assets/styles/variables.scss';
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato';
  font-style: normal;
  box-sizing: border-box;
}
.app {
    width: 100%
}
.wrapper {
  height: 100%;
  max-width: 1160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media(max-width: $laptop) {
    margin-left: 40px;
    margin-right: 40px;
    max-width: 950px;
  }
  @media(max-width: $tablet) {
    margin-left: 20px;
    margin-right: 20px;
    max-width: 735px;
  }
}
</style>
