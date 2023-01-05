<template>
  <div class="slideshow-conteiner">
    <div class="miSlides fade">
        <img src="@/assets/img/catalog/catalog-img-1.png" style="width: 100% " alt="">      
    </div>
    <div class="miSlides fade">
        <img src="@/assets/img/catalog/catalog-img-2.png" style="width: 100% " alt="">   
    </div>
    <div class="miSlides fade">
        <img src="@/assets/img/catalog/catalog-img-3.png" style="width: 100% " alt="">     
    </div>
    <div  class="prev" @click="showSlide(slideIndex - 1)">prev</div>
    <div  class="next" @click="showSlide(slideIndex + 1)">next</div>
  </div>

  <div class="slider_pagin">
    <span class="dot" @click="showSlide(1)"></span>
    <span class="dot" @click="showSlide(2)"></span>
    <span class="dot" @click="showSlide(3)"></span>
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
      const slides = document.getElementsByClassName('miSlides')
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
  .slideshow-conteiner{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100rem;
    position: relative;
    margin:auto;
  }

  .miSlides{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .slider_pagin{
    text-align: center;
  }

  .prev, .next {
    cursor: pointer;
    position: absolute;
    top:50%;
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
    right: 0;
    border-radius: 6px 0 0 6px ;
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
  </style>