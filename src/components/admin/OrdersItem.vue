<template>
  <div class="cart-item__box slide-bottom ">
    <img :src="require('@/assets/img/catalog/' + item.itemImg)" alt="img" class="cart-img">
    <div class="cart-item__descr">
      <h2 class="title">{{ item.itemTitle }} </h2>
      <p class="text">Price {{ item.itemPrice }} $</p>
      <div class="quantity">
        <p class="text">Quantity: {{ item.quantity }} </p>
      </div>
      <p class="text">Quantity: {{ item.quantity }} </p>
      <p class="price">Total: {{  item.quantity  * item.itemPrice  }} $ </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
   name:'orders-item',
   props:{
    item:{
      type: Object,
      require: true
    }
   },
   computed:{
    ...mapGetters([
      "RECIEVED_ORSERS"
    ]),
   
   },
   mounted(){
   
   }
}
</script>

<style lang="scss" scoped>
.cart-item__box {
  width: 100%;
  height: 120px;
  // border: 1px solid $pink-color;
  @include box-shadow-pink;
  padding: 20px 0;
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.cart-img {
  height: 90px;
}

.cart-item__descr {
  display: flex;
  flex-direction: column;
  padding-right: 20px;

  .title {
    @include item-title(13px);
    margin: 0 0 10px 0;
  }

  .price {
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

.quantity {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .quantity-bnt {
    width: 30px;
    height: 20px;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid $pink-color;
    background-color: transparent;
  }
}

.slide-bottom {
	-webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

@-webkit-keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
  }
}
@keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
  }
}

}
</style>
