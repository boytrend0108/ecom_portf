<template>
  <div class="header">
    <div class="wrapper">
      <my-title><slot></slot> </my-title>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.header{
    width: 100%;
    height: 150px;
    background-color: #F8F3F4;
}

.wrapper{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>