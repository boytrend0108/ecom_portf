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
  }
}

</script>

<style>
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
.wrapper{
   height: 100%;
   max-width: 1140px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 0 auto; }
   
</style>
