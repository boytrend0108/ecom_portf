<template>
   <nav class="navbar">
    <div class="wrapper">
        <div class="nav-block">left</div>
       <div class="nav-block">right</div>
    </div>
       
   </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
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
   border: 1px solid rgb(185, 17, 17);;
}
.nav-block{
background-color: aliceblue;
}
</style>
