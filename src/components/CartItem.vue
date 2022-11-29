<template>
    <div class="cart-item__box">
        <img :src="require('@/assets/img/catalog/' + item.itemImg)" alt="img" class="cart-img">
        <div class="cart-item__descr">
            <h2 class="title">{{ item.itemTitle }}</h2>
            <p class="text">Price {{item.itemPrice}} $</p>
            <p class="text">Quantity: {{item.quantity}} </p>
            <p class="price">Total: {{culcTotalPrice}} $ </p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data(){
        return{
           
        }
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    computed:{
        ...mapGetters([
            "USER_CART"
        ]),
        culcTotalPrice(){
            const index =  this.USER_CART.indexOf(this.item);
            const totalPrice = this.USER_CART[index].itemPrice * this.item.quantity;
            this.USER_CART[index].totalPrice = totalPrice;
            return totalPrice;   
        }
    },
    methods:{
        ...mapActions([
            'GET_TOTAL_CART_PRICE'
        ]),
    },
    
    mounted(){  
        // this. GET_TOTAL_CART_PRICE();
    }
}
</script>

<style lang="scss" scoped>
.cart-item__box{
    width: 100%;
    height: 100px;
    // border: 1px solid $pink-color;
    @include box-shadow-pink;
    padding: 20px 0;
    margin: 20px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.cart-img{
    height: 90px;
}
.cart-item__descr{
    display: flex;
    flex-direction: column;
    padding-right: 20px;

    .title{
        @include item-title(13px);
        margin: 0 0 10px 0;
    }
    .price{
        @include text($main-color, 16px);
        margin-top: 10px;
    }
        .text {
            @include text(#5D5D5D, 10px);
            font-weight: 300;
            font-size: 14px;
            line-height: 17px;
        }
}
</style>
