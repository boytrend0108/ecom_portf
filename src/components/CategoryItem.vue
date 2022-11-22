<template>
    <div class="category" :style="{ background: 'linear-gradient(rgba(33, 22, 22, 0.7), rgba(33, 22, 22, 0.7))' }">
        <img class="img" :src="require('@/assets/img/category/' + item.category_img)" alt="img">
        <div class="blackout"></div>
        <category-title class="title" :item="item"></category-title>
    </div> 
</template>

<script>
import CategoryTitle from '@/components/CategoryTitle.vue'
export default {
    data(){
        return{
            img: ""
        }
    },
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
    border-radius: 15px;
    
}
.category:hover{
    transform: scale(1.05);
}
.img{
    position: relative;
    border-radius: 15px;
}
.title{
    position: absolute;
}
.blackout{
    background: rgba(33, 22, 22, 0.7);
    opacity: 50%;
    height: 260px;
    width: 360px;
    position: absolute;
    border-radius: 15px;
  
}

</style>
