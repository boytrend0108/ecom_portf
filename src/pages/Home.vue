<template>
  <div>
   <header-comp/>
   <category-comp/>
   <catalog-comp/>
  </div>
</template>

<script>
import HeaderComp from '@/components/Headercomp.vue'
import CategoryComp from '@/components/CategoryComp.vue'
import CatalogComp from '@/components/CatalogComp,.vue'

export default {
  components:{
    HeaderComp,CategoryComp, CatalogComp
  },
  data(){
    return{
     
    }
  }

  }
</script>


<style >
* {
  font-family: 'Lato';
  font-style: normal;
}
</style>
