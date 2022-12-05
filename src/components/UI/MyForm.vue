<template>
<form action="#" class="cart-form">SHIPPING ADRESS
    <input type="text" class="form-input" placeholder="Your name" required v-model="formData.name">
    <input type="text" class="form-input" placeholder="Your phone" required v-model="formData.phone">
    <input type="email" class="form-input" placeholder="Your email" required v-model="formData.email">
    <my-button class="btn" type="submit" @click="sendForm ">GET A QUOTE</my-button>
</form>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            formData: {
                name: "",
                phone: "",
                email: ""
            }
        }
    },
   name: 'my-form',
   methods:{
    sendForm(event){
        // event.preventDefault();
        axios.post(`http://localhost:3000/form`, this.formData )  
    }
   }
}
</script>

<style lang="scss" scoped>
.cart-form{
    display: flex;
    flex-direction: column;
    align-items: left;

}

.form-input {
    margin: 10px 0px ;
    padding: 0 10px;
    height: 45px;
    width: 360px;
}

.btn{
    margin: 20px 6px;
}
</style>
