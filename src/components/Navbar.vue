<template>
   <nav class="navbar">
    <div class="wrapper">
        <div class="nav-block">
            <img class="logo " @click="$router.push(`/`)" src="@/assets/img/logo.png" alt="">
            <font-awesome-icon  class="font-aw" icon="fa-solid fa-magnifying-glass" />
        </div>
       <div class="nav-block">
        <font-awesome-icon  class="font-aw " icon="fa-solid fa-bars" />
        <font-awesome-icon  class="font-aw " icon="fa-regular fa-user" />  
        <font-awesome-icon @click="$router.push(`/cart`)" class="font-aw " icon="fa-solid fa-cart-shopping" />
       </div>
    </div>
       
   </nav>
</template>

<script>
export default {

}
</script>

<style>
.navbar{
    background: #222222;
    height: 70px;
    width: 100%;
}
.wrapper{
   height: 100%;
   max-width: 1140px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 0 auto;
  
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

.logo{
    cursor: pointer;
    transition: 0.5s;
}
.logo:hover{
    transform: scale(1.3);
}
</style>
