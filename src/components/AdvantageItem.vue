<template>
    <div class="adv-box">
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

<style scoped>
.adv-box {
    width: 32%;
    height: 135px;
    border: 1px solid rgb(216, 202, 202);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end
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
