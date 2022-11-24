<template>
    <section class="subcr">
        <div class="wrapper  wr-subscr ">
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

<style lang="scss" scoped>
.subcr{
    min-height: 450px;
    background-image: url(@/assets/img/review/review-bgd.png);
    background-repeat: no-repeat;
    background-position: center left;
    background-size: cover;
    display: flex;
    align-items: center;
    @media(max-width:$media-tablet){
      
      
    }
}
.wr-subscr {
    width: 100%;
    @media(max-width: $media-tablet) {
        flex-direction: column;
        justify-content: center;
    }
}
</style>
