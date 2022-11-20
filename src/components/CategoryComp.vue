<template>
    <div class="wrapper w_categ">
        <div class="categ-top">
            <category-item 
               v-for="item in category"
               :item="item"
               :key="item.id"
            ></category-item>
        </div>
        <div class="categ-bottom">bottom</div>
    </div>

</template>

<script>
import CategoryItem from '@/components/CategoryIItem.vue'
export default {
    components: {
        CategoryItem
    },
    props:{
        category:{
            type: Array,
            required: true
        }
    }


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
