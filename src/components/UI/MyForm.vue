<template>
<form action="#" class="cart-form">SHIPPING ADRESS
    <input type="text" class="form-input" placeholder="Your name" required v-model="formData.name">
    <input type="text" class="form-input" placeholder="Your phone" required v-model="formData.phone">
    <input type="email" class="form-input" placeholder="Your email" required v-model="formData.email">
    <my-button class="btn" type="submit" @click="sendForm ">Send an order</my-button>
</form>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'my-form',
    data(){
        return {
            formData: {
                name: "",
                phone: "",
                email: ""
            }
        }
    },
   
    computed:{
        ...mapGetters([
            'USER_CART'
        ])
    },

   methods:{
    ...mapActions([
    ]),

   async sendForm(event){
   event.preventDefault();
       console.log(this.USER_CART)
       this.formData.cartItem = this.USER_CART;
      await axios.post(`http://localhost:3000/form`, this.formData )
      .catch((err)=>{alert("Data don't send")})  
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
    text-transform: uppercase;
}
</style>
