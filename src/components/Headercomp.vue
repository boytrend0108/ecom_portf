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

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.header{
    width: 100%;
    height: 765px;
    background-color: #F1E4E6;
    
    @media(max-width:$laptop){
        height: 370px;
    }
}
.wh{
    max-width: 1140px;
    background-image: url('@/assets/img/header__img.png');
    background-repeat: no-repeat;
    background-position-x: left;
    background-position-y: bottom;

    @media(max-width:$laptop){
        background-size: contain;
        background-position-x: 100px;
    }
}

.header__title-box{
    margin-left: 59%;
    margin-bottom: 7%;
    border-left: 10px solid #F16D7F;
    padding-left: 10px;

    @media(max-width:$laptop){
        width: 310px;
        margin-bottom: 0%;
    }
}
.header__title{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 58px;
    color: #222222;
    text-transform: uppercase;

    @media(max-width:$laptop){
     font-size: 44px;
     line-height: 53px;
}
}
.header__sub{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #222222;
    text-transform: uppercase;

    @media(max-width:$laptop){
     font-size: 24px;
     line-height: 29px;
}
}
.header__sub_pink{
    color: #F16D7F;
}

</style>
