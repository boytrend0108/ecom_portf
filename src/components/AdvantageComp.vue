<template>
    <div class="adv">
    <div class="wrapper wr-adv">
        <advantage-item v-for="item in ADVANTAGES" :key="item.id" :item="item"/>
    </div>
</div>
</template>

<script>
import AdvantageItem from '@/components/AdvantageItem.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    components:{
        AdvantageItem
    },
    data(){
        return {
            // advantages: [
            //     {id:0, adv__title:'Free Delivery', adv__descr: 'Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.', adv__img: require("@/assets/img/advantage/adv_car.png")},
            //     {id:0, adv__title:'Sales & discounts', adv__descr: 'Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.', adv__img: require("@/assets/img/advantage/adv_perc.png")},
            //     {id:0, adv__title:'Quality assurance', adv__descr: 'Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.', adv__img: require("@/assets/img/advantage/adv_crown.png")}
            // ]
        }
    },
    computed: {
        ...mapGetters([
            'ADVANTAGES'
        ])
    },
    methods:{
        ...mapActions([
            'GET_ADVANTAGES'
        ])
    },
    mounted(){
        this.GET_ADVANTAGES()
    }
}
</script>

<style scoped>
.adv{
    width: 100%;
    height: 340px;
    background: #222224;
}
.wr-adv{
    display: flex;
    justify-content: space-between;
}
</style>
