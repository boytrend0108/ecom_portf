<template>
<h2 class="title">
    <slot></slot>
</h2>
</template>

<script>
export default {
    name:'my-title'
}
</script>

<style lang="scss" scoped>
.title {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #F16D7F;
    text-transform: uppercase;
}
</style>
