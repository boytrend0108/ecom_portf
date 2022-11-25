<template>
    <footer class="footer">
        <div class="wrapper">
            <p class="rights"> © 2021 Brand all rights reserved.</p>
            <iconbox-comp />
        </div>
    </footer>
</template>

<script>
import IconboxComp from '@/components/IconboxComp.vue';
export default {
    components:{
        IconboxComp
    }

}
</script>

<style lang="scss" scoped>
.footer{
    // height: 80px;
    background: #222224;
}
.wrapper {
    padding-top: 20px;
    padding-bottom: 20px;

    @media (max-width:$media-phone) {
        display: flex;
        flex-direction: column-reverse;
        min-height: fit-content;
    }
}
.rights {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FBFBFB;
    text-transform: capitalize;
}
</style>
