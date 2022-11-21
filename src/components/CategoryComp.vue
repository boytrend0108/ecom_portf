<template>
    <div class="wrapper w_categ">
        <div class="categ-top">
            <category-item 
               v-for="item in category"
               :item="item"
               :key="item.id"
              >
            </category-item>
        </div>
        <div class="categ-bottom">
           <category-title :item="category"/> 
        </div>
    </div>
</template>

<script>
import CategoryItem from '@/components/CategoryItem.vue'
import CategoryTitle from '@/components/CategoryTitle.vue';
export default {
    components:{
        CategoryItem, CategoryTitle
    },
    data(){
        return{
          category:[
             {id:1, category_title: "For men", category_desc: "30% off", category_img: require("@/assets/img/for_men.png")},
             {id: 2, category_title: "For women", category_desc: "Hot deal", category_img: require("@/assets/img/for_women.png")},
             {id: 3, category_title: "For kids", category_desc: "New arrivals", category_img: require("@/assets/img/for_kids.png")}
      ]        
        }  
    }}
    
</script>

<style scoped>
.wrapper{
    height: 550px;

}
.w_categ{
    display: flex;
    flex-direction: column;
}
.categ-top{
    width: 100%;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
}

.categ-bottom{
    background-image: linear-gradient(rgba(33, 22, 22, 0.7), rgba(33, 22, 22, 0.7)),url('@/assets/img/acces.png');
    background-repeat: no-repeat;
    height: 470px;
    width: 100%;
}

</style>
