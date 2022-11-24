<template>
    <section class="subcr">
        <div class="wrapper">
            <subscribe-review />
            <my-subscrform></my-subscrform>
        </div>
    </section>
</template>

<script>
import SubscribeReview from '@/components/SubscribeReview.vue';
export default {
    components:{
        SubscribeReview
    }

}
</script>

<style scoped>
@import '@/assets/styles/variables.scss';
.subcr{
    height: 450px;
    background-image: url(@/assets/img/review/review-bgd.png);
    background-repeat: no-repeat;
    background-position: center left;
    background-size: cover;
   
}
.wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

}

</style>
