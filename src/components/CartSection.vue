<template>
     <div class="cart-box">
            <div class="wrapper">
                <div class="item-box">
                    <cart-item v-for="item in USER_CART" :key="item.id" :item="item" class="cart-item" />
                    <h3 v-show="!USER_CART.length" class="text">Cart is empty</h3>
                    <div class="btn-box">
                        <my-button 
                           class="btn clear-btn" 
                           @click="clearCart"
                           >Clear Cart</my-button>
                        <my-button class="btn " @click="$router.push(`/`)">Continue Shopping</my-button>
                    </div>
                </div>
                <div class="form-box"></div>
            </div>
        </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'
import { mapGetters, mapActions} from "vuex";

export default {
    data() {
        return {
          
        }
    },

    components:{
        CartItem
    },

    computed: {
        ...mapGetters([
            'USER_CART'
        ]),
        getUserCart() {
            //  console.log(this.USER_CART)
        },
    },

    methods: {
        ...mapActions([
            'CLEAR_CART', 'GET_USER_CART'
        ]),
        clearCart() {
            this.CLEAR_CART();
        },

    },

    mounted() {
        this.getUserCart;
        const a = JSON.parse(localStorage.getItem('cart'))
        console.log(a.length);
        if (a.length > 0){ console.log('true')}
        else{console.log('false')}
    },
  

    watch: {
    
    }

}
</script>

<style lang="scss" scoped>
.cart-header .wh{
    background-image: none;
}
.wrapper{
    margin-top: 30px;
    margin-bottom: 30px;
}
.cart-box{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .item-box, .form-box{
    
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 200px;
        min-width: 400px;
        padding: 20px;
    }

    .cart-item{
        margin-bottom: 0px;
    }
}

.btn-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.btn {
        max-width: 160px;
        margin: 0 10px;
    }

.text{
    color:$pink-color;
    font-size: 30px;
}


</style>