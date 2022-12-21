<template>
  <div class="cart-item__box slide-in-blurred-right">
    <img :src="require('@/assets/img/catalog/' + item.itemImg)" alt="img" class="cart-img">
    <div class="cart-item__descr">
      <h2 class="title">{{ item.itemTitle }} </h2>
      <p class="text">Price {{ item.itemPrice }} $</p>
      <!-- <div class="quantity">
        <p class="text">Quantity: {{ item.quantity }} </p>
      </div>
      <p class="text">Quantity: {{ item.quantity }} </p>
      <p class="price">Total: {{ culcTotalPrice }} $ </p> -->
    </div>
  </div>
</template>

<script>
export default {
   name:'orders-item',
   props:{
    item:{
      type: Object,
      require: true
    }
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

.slide-in-blurred-right {
  @include slide-in-blurred-right
}
</style>
