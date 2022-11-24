<template>
<div class="wrapper wr-cat">
    <div class="catalor_title-box">
        <h2 class="catalog__title">Fetured Items</h2>
        <h3 class="catalog__sub">Shop for items based on what we featured in this week</h3>
    </div>
    <div class="item-box">
        <catalog-item v-for="item in CATALOGITEMS" :key="item.id" :item="item" />
    </div>
    <my-button>Browse All Product</my-button>
</div>
   

</template>

<script>
import CatalogItem from "@/components/CatalogItemComp.vue"
import {mapActions, mapGetters} from "vuex"
export default {
    components:{
        CatalogItem,
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'CATALOGITEMS'
        ])
    },
    methods:{
        ...mapActions([
            'GET_CATALOG'
        ])
    },
    mounted(){
        this.GET_CATALOG();
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.wr-cat{
    margin-top: 96px; 
    margin-bottom: 96px;
    display: flex;
    flex-direction: column;  
}
.catalor_title-box{
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
}
.catalog__title{
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    color: #222222;
    margin: 0 auto;  
}
.catalog__sub{
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #9F9F9F;
    margin-top: 15px;
}.item-box {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin: 50px 0;

    @media(max-width: $laptop) {
        gap: 20px;
    }
}
</style>
