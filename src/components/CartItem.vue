<template>
  <div class="cart-item__box slide-in-blurred-right">
    <img :src="require('@/assets/img/catalog/' + item.itemImg)" alt="img" class="cart-img">
    <h2 class="title">{{ item.itemTitle }} </h2>
    <div class="cart-item__descr">
      <p class="text">Price {{ item.itemPrice }} $</p>
      <div class="quantity">
        <p class="text">Quantity: {{ item.quantity }} </p>
      </div>
      <div class="btn-wrapper">
          <button class="quantity-bnt" @click="addToCart">
            <font-awesome-icon icon="fa-solid fa-plus"  class="fa-solid" />
          </button>
          <button class="quantity-bnt" @click="deleteItem">
            <font-awesome-icon icon="fa-solid fa-xmark" class="fa-solid"/>
          </button>
        </div>
    </div>
    <p class="price">Total: {{ culcTotalPrice }} $ </p>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {

    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      "USER_CART"
    ]),
    culcTotalPrice() {
      const index = this.USER_CART.indexOf(this.item);
      const totalPrice = this.USER_CART[index].itemPrice * this.item.quantity;
      this.USER_CART[index].totalPrice = totalPrice;
      return totalPrice;
    }
  },
  methods: {
    ...mapActions([
      'GET_TOTAL_CART_PRICE', 'ADD_TO_CART', 'DELETE_ITEM'
    ]),
    async addToCart() {
      await this.ADD_TO_CART(this.item)
      const b = JSON.stringify(this.USER_CART, null, 4)
      localStorage.setItem('cart', b)
    },
    deleteItem() {
      this.DELETE_ITEM(this.item.id)
    }
  },

  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
.cart-item__box {
  width: 100%;
  height: 12em;
  // border: 1px solid $pink-color;
  @include box-shadow-pink;
  padding: 2em ;
  margin: 2em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-img {
  height: 8em;
}
.title {
    @include item-title(2em);
    margin: 0 ;
    max-width: 20em;
    line-height: normal;
}

.cart-item__descr {
  display: flex;
  flex-direction: column;
}
.price {
    @include text($pink-color, 2em);
  }
.quantity {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-wrapper{
  margin-top: 1em;
  justify-content: space-between;
  display: flex;
  .quantity-bnt {
    width: 2em;
    height: 1.7em;
    font-size: 1.7em;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid $pink-color;
    border-radius: 4px;
    background-color: transparent;
    transition: 0.5s;
  }
  .quantity-bnt:hover{
      background: linear-gradient(90deg, $main-color, $pink-color);
      transform: scale(1.2);
      .fa-solid{
        color:white;
      }
     
    }
}

.text {
    @include text(#5D5D5D, 1.5em);
    font-weight: 300;
    line-height: 1.5em;
  }

  .fa-solid{
    color:$main-color;
  }

.slide-in-blurred-right {
  @include slide-in-blurred-right
}
</style>
