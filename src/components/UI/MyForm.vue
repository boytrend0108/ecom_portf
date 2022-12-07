<template>
<form id="formId" action="#" class="cart-form">SHIPPING ADRESS
    <input 
    type="text" 
    class="form-input" 
    placeholder="Your name"  
    v-model="formData.name"
    @input="validator"
    required>
    <input type="text" class="form-input" placeholder="Your phone"  v-model="formData.phone" required>
    <input type="email" class="form-input" placeholder="Your email"  v-model="formData.email" required>
    <my-button class="btn form-btn2" type="submit" @click="sendForm ">Send an order</my-button>
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
            },
            reg:{
                name: new RegExp("^[a-zа-яё]+$"),  // Имя содержит только буквы.
                phone: new RegExp(/^\+7\(\d{3}\)\d{3}-\d{4}$/),
                email: new RegExp(/^[\w._-]+@\w+\.[a-z]{2,4}$/i) // E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru // Телефон имеет вид +7(000)000-0000.
            },
            errors:{
                name:'Введите имя правильно',
                phone:'Телефон подчиняется шаблону +7(000)000-0000',
                email: 'E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru'
            }

        }
    },
   
    computed:{
        ...mapGetters([
            'USER_CART','NOTIF_MDG'
        ])
    },

    methods: {
        ...mapActions([
            "CLEAR_CART","GET_SHOW_NOTIF",'GET_BTN_DISABLED','A_CHANGE_NOTIF_MDG'
        ]),

        validator() {
            console.log(this.formData.name)
            if (this.reg.name.test(this.formData.name)) {
              console.log('true')
            } else if
                (this.reg.phone.test(this.phone)) {
                    console.log('false')
            } else if
                (this.reg.email.test(this.email)) {
                    console.log('false')
            } else {
                console.log('false')
            }

        },

        async sendForm(event) {
            if (this.validator()) {
                event.preventDefault();
                this.formData.cartItem = this.USER_CART;
                await axios.post(`http://localhost:3000/form`, this.formData)
                    .catch((err) => { alert("Data don't send") })
                await this.CLEAR_CART();
                this.GET_SHOW_NOTIF();
                this.GET_BTN_DISABLED()
                this.formData.name = '';
                this.formData.phone = '';
                this.formData.email = '';
            } return
        }
    },

    mounted(){
   
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

.disabled{
    cursor: not-allowed !important;
    background-color: gray !important;
    border: none !important;
    color: aliceblue !important;
}
</style>
