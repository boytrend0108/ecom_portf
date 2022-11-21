<template>
<div class="wrapper wr-cat">
    <div class="catalor_title-box">
        <h2 class="catalog__title">Fetured Items</h2>
        <h3 class="catalog__sub">Shop for items based on what we featured in this week</h3>
    </div>
    <div class="item-boX">
        <catalog-item v-for="item in catalogItems" :key="item.id" :item="item" />
    </div>
    <my-button>Browse All Product</my-button>
    
</div>
   

</template>

<script>
import CatalogItem from "@/components/CatalogItemComp.vue"
export default {
    components:{
        CatalogItem,
    },
    data(){
        return{
            catalogItems: [
                {
                    id: 1,
                    itemImg: "https://cdn.pixabay.com/photo/2020/06/09/18/11/box-write-in-it-5279529_960_720.jpg",
                    itemTitle: "ELLERY X M'O CAPSULE",
                    itemSubtitle: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    itemPrice: 50
                },
                {
                    id: 1,
                    itemImg: "https://cdn.pixabay.com/photo/2020/06/09/18/11/box-write-in-it-5279529_960_720.jpg",
                    itemTitle: "ELLERY X M'O CAPSULE",
                    itemSubtitle: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    itemPrice: 50
                },
                {
                    id: 1,
                    itemImg: "https://cdn.pixabay.com/photo/2020/06/09/18/11/box-write-in-it-5279529_960_720.jpg",
                    itemTitle: "ELLERY X M'O CAPSULE",
                    itemSubtitle: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
                    itemPrice: 50
                },
            ]
        }
    }

}
</script>

<style scoped>
.wr-cat{
    margin: 96px auto; 
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
}
.item-boX {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    margin: 50px 0;
}
</style>
