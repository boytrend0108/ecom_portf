<template>
<div class="item">
    <div class="item__img" alt="img"
    :style="{backgroundImage: 'url(' + this.item.itemImg + ')'}"></div>
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

<style scoped>
.item{
    width: 360px;
    height: 580px;
    background: #F8F8F8;
}
.item__img{
    height: 420px;
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
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #F16D7F;
}
</style>
