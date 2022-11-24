<template>
    <section class="wrapper w_categ">
        <div class="categ-top">
            <category-item 
               v-for="item in CATEGORY"
               :item="item"
               :key="item.id"
              >
            </category-item>
        </div>
        <div class="categ-bottom">
            <div class="bottom-wr">
                <category-title :item="accsesCategory"></category-title>
            </div>      
        </div>
    </section>
</template>

<script>
import CategoryItem from '@/components/CategoryItem.vue'
import CategoryTitle from '@/components/CategoryTitle.vue'
import { mapActions, mapGetters } from 'vuex'
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
    computed:{
        ...mapGetters([//using mapActions we refer to getters in store
            'CATEGORY'
        ])
    },
    methods: {
        ...mapActions([//using mapActions we refer to actions in store
            'GET_CATEGORY'
        ]),
    },
    mounted() {
        this.GET_CATEGORY()// run GET_CATEGORY
    }
}
    
</script>

<style lang="scss" scoped>

.w_categ {
    display: flex;
    flex-direction: column;
    margin-top: 65px;
}
.categ-top {
    display: flex;
    gap: 30px;
    cursor: pointer;
}
.categ-bottom {
    background-image: linear-gradient(rgba(33, 22, 22, 0.7), rgba(33, 22, 22, 0.7)), url('@/assets/img/category/acces.png');
    background-repeat: no-repeat;
    height: 180px;
    width: 100%;
    background-size: cover;
    transition: 0.7s;
    cursor: pointer;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: $media-tablet){
       height: 116px;
    }
}
.categ-bottom:hover{
    transform: scale(1.05);
}
.bottom-wr {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
