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
import { mapActions } from 'vuex'

export default {
  name:"home",
  components:{
    HeaderComp,CategoryComp, CatalogComp
  },
  data(){
    return{
     
    }
  },
  methods:{
    ...mapActions([
      'GET_NAVCART_BTN_ABLED'
    ])
  },

  mounted(){
    this.GET_NAVCART_BTN_ABLED();
  }
}
</script>

<style >

</style>
