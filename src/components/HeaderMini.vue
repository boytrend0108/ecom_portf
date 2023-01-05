<template>
  <div class="header">
    <div class="wrapper">
      <my-title><slot></slot></my-title>
      <my-path class="header_path"><slot></slot></my-path>
    </div>
  </div>
</template>

<script>
import MyPath from './UI/MyPath.vue'
export default {
  components: { MyPath },

}
</script>

<style lang="scss" scoped>

.header{
    width: 100%;
    height: 150px;
    background-color: #F8F3F4;
}

.wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: $media-phoneS){
      flex-direction: column;
      justify-content: center;
    }
}



</style>