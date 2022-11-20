<template>

    <div class="category">
        <div class="categ__title"  >
            <img :src="img" alt="">
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
           img: require(`@/assets/for_men.png`)
        }
    },

    computed:{
        myStyle(){
        return {
            // backgroundImage: '@/assets/for_men.png'
        }
    }
   
    },
    methods:{
        setBackground(item){
         return this.item.category_img
       }
    }
    ,

    mounted(){
        console.log(this.item.category_img)
        console.log(this.setBackground(this.item))
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
    /* background-image: url(@/assets/img/category/for_men.png); */
    /* background-color: blue; */
    border: 1px solid rgb(233, 22, 22);
}
</style>
