<template>
    <main>
        <header-mini class="cart-header"></header-mini>
        <cart-section/>
        <advantage-comp/>
        <subscribe-comp/>
        <footer-comp/>
    </main>
</template>

<script>
import HeaderMini from "@/components/HeaderMini.vue"
import AdvantageComp from '@/components/AdvantageComp.vue'
import SubscribeComp from '@/components/SubscribeComp.vue'
import FooterComp from "@/components/FooterComp.vue"
import CartSection from "@/components/CartSection.vue"

export default {
    components:{
        HeaderMini, AdvantageComp, SubscribeComp, FooterComp, CartSection
    },
   

}
</script>

<style lang="scss" scoped>


</style>
