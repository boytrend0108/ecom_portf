<template>
  <div>
   <header-comp/>
   <category-comp  />

   
  </div>
</template>

<script>
import HeaderComp from '@/components/Headercomp.vue'
import CategoryComp from '@/components/CategoryComp.vue'
export default {
  components:{
    HeaderComp,CategoryComp
  },
  data(){
    return{
     
    }
  }

  }
</script>


<style scoped>

</style>
