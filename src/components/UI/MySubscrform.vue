<template>
    <form action="#" class="form-subscr">
        <div>
            <h2 class="form-subscr__title">Subscribe</h2>
            <h3 class="form-subscr__sub"> FOR OUR NEWLETTER AND PROMOTION</h3>
        </div>
        <my-input></my-input>
    </form>
</template>
<script>
export default {
    name:'my-subscrform'
}
</script>

<style scoped>
.form-subscr{
width: 560px;
height: 140px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}
.form-subscr__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 167.2%;
    text-align: center;
    color: #222224;
    text-transform: uppercase;
}
.form-subscr__sub {
    font-weight: 400;
    font-size: 18px;
    line-height: 167.2%;
    text-align: center;
    color: #222224;
    text-transform: uppercase;
    margin: 0px 0 30px 0;
}
</style>
