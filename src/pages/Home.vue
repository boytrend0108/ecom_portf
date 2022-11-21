<template>
  <div>
   <header-comp/>
   <category-comp/>
   <catalog-comp/>
   <advantage-comp/>
  </div>
</template>

<script>
import HeaderComp from '@/components/Headercomp.vue'
import CategoryComp from '@/components/CategoryComp.vue'
import CatalogComp from '@/components/CatalogComp,.vue'
import AdvantageComp from '@/components/AdvantageComp.vue'

export default {
  components:{
    HeaderComp,CategoryComp, CatalogComp, AdvantageComp
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
  box-sizing:border-box;
}
</style>
