<template>
    <div class="hidden">
        <div class="notification">
            <font-awesome-icon icon="fa-regular fa-circle-xmark" @click="HIDE_SHOW_NOTIF" />
            <h2 class="notif-title">Order had been sent</h2>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name:'notification-comp',
    data(){
        return{
           
        }
    },

   computed:{
       ...mapGetters([
        'NOTIF_MSG'
       ])
   },

   methods:{
    ...mapActions([
       "HIDE_SHOW_NOTIF"
    ])
   }
}
</script>

<style lang="scss" scoped>
.notification {
    // display: none;
    position: absolute;
    top: 228px;
    right: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    height: 176px;
    width: 362px;
    background-color: #F16D7F;
    .notif-title {
        color: white;
    }
        .fa-circle-xmark {
            position: relative;
            top: -64px;
            right: -260px;
            font-size: 30px;
            cursor: pointer;
            color: white;
        }
}

.hidden{
    display: none;
}

.scale-in-center {
	-webkit-animation: scale-in-center 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: scale-in-center 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

@-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}

}
.slide-out-elliptic-top-bck {
	-webkit-animation: slide-out-elliptic-top-bck 0.7s ease-in both;
	        animation: slide-out-elliptic-top-bck 0.7s ease-in both;

@-webkit-keyframes slide-out-elliptic-top-bck {
  0% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 1;
  }
}
@keyframes slide-out-elliptic-top-bck {
  0% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 1;
  }
}

}
</style>
