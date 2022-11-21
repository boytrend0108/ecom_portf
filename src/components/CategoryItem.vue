<template>
    <div class="category" :style="{ background: 'linear-gradient(rgba(33, 22, 22, 0.7), rgba(33, 22, 22, 0.7)), url(' + item.category_img  + ')' }">
        <category-title :item="item"></category-title>
    </div> 
</template>

<script>
import CategoryTitle from '@/components/CategoryTitle.vue'
export default {
    components:{
        CategoryTitle
    },
    props:{
        item:{
            type: Object,
            required: true
        }
    }
}

</script>

<style scoped>
.category{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 260px;
    width: 360px;
    margin-top: 65px;
    margin-bottom: 30px;
    transition: 0.7s;
}
.category:hover{
    transform: scale(1.1);
}

</style>
