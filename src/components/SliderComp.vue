<template>
  
    <div class="slideshow-conteiner">

      <div class="slider-conteiner__img">
        <div class="prev" @click="showSlide(slideIndex - 1)">prev</div>
        <div class="slider-wrapper">
          <div class="mySlides fade" >
          <img 
            :src="require('@/assets/img/catalog/' + this.PRODUCT.itemImg)"  
            class="mySlides__img"
            :class="imgAnimClass"
            alt="img">
        </div>
        </div>
        <div class="next" @click="showSlide(slideIndex + 1)">next</div>
      </div>
     
      <nav class="slider-pagin">
          <span class="dot active" id = "1" data-active = "active" @click="showSlide(1)"></span>
          <span class="dot" id = "2" @click="showSlide(2)"></span>
          <span class="dot" id = "3" @click="showSlide(3)"></span>
      </nav>
    </div>
      <div class="wrapper">
      <div class="slider-info">
        <div class="slider-info__title">{{ this.PRODUCT.itemTitle}}</div>
        <div class="slider-info__descr">{{ this.PRODUCT.itemSubtitle }} </div>
        <div class="slider-info__price">$ {{ this.PRODUCT.itemPrice }}</div>
        <my-button 
        class="slider-info__btn" 
        @click="this.$store.dispatch('ADD_TO_CART', this.PRODUCT)"
        >Add to Cart</my-button>
      </div>
    </div>
 
</template>

<script>
import { mapGetters } from 'vuex';
export default {
 name:'slider-comp',
 data(){
  return{
      slideIndex: 1,
      product: this.PRODUCT,
      imgAnimClass: "slide-in-right"
  }
 },

 computed:{
    ...mapGetters(['PRODUCT'])
 },
 methods:{
  currentSlide(n){
    this.showSlide(n)
  },

  showSlide(slideIndex){  
    let i;
    const prev = document.querySelector('.prev')
    const slide = document.querySelector('.mySlides')
    const dots = document.getElementsByClassName('dot')
    const dotActiveId = document.querySelector('[data-active = "active"]').id;
    console.log(dotActiveId)

    const deleteImg = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(slide.remove())
      }, 300)
    })

    if (event && event.target.className === 'prev') {
      this.imgAnimClass = "slide-out-left"
      deleteImg.then(() => {
        this.imgAnimClass = "slide-in-right"
        handler()
        // prev.insertAdjacentElement('afterend', slide)
      
      }
      )
    }else if(event && event.target.className === 'next'){
      this.imgAnimClass = "slide-out-right"
      deleteImg.then(() => {
        this.imgAnimClass = "slide-in-left"
        handler()
        // prev.insertAdjacentElement('afterend', slide )
       
      }
      )
    } else{
      this.imgAnimClass = "slide-out-left"
        deleteImg.then(() => {
        this.imgAnimClass = "slide-in-right"
        handler()
      }
      )
    }
    
    const handler = ()=>{
      if(slideIndex > 3){
      this.slideIndex = 1;
    } else if (slideIndex < 1){
      this.slideIndex = 3  
    }else{
      this.slideIndex = slideIndex;
    }
    
    if(this.slideIndex !== 1 ){
      this.PRODUCT.itemImg = `catalog-img-${this.PRODUCT.id}-${this.slideIndex}.png`
    } else {
      this.PRODUCT.itemImg = `catalog-img-${this.PRODUCT.id}.png`
    }
  
    prev.insertAdjacentElement('afterend', slide)

    for(i=0;i < 3; i++){
      dots[i].className =  dots[i].className.replace('active', '')
      dots[i].removeAttribute('data-active')
    }
    
    dots[this.slideIndex - 1 ].className += ' active'
    dots[this.slideIndex - 1 ].dataset.active = 'active'
    }
   
  }
 },

 mounted(){
  // this.showSlide(1)
 }

}

</script>

<style lang="scss" scoped>
.wrapper {
  justify-content: center;
  justify-content: center;
  position: relative;
  top: -49px;
  background: white;
}

.slideshow-conteiner{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding:5rem 0 ;
  margin: 0 auto;
  background-color: #F7F7F7;
}

.mySlides{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width:100% ;
  height: 583px;
  overflow: hidden;

  .mySlides__img{
  width: 500px;
}
}

.slider-conteiner__img{
  display: flex;
  align-items: center;
}
.slider-pagin{
  text-align: center;
  margin: 2rem;
}

.prev, .next {
  cursor: pointer;
  widows: auto;
  margin-top: -22px;
  padding: 16px;
  color:$pink-color;
  font-size: 18px;
  font-weight: bold;
  transition: 0.6s ease;
  border-radius: 0 6px 6px 0;
}

.prev:hover, .next:hover{
  background-color: $pink-color;
  color:white;
}

.next{
  position: relative;
  border-radius: 0px 6px 6px 0;
}
.prev{
  left: 0;
  border-radius: 6px 0 0 6px ;
}

.text{
  color:$main-color;
  font-size: 24px;
  padding: 8px 12px;
  position: absolute;
  top:0;
}

.dot{
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: $main-color;
  display: inline-block;
  margin: 0 5px;
  transition: background-color 0.6s ease;
}

.active, .dot:hover{
  background-color: $pink-color;
}

.slide-in-right {
	-webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

          @-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
}

.slide-in-left {
	-webkit-animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;


@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}

}

.slide-out-right {
	-webkit-animation: slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
 
@-webkit-keyframes slide-out-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
}
@keyframes slide-out-right {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
}

}

.slide-out-left {
	-webkit-animation: slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: slide-out-left 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;

@-webkit-keyframes slide-out-left {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
}
@keyframes slide-out-left {
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
}

}
 
.slider-info{
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  padding: 5rem;
}
.slider-info__title {
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  color: #4D4D4D;
  padding: 2rem;
}

.slider-info__descr {
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #5E5E5E;
  padding: 2rem;
}

.slider-info__price {
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #EF5B70;
  padding: 2rem;
}

.slider-info__btn {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #F26376;
  text-transform: uppercase;
}
</style>