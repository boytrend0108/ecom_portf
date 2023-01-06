<template>
  <div class="item">
    <div 
      class="warn-msg swing-in-top-fwd swing-out-top-bck"
      :style="{'display':`${isVisible}`}"
      >
      <p>Pleace, sign in!</p>
    </div>
    <div class="item__img">
      <img class="img" :src="require('@/assets/img/catalog/' + item.itemImg)" alt="img">
      <div class="overlay">
        <my-button @click="addToCart" id="catalog-img__btn">
          <font-awesome-icon class="font-aw" icon="fa-solid fa-cart-shopping" />
          Add to cart
        </my-button>
      </div>
    </div>
    <h2 class="item-title">{{ item.itemTitle }}</h2>
    <p class="item-sub">{{ item.itemSubtitle }}</p>
    <p class="item-price"> $ {{ item.itemPrice }}</p>
     <button @click="goToProductPage(item)">show more</button>
  </div>

</template>

<script>
import { mapActions } from 'vuex';
export default {
  data(){
    return{
      isVisible: "none"
    }
  },
  props: {
    item: {
      type: Object,
      requiren: true
    }
  },
  computed: {

  },
  methods: {
    ...mapActions([
      "ADD_TO_CART",
      //  "ADD_USER_CART_TO_JSON"
    ]),

    addToCart(event) {
      if(localStorage.getItem('firebase').length !== 0){
        this.ADD_TO_CART(this.item, event);
      }else{
         this.isVisible = 'flex'
         setTimeout(()=>{
          this.isVisible = 'none'
         }, 3000)
      }
    },
    goToProductPage(item) {
      let title = item.itemTitle.split('')
        .map(el => {
          if (el === " ") {
            return el = "_"
          }
          return el
        }).join('')
      this.$router.push(`/product/${title}`)
      this.$store.commit('SET_PRODUCT', item)
    }
   
  },

  mounted() {
    // console.log(this.item)
  }

}
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/mixin.scss';
.item {
  max-width: 300px;
  max-height: 580px;
  background: #F8F8F8;
  border-radius: 15px;
  position: relative;
  

  @media(max-width: $media-laptop) {
    max-width: 300px;
    max-height: 540px;
  }
}

.item__img {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  position: relative;

}

.item__img:hover {
  .overlay {
    transform: scaleY(1);
  }
}

.img {
  max-width: 100%;
  object-fit: cover;
}

.item-title {
  @include item-title(13px);
}

.item-sub {
  padding: 15px 20px;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #5D5D5D;
}

.item-price {
  padding-left: 20px;
  padding-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #F16D7F;
}

.overlay {
  background-color: #3A3838;
  opacity: 80%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  transform: scaleY(0);
  transform-origin: center top;
  transition-duration: 0.5s;
  transition-timing-function: ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
}

#catalog-img__btn {
  background-color: transparent;
  border: 2px solid white;
  color: white;
  width: 140px;
  height: 45px;
  cursor: pointer;
  transition: 0.5s;
}

#catalog-img__btn:hover {
  transform: scale(1.2);
}

.font-aw {
  margin-right: 10px;
}

.warn-msg {
  width: 100%;
  height: 10rem;
  background-color: $pink-color;
  position: absolute;
  z-index: 1;
  color: #F8F8F8;
  text-align: center;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 70%;
  display: none;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

  .swing-in-top-fwd {
	-webkit-animation: swing-in-top-fwd 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
	        animation: swing-in-top-fwd 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;

@-webkit-keyframes swing-in-top-fwd {
  0% {
    -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 1;
  }
}
@keyframes swing-in-top-fwd {
  0% {
    -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 1;
  }
}

}

.swing-out-top-bck {
	-webkit-animation: swing-out-top-bck 2s cubic-bezier(0.600, -0.280, 0.735, 0.045) both;
	        animation: swing-out-top-bck 2s cubic-bezier(0.600, -0.280, 0.735, 0.045) both;

@-webkit-keyframes swing-out-top-bck {
  0% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 1;
  }
  100% {
    -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 0;
  }
}
@keyframes swing-out-top-bck {
  0% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 1;
  }
  100% {
    -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 0;
  }
}

}


</style>
