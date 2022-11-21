<template>
<form action="#" class="form-subscr">
    <h2 class="form-subscr__title">Subscribe</h2>
    <h3 class="form-subscr__sub">SUBSCRIBE FOR OUR NEWLETTER AND PROMOTION</h3>
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
border: 1px solid #000;
display: flex;
flex-direction: column;
align-items: center;
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
}




</style>
