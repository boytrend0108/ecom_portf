<template>
   <nav class="navbar">
    <div class="wrapper">
        <div class="nav-block">
            <img class="logo " @click="$router.push(`/`)" src="@/assets/img/logo.png" alt="">
            <font-awesome-icon  class="font-aw" icon="fa-solid fa-magnifying-glass" />
        </div>
       <div class="nav-block">
        <font-awesome-icon  class="font-aw " icon="fa-solid fa-bars" />
        <font-awesome-icon v-show="isMobile" class="font-aw " icon="fa-regular fa-user" />  
        <div class="icon-cart-wr">
           <font-awesome-icon v-show="isMobile" @click="$router.push(`/cart`)" class="font-aw" icon="fa-solid fa-cart-shopping"/>
          <span class="item-num">5</span>
        </div>
       
       </div>
    </div>
   </nav>
</template>

<script>
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
</style>
