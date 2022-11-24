<template>
    <div class="icon-box">
        <my-icon v-for="item in icons" :key="item.id" :item="item"/>
    </div>

</template>

<script>
export default {

    data() {
        return {
            icons: [
                { id: 1, name: "instagram", icon: ' fa-brands fa-instagram ' },
                { id: 1, name: "instagram", icon: 'fa-brands fa-facebook-f' },
                { id: 1, name: "instagram", icon: 'fa-brands fa-pinterest-p' },
                { id: 1, name: "instagram", icon: 'fa-brands fa-twitter' }
            ]
        }
    }
}
</script>

<style scoped>
@import '@/assets/styles/variables.scss';
.icon-box{
    width: 150px;
    display: flex;
    gap:10px;

}

</style>
