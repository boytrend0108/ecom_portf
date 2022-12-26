<template>
    <h2 class="title focus-in-expand">
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
.focus-in-expand {
	-webkit-animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
@-webkit-keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}

}
</style>
