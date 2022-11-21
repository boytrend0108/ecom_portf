<template>
    <div class="category" :style="{ backgroundImage: 'url(' + this.item.category_img  + ')' }">
        <div class="categ__title" >    
            <h3>{{item.category_desc}}</h3>
            <h2>{{item.category_title}}</h2>
        </div>
    </div>
   
</template>

<script>

export default {
    
    props:{
        item:{
            type: Object,
            required: true
        }
    },

    data(){
        return{  
           
        }
    },

    mounted(){
        
    }
}

</script>

<style scoped>
.category{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 260px;
    width: 350px;
    margin-top: 65px;
    margin-bottom: 30px;
  
  
}
</style>
