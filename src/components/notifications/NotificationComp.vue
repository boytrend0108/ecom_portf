<template>
    <div class="notification">
        <div 
          class="notif-content" 
          v-for="message in messages" 
          :key="message.id"
        >
            <div class="notif-text">
                <span>Notification-name</span>
                <i class="icon">check-circle</i>
            </div>
            <div class="notif-btn">
                <button>Ok</button>
                <button>No</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'notification-comp',
    props:{
        messages:{
            type: Array,
            default:()=>{
                return []
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.notification{
    position: fixed;
    top:355px;
    right: 16px;
    z-index: 10;
    .notif-content{
        padding: 16px;
        border-radius: 4px;
        color: width;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 150px;
        width: 382px;
        background-color: aqua;
        margin-bottom: 16px;
    }
}

</style>
