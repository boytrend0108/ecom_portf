<template>
    <nav class="navbar">
        <div class="wrapper">
            <div class="nav-block">
                <img class="logo " @click="$router.push(`/`)" src="@/assets/img/logo.png" alt="">
                <font-awesome-icon class="font-aw" icon="fa-solid fa-magnifying-glass" />
            </div>
            <div class="nav-block">
                <font-awesome-icon class="font-aw " icon="fa-solid fa-bars" @click="SWITCH_SHOW_MENU" />
                <font-awesome-icon v-show="isMobile" class="font-aw " icon="fa-regular fa-user" />
                <div class="icon-cart-wr">
                    <font-awesome-icon v-show="isMobile" @click="$router.push(`/cart`)" class="font-aw"
                        icon="fa-solid fa-cart-shopping" />
                    <span class="item-num">5</span>
                </div>
                <!-- <my-menu v-show="IS_SHOW_MENU" class="menu" :class="SLIDE_MENU"></my-menu> -->
                <my-menu  class="menu" :class="SLIDE_MENU"></my-menu>
            </div> 
        </div>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    props: {
        isMobile: {
            type: Boolean,
            default: true,
            required: true
        }
    },
    data(){
        return{
          
        }
    },
    computed: {
        ...mapGetters([
            "IS_SHOW_MENU", "SLIDE_MENU"
        ])
    },
    methods:{
        ...mapActions([
            "SWITCH_SHOW_MENU"
        ])
    }
}
</script >

<style lang="scss" scoped>
.navbar{
    background: #222222;
    height: 70px;
    width: 100%;
}
.nav-block{
    display:flex;
    justify-content: space-between;
    align-items: center;

}
.font-aw{
    color: white;
    height: 25px;
    width: 25px;
    margin-left: 35px;
    cursor: pointer;
    transition: 0.5s;
}
.font-aw:hover{
    color: #F16D7F;
    transform: scale(1.3);  
}

.icon-cart-wr{
   position: relative;
   cursor: pointer;
}
.icon-cart-wr:hover{
    .item-num{
    color: #F16D7F;
    background-color: white;
    transform: scale(1.3);
    .fa-cart-shopping{
        color: #F16D7F;
        transform: scale(1.3);
    }
}
}
.item-num{
    background-color: #f16d7f;
    border-radius: 50%;
    width: 17px;
    height: 17px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    position: absolute;
    left: 50px;
    bottom: 17px;
    transition: 0.5s;
}
.logo{
    cursor: pointer;
    transition: 0.5s;
}
.logo:hover{
    transform: scale(1.3);
}
.menu{
    position: absolute;
    top: 70px;
    right: -40px;
    display: none;
}
.slide-left {
	-webkit-animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

//  @-webkit-keyframes slide-left {
//   0% {
//     -webkit-transform: translateX(0);
//             transform: translateX(0);
//   }
//   100% {
//     -webkit-transform: translateX(-100px);
//             transform: translateX(-100px);
//   }
// }
@keyframes slide-left {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
  }
}

.scale-out-ver-top {
	-webkit-animation: scale-out-ver-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	        animation: scale-out-ver-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

// @-webkit-keyframes scale-out-ver-top {
//   0% {
//     -webkit-transform: scaleY(1);
//             transform: scaleY(1);
//     -webkit-transform-origin: 100% 0%;
//             transform-origin: 100% 0%;
//     opacity: 1;
//   }
//   100% {
//     -webkit-transform: scaleY(0);
//             transform: scaleY(0);
//     -webkit-transform-origin: 100% 0%;
//             transform-origin: 100% 0%;
//     opacity: 1;
//   }
// }
@keyframes scale-out-ver-top {
0% {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
        -webkit-transform-origin: 100% 0%;
        transform-origin: 100% 0%;
        opacity: 1;
    }
  100% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
}
</style>
