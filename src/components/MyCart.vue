<template>
    <div class="cart-box">
        <cart-item v-for="item in USER_CART" :key="item.id" :item="item" />
        <div class="cart-bottom">
            <div>
                <p class="title">Total in cart: <span class="price"> {{ TOTAL_CART_PRICE }} </span> $</p>
                <p class="title">Total items: <span class="price1"> {{ TOTAL_CART_ITEMS }} </span> pcs</p>
            </div>
            <my-button class="btn clear-btn" @click="clearCart" v-show="USER_CART.length">Clear Cart
            </my-button>
            <p class="price1" v-show="!USER_CART.length">Cart is empty</p>
        </div>
    </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue';
import NotificationComp from '@/components/notifications/NotificationComp.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            cart: [],
            messages: [
                { name: 'notification', id: Date.now().toLocaleString() }
            ]
        }
    },
    components:{
        CartItem, NotificationComp
    },
    computed:{
        ...mapGetters([
            "USER_CART","TOTAL_CART_PRICE","TOTAL_CART_ITEMS"
        ]),
    },
    methods:{
        ...mapActions([
            'GET_USER_CART','CLEAR_CART','ADD_USER_CART_TO_JSON','GET_BTN_DISABLED'
        ]),
        clearCart(){
            this.CLEAR_CART();
            this.GET_BTN_DISABLED();
        },
      
    },
    mounted(){
        this.GET_USER_CART();
    }
}
</script>

<style lang="scss" scoped>
.cart-box{
    font-size: 7px;
    position: absolute;
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
@media(max-width: $media-phoneM){
    width: 300px;
}

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
            max-width: 11em;
            height: 2em;
        }
}
</style>
