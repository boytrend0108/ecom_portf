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
        <div class="categ-bottom">bottom</div>
    </div>

</template>

<script>
import CategoryItem from '@/components/CategoryIItem.vue'
export default {
    components:{
        CategoryItem
    },
    data(){
        return{
          category:[
             {id:1, category_title: "For men", category_desc: "30% off", category_img: "https://avatars.mds.yandex.net/i?id=a82cb20aa18c40b4f2deeabd440178b098a0afec-4900773-images-thumbs&n=13"},
             {id: 2, category_title: "For women", category_desc: "Hot deal", category_img: "https://avatars.mds.yandex.net/i?id=106729997a29cb4f4d9d786f89e5095fd82ba815-5124559-images-thumbs&n=13"},
             {id: 3, category_title: "For kids", category_desc: "New arrivals", category_img: "https://avatars.mds.yandex.net/i?id=a82cb20aa18c40b4f2deeabd440178b098a0afec-4900773-images-thumbs&n=13"}
      ]        
        }  
    }
    // components: {
    //     CategoryItem
    // },
    // props:{
    //     category:{
    //         type: Array,
    //         required: true
    //     }
    // }
}
</script>

<style scoped>
.wrapper{
    height: 550px;
    background-color: aquamarine;
}
.w_categ{
    display: flex;
    flex-direction: column;
}
.categ-top{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

</style>
