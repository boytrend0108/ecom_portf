<template>
   <header-comp/>
   <category-comp/>
   <catalog-comp />
    <router-view />  
</template>

<script>
import HeaderComp from '@/components/Headercomp.vue'
import CategoryComp from '@/components/CategoryComp.vue'
import CatalogComp from '@/components/CatalogComp,.vue'

export default {
  name:"home",
  components:{
    HeaderComp,CategoryComp, CatalogComp
  },
  data(){
    return{
     
    }
  },
  mounted(){
       
  }
  

  }
</script>

<style >

</style>
