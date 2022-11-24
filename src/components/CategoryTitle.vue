<template>
    <div>
        <div class="categ__title">
            <h3 class="cat__title_sub">{{ item.category_desc }}</h3>
            <h2 class="cat__title">{{ item.category_title }}</h2>
        </div>
    </div>
   
</template>

<script>
export default {
    props:{
        item:
           { type: Object,
           required: true
        }
    }
}
</script>

<style scoped>
@import '@/assets/styles/variables.scss';
.categ__title{
    width: fit-content;
    height: 50px;
}

.cat__title_sub {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #FFFFFF;
}
.cat__title {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #F16D7F;
}

</style>
