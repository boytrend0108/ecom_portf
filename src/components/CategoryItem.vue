<template>
    <div class="category" > 
            <img class="img" :src="require('@/assets/img/category/' + item.category_img)" alt="------img----------">
        <div class="blackout"></div>
        <category-title class="title" :item="item"></category-title>
    </div>
</template>

<script>
import CategoryTitle from '@/components/CategoryTitle.vue'
import { mapGetters } from 'vuex';
export default {
    components: {
        CategoryTitle
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            // isImg: false
        }
    },
    computed:{
        ...mapGetters([
            'ISIMG'
        ])
    }


}
</script>

<style lang="scss" scoped>
.category{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    transition: 0.7s;
    border-radius: 15px;
    background: rgba(33, 22, 22, 0.7); 
    max-width: 360px;
    max-height: 260px;
    position: relative;
}
.category:hover{
    transform: scale(1.05);
}
.img{
    position: relative;
    border-radius: 15px;
    width: 100%;
    height: 100%;
}
.title{
    position: absolute;
}
.blackout{
    background: rgba(33, 22, 22, 0.7);
    opacity: 50%;
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 15px;
}
</style>
