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

<style lang="scss" scoped>
.adv{
    width: 100%;
    min-height: 340px;
    background: #222224;
    display:flex ;
    align-items: center;
    justify-content: center;
    padding: 30px;
}
.wr-adv{
    display: flex;
    justify-content: space-between;
    height: 100%;

    @media(max-width: $media-tablet){
        flex-direction: column;
    }
}
</style>
