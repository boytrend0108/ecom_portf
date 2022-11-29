<template>
<div class="cart-box">
    <cart-item 
    v-for="item in USER_CART" 
    :key="item.id"
    :item="item"
    />
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
            "USER_CART"
        ])
    }
}
</script>

<style lang="scss" scoped>

.cart-box{
    width: 400px;
    height: auto;
    padding: 20px;
    background-color: grey;
    position: fixed;
    z-index: 1;
    right: 0px;
    top: 71px;
    padding: 20px;
}

</style>
