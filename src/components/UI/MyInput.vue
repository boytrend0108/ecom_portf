<template>
  <div class="input-wrap">
    <input type="text" class="form-sub__inp" placeholder="Enter Your Email">
    <my-button class="form-btn">Subscribe</my-button>
  </div>
</template>

<script>
export default {
  name: 'my-input'
}
</script>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.form-sub__inp {
  width: 256px;
  height: 52px;
  background: #E1E1E1;
  border-bottom-left-radius: 21px;
  border-top-left-radius: 21px;
  border: none;
  outline: none;
  padding: 0 15px;
  font-size: 20px;

  @media(max-width:$media-phoneS) {
    width: 180px;
  }
}

.form-btn {
  width: 100px;
  background-color: #F16D7F;
  color: white;
  border-bottom-right-radius: 21px;
  border-top-right-radius: 21px;
  border: none;
}

.form-btn:hover {
  color: #F16D7F;
  background-color: #E1E1E1;
  border-left-color: none;
}
</style>
