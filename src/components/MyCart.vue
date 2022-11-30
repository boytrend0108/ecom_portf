<template>
<div class="cart-box">
    <cart-item 
    v-for="item in USER_CART" 
    :key="item.id"
    :item="item"
    />
    <div class="cart-bottom">
        <div>
            <p class="title">Total in cart: <span class="price"> {{TOTAL_CART_PRICE}}</span> $</p>
            <p class="title">Total items:   <span class="price1"> {{TOTAL_CART_ITEMS}}</span> pcs</p>
        </div>
        <my-button class="btn" @click="clearCart">Clear Cart</my-button>
    </div>
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
            "USER_CART","TOTAL_CART_PRICE","TOTAL_CART_ITEMS"
        ])
    },
    methods:{
        ...mapActions([
            'GET_USER_CART','CLEAR_CART','ADD_USER_CART_TO_JSON'
        ]),
        clearCart(){
            this.CLEAR_CART();
            this.ADD_USER_CART_TO_JSON();
        }
    },
    mounted(){
        this.GET_USER_CART();
    }
}
</script>

<style lang="scss" scoped>
.cart-box{
    width: 400px;
    max-height: 500px;
    overflow: auto;
    padding: 20px;
    background-color: white;
    position: fixed;
    z-index: 1;
    right: 0px;
    top: 71px;
    padding: 20px;
   @include box-shadow;
}

.price{
    @include text($pink-color, 16px);
}
.price1{
        @include text($pink-color, 16px);
        margin-left: 5px;
    }
.title{
        @include item-title(16px);
        margin: 0;
    }
.cart-bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn {
            max-width: 195px;
            height: 40px;
        }
}
</style>
