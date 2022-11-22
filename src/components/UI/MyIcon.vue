<template>

    <div class="icon">
      <font-awesome-icon :icon="item.icon" class="i-logo"/>
    </div>

</template>

<script>
export default {
    name: "my-icon",
    props:{
        item:{
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.icon{
    width: 30px;
    height: 30px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    cursor: pointer;
    border-radius: 5px;
}
.icon:hover{
    background-color: #F16D7F;
    transform: scale(1.1);
    color: white;
}

</style>
