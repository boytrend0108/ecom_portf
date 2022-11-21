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
.subcr{
    height: 450px;
    background-image: url(@/assets/img/review/review-bgd.png);
    background-repeat: no-repeat;
    background-position: center left;
   
}
.wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;

}

</style>
