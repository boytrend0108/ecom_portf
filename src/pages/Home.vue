<template>
  <div>
   <header-comp/>
   <category-comp/>
   <catalog-comp/>
   <advantage-comp/>
   <subscribe-comp/>
   <footer-comp/>
  </div>
</template>

<script>
import HeaderComp from '@/components/Headercomp.vue'
import CategoryComp from '@/components/CategoryComp.vue'
import CatalogComp from '@/components/CatalogComp,.vue'
import AdvantageComp from '@/components/AdvantageComp.vue'
import SubscribeComp from '@/components/SubscribeComp.vue'
import FooterComp from "@/components/FooterComp.vue"

export default {
  components:{
    HeaderComp,CategoryComp, CatalogComp, AdvantageComp, SubscribeComp, FooterComp
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
