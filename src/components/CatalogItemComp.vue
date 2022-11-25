<template>
<div class="item">
    <div class="item__img">
        <img  class="img" :src="require('@/assets/img/catalog/' + item.itemImg)" alt="img">
    </div>
    <h2 class="item-title">{{ item.itemTitle }}</h2>
    <p class="item-sub">{{ item.itemSubtitle }}</p>
    <p class="item-price"> $ {{ item.itemPrice }}</p>
</div>

</template>

<script>
export default {
    props:{
        item:{
            type: Object,
            requiren: true
        }
    }

}
</script>

<style lang="scss" scoped>
.item {
    max-width: 328px;
    max-height: 580px;
    background: #F8F8F8;
    border-radius: 15px;

    @media(max-width: $media-laptop) {
        max-width: 300px;
        max-height: 540px;
    }
}
.item__img{
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
.img{
    max-width: 100%;
    object-fit: cover;
}
.item-title {
    margin: 25px 20px 0px 20px;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #000000;
}
.item-sub{
    padding: 15px 20px;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #5D5D5D;
}
.item-price{
    padding-left: 20px;
    padding-bottom: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #F16D7F;
}
</style>
