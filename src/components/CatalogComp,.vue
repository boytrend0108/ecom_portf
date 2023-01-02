<template>
<div  class="wrapper wr-cat">
    <div class="catalor_title-box">
        <h2 class="catalog__title">Fetured Items</h2>
        <h3 class="catalog__sub">Shop for items based on what we featured in this week</h3>
    </div>
    <div class="item-box">
        <!--v-show="item.id <= 6 показывать только первые 6 карточек-->
        <catalog-item v-for="item in FILTERED_CART" :key="item.id" :item="item" v-show="item.id <= itemQuantity"/>
    </div>
    <my-button 
      @click="this.$router.push('/catalog')"
      v-show="this.$route.path === '/'"
      >Browse All Product
    </my-button>
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
            'CATALOGITEMS',
            'FILTERED_CART'
        ]),
        itemQuantity(){
            if (this.$route.path === '/'){
                return 6
            } else{
                return 100
            }
        }

    },
    methods:{
        ...mapActions([
            'GET_CATALOG'
        ])
    },
    mounted(){
        this.GET_CATALOG();
        console.log(this.$route.path)
    }
}
</script>

<style lang="scss" scoped>
.wr-cat {
    margin-top: 96px;
    margin-bottom: 96px;
    display: flex;
    flex-direction: column;

    @media (max-width: $media-tablet) {
        margin-top: 46px;
        margin-bottom: 46px;
    }
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
}
.item-box {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin: 50px 0;
    
}

</style>
