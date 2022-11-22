<template>
    <div class="wrapper w_categ">
        <div class="categ-top">
            <category-item 
               v-for="item in this.$store.state.category"
               :item="item"
               :key="item.id"
              >
            </category-item>
        </div>
        <div class="categ-bottom">
            <category-title :item="accsesCategory"></category-title>
        </div>
        
    </div>
</template>

<script>
import CategoryItem from '@/components/CategoryItem.vue'
import CategoryTitle from '@/components/CategoryTitle.vue'
import { mapActions } from 'vuex'
export default {
    components: {
        CategoryItem, CategoryTitle
    },
    data() {
        return {

            accsesCategory: {
                id: 4, category_title: "Accesories", category_desc: "Trendy Accesories"
            }

        }
    },
    methods: {
        ...mapActions([
            'GET_CATEGORY'
        ])
    },
    mounted() {
        this.GET_CATEGORY()
    }
}
    
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
    cursor: pointer;
    
}
.categ-bottom{
    background-image: linear-gradient(rgba(33, 22, 22, 0.7), rgba(33, 22, 22, 0.7)),url('@/assets/img/category/acces.png');
    background-repeat: no-repeat;
    height: 470px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover;
    transition: 0.7s;
    cursor: pointer;
    border-radius: 15px;
}
.categ-bottom:hover{
    transform: scale(1.05);
}

</style>
