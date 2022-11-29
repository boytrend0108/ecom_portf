<template>
<div class="cart-box">
    <cart-item 
    v-for="item in USER_CART" 
    :key="item.id"
    :item="item"
    />
    <h2>Total in cart {{TOTAL_CART_PRICE}} $</h2>
</div>

</template>

<script>
import CartItem from '@/components/CartItem.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    components:{
        CartItem
    },
    computed:{
        ...mapGetters([
            "USER_CART","TOTAL_CART_PRICE"
        ])
    }
}
</script>

<style lang="scss" scoped>

.cart-box{
    width: 400px;
    height: auto;
    padding: 20px;
    background-color: white;
    position: fixed;
    z-index: 1;
    right: 0px;
    top: 71px;
    padding: 20px;
   @include box-shadow;
}

</style>
