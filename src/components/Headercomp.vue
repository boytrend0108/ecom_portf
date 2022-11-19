<template>
    <div class="header">
        <div class="wrapper wh">
            <div class="header__title-box">
                <h1 class="header__title">The brand</h1>
                <h2 class="header__sub">OF LUXERIOUS <span class="header__sub_pink">FASHION</span></h2>
            </div>
           
        </div>
    
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>

.header{
    width: 100%;
    height: 765px;
    background-color: #F1E4E6;
    /* background-image: url('@/assets/header__img.png') ; */
}
.wh{
    background-image: url('@/assets/header__img.png');
    background-repeat: no-repeat;
    background-position-x: left;
    background-position-y: bottom;
}

.header__title-box{
    margin-left: 59%;
    margin-bottom: 7%;
    border-left: 10px solid #F16D7F;
    padding-left: 10px;
}
.header__title{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 58px;
    color: #222222;
    text-transform: uppercase;
}
.header__sub{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #222222;
    text-transform: uppercase;
}
.header__sub_pink{
    color: #F16D7F;
}



</style>
