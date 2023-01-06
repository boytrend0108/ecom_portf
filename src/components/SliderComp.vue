<template>
  
    <div class="slideshow-conteiner">

      <div class="slider-conteiner__img">
        <div class="prev" @click="showSlide(slideIndex - 1)">prev</div>
        <div class="mySlides fade">
          <img src="@/assets/img/catalog/catalog-img-1.png" class="mySlides__img" alt="img">
        </div>
        <div class="mySlides fade">
          <img src="@/assets/img/catalog/catalog-img-2.png" class="mySlides__img" alt="img">
        </div>
        <div class="mySlides fade">
          <img src="@/assets/img/catalog/catalog-img-3.png" class="mySlides__img" alt="img">
        </div>
        <div class="next" @click="showSlide(slideIndex + 1)">next</div>
      </div>
     
      <nav class="slider-pagin">
          <span class="dot" @click="showSlide(1)"></span>
          <span class="dot" @click="showSlide(2)"></span>
          <span class="dot" @click="showSlide(3)"></span>
      </nav>
    </div>
      <div class="wrapper">
      <div class="slider-info">
        <div class="slider-info__title">MOSCHINO CHEAP AND CHIC</div>
        <div class="slider-info__descr">Compellingly actualize fully researched processes before proactive outsourcing.
          Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize
          parallel core competencies rather than exceptional portals. </div>
        <div class="slider-info__price">$561</div>
        <my-button class="slider-info__btn">Add to Cart</my-button>
      </div>
    </div>
 
</template>

<script>
export default {
 name:'slider-comp',
 data(){
  return{
      slideIndex: 1
  }
 },
 methods:{
  currentSlide(n){
    this.showSlide(n)
  },

  showSlide(slideIndex){   
    let i;
    const slides = document.getElementsByClassName('mySlides')
    const dots = document.getElementsByClassName('dot')
    
    if(slideIndex > slides.length){
      console.log('555')
      this.slideIndex = 1;
    } else if (slideIndex < 1){
      this.slideIndex = slides.length  
    }else{
      this.slideIndex = slideIndex;
    }
    
    for(i=0;i < slides.length; i++){
      slides[i].style.display = 'none'
    }
    for(i=0;i < dots.length; i++){
      dots[i].className =  dots[i].className.replace('active', '')
    }
    slides[this.slideIndex - 1 ].style.display = 'block'
    dots[this.slideIndex - 1 ].className += ' active'
  }
 },

 mounted(){
  this.showSlide(this.slideIndex)
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

.fade{
  -webkit-animation-name:fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade{
  from{opacity: 0.4;}
  to{opacity:1;}
}

@keyframes fade{
  from{opacity: 0.4;}
  to{opacity:1;}
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