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
.header{
    width: 100%;
    height: 765px;
    background-color: #F1E4E6;

    @media(max-width: $media-tablet){
        height: 370px;
    }
    @media(max-width: 520px){
        height: 270px;
    }
}
.wh {
    max-width: $wrapper-laptop;
    background-image: url('@/assets/img/header__img.png');
    background-repeat: no-repeat;
    background-position-x: left;
    background-position-y: bottom;

    @media(max-width: $media-tablet) {
        background-size: contain;
        background-position-x: 94px;
    }

    @media(max-width: $media-phone) {
        background-image: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media(max-width: 660px){
        background-position-x: 20px;
    }
}
.header__title-box {
    margin-left: 59%;
    margin-bottom: 7%;
    border-left: 10px solid #F16D7F;
    padding-left: 10px;

    @media(max-width: $media-tablet) {
        margin-left: 55%;
        margin-bottom: 0%;
    }
    @media(max-width: 660px) {
        margin-left: 40%;
    }
    @media(max-width: 560px) {
        margin-left: 45%;
    }
    
    @media(max-width: $media-phone) {
        margin-left: 0;
        margin-bottom: 0;
    }

  
}
.header__title {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 58px;
    color: #222222;
    text-transform: uppercase;
    margin: 0;

    @media(max-width: $media-tablet) {
        font-size: 44px;
        line-height: 53px;
    }

    @media(max-width: $media-phone) {
        font-size: 38px;
        line-height: 46px;
    }

    @media(max-width: 560px) {
        font-size: 30px;
        line-height: 46px;
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

    @media(max-width: $media-tablet) {
        font-size: 24px;
    }
    @media(max-width: 560px) {
        font-size: 20px;
    }
    @media(max-width: 520px) {
        line-height: 24px;
    }
    @media(max-width: $media-phone) {
        font-size: 20px;
        line-height: 24px;
    }
   
}
.header__sub_pink{
    color: #F16D7F;
}
</style>
