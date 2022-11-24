<template>
    <article class="review">
        <p class="review__descr">
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“
        </p>
    </article>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.review {
    width: 360px;
    height: 227px;
    display: flex;
    align-items: flex-end;
    background-image: url(@/assets/img/review/review__img.png);
    background-repeat: no-repeat;
    background-position-x: center;

    @media(max-width: $media-tablet) {
        margin-bottom: 20px;
    }
}
.review__descr {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #222224;
    padding-bottom: 30px;
}
</style>
