<template>
    <div class="cart-item__box">
        <img :src="require('@/assets/img/catalog/' + item.itemImg)" alt="img" class="cart-img">
        <div class="cart-item__descr">
            <h2>{{ item.itemTitle }}</h2>
            <p>Price {{item.itemPrice}} $</p>
            <p>Quantity: {{item.quantity}} </p>
            <p>Total: {{culcTotalPrice}} $ </p>
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
    border: 1px solid #000;
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
}

</style>
