<template>
  <nav class="path">
    <p class="path_item" @click="this.$router.push('/')">Home</p>
    <p class="path_item active">{{pageName}}</p>
  </nav>
</template>

<script>
export default {
   name:'my-path',

   computed:{ 
    pageName(){
      switch(this.$route.path){
          case "/cart": return "User Cart"
          case "/catalog": return "Catalog"
          default: return ''
      }
    }
   }
}
</script>

<style lang="scss" scoped>
.path{
  display: flex;
}
.path_item {
  font-weight: 300;
  font-size: 2rem;
  line-height: 3rem;
  color: #636363;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.5s;
}

.path_item:hover {
 color: $pink-color;
 font-weight: 700;
}
.active {
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  color: $pink-color;
  text-transform: uppercase;
  cursor: default;
}
.active::after{
  display: none;
}

.path_item::after {
  content: "/";
  margin-right: 0.5rem;
  color: #636363;
}

.blink-1 {
	-webkit-animation: blink-1 0.6s both;
	        animation: blink-1 0.6s both;
}

@-webkit-keyframes blink-1 {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}
@keyframes blink-1 {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}

</style>