<template>
    <div class="adv-box">
        <img :src="require('@/assets/img/advantage/' + item.adv__img)" alt="">
        <h2 class="adv__title">{{item.adv__title}}</h2>
        <p class="adv__descr">{{item.adv__descr}}</p>
    </div>
</template>

<script>
export default {
    props:{
        item:{
            type: Object,
            requied: true
        }
    }

}
</script>

<style lang="scss" scoped>
.adv-box {
    width: 32%;
    height: 135px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-position-x: center;
    padding-bottom: 15px;

    @media(max-width:850px){
        width: 51%;
        padding-bottom: 0px;
        margin: 20px;
    }
}
.adv__title {
    font-weight: 400;
    font-size: 19.96px;
    line-height: 24px;
    color: #FBFBFB;
    text-transform: capitalize;
    margin: 15px;
}
.adv__descr {
    font-weight: 300;
    font-size: 13.972px;
    line-height: 17px;
    text-align: center;
    color: #FBFBFB;
}
</style>
