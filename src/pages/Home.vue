<template>
  <div>
   <header-comp/>
   <category-comp :category="category" />

   
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
      category:[
       {id:1, category_title: "For men", category_desc: "30% off", category_img: "@/assets/img/category/for_men"},
       {id: 2, category_title: "For women", category_desc: "Hot deal", category_img: "@/assets/img/category/for_women"},
       {id: 3, category_title: "For kid", category_desc: "New arrivals", category_img: "@/assets/img/category/for_children"}
      ]        
    }
  }

  }
</script>


<style scoped>

</style>
