<template>
    <button class="my_bnt btn-transf"  ref="subs">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
    
}
</script>

<style lang="scss" scoped>
.my_bnt {
    width: 210px;
    height: 50px;
    border: 1px solid #FF6A6A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    cursor: pointer;
    transition: 0.5s;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #F26376;
    background-color: white ;
}
.my_bnt:hover{
    background: linear-gradient(90deg, $main-color, $pink-color);
    color: white;
    transform: scale(1.05);
}
</style>
