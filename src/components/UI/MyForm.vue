<template>
<form 
  id="form" 
  method="POST"
  class="cart-form">SHIPPING ADRESS

         <!-- Hidden Required Fields -->
        <input type="hidden" name="project_name" value="digital-boys.com">
		<input type="hidden" name="admin_email" value="eur-usd@bk.ru">
		<input type="hidden" name="form_subject" value="Заявка c сайта digital-boys.com">

    <input 
    id="name"
    name="name"
    type="text" 
    class="form-input" 
    placeholder="Your name"  
    v-model="formData.name"
    @input="validator"
    required>
    <p class="lable">Only letters</p>
    <input 
    id="phone"
    name="phone"
    type="text" 
    class="form-input" 
    placeholder="Your phone"  
    v-model="formData.phone" 
    required
    @input="validator"
    >
    <p class="lable">+7(000)000-0000</p>
    <input 
    id="email"
    name="email"
    type="email" 
    class="form-input" 
    placeholder="Your email"  
    v-model="formData.email" 
    required
    @input="validator"
    >
    <p class="lable">mymail@mail.ru</p>
    <my-button 
    class="btn form-btn2" 
    @click="sendForm"
    >Send an order</my-button>
</form>

</template>

<script>
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
                name: /^[a-zа-яё]+$/i,
                phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
                email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i 
            },
        }
    },
   
    computed:{
        ...mapGetters([
            'USER_CART','NOTIF_MDG'
        ])
    },

    methods: {
        ...mapActions([
            "CLEAR_CART", "GET_SHOW_NOTIF", 'GET_BTN_DISABLED',
            'A_CHANGE_NOTIF_MDG', 'A_RESET_INPUT_COLOR'
        ]),

        validator() {
            if (this.reg.name.test(this.formData.name)) {
                document.querySelector("#name").style.border = '3px solid green'
            } else {
                document.querySelector("#name").style.border = '3px solid #FF6A6A'
            };

            if (this.reg.phone.test(this.formData.phone)) {
                document.querySelector("#phone").style.border = '3px solid green'
            } else {
                document.querySelector("#phone").style.border = '3px solid #FF6A6A'
            };

            if (this.reg.email.test(this.formData.email)) {
                document.querySelector("#email").style.border = '3px solid green'
            } else {
                document.querySelector("#email").style.border = '3px solid #FF6A6A'
            }

            if (this.reg.name.test(this.formData.name) &&
                this.reg.phone.test(this.formData.phone) &&
                this.reg.email.test(this.formData.email) === true) {
                console.log("Form is valide")
                if (this.USER_CART.length > 0) {
                    document.querySelector(".form-btn2").removeAttribute("disabled", "disabled")
                    document.querySelector(".form-btn2").classList.remove("disabled");
                    document.querySelector(".form-btn2").textContent = "Send an order";
                } else {
                    document.querySelector(".form-btn2").textContent = "Cart is empty"
                }
                return true
            } console.log('form is ivalide')
            document.querySelector('.form-btn2').setAttribute("disabled", "disabled")
            document.querySelector(".form-btn2").classList.add("disabled");
            document.querySelector(".form-btn2").textContent = "Invalide input";
            return false
        },

        async sendForm() {
            const thisComp = this;// add this to have access to CLEAR_CATR and other fn..
            // to define form we can use classes, for exp-l await$('.my-form')
            await $("form").submit(function () { //Change
                var th = $(this); // this - it is form
                console.log(this)
                $.ajax({
                    type: "POST",
                    url: "mailer/mail.php", //Change
                    data: th.serialize()
                }).done(function () {
                    // alert("Thank you!");
                    setTimeout(function () {
                        // Done Functions
                        thisComp.CLEAR_CART();
                        thisComp.GET_SHOW_NOTIF();
                        thisComp.GET_BTN_DISABLED();
                        thisComp.A_RESET_INPUT_COLOR();
                        th.trigger("reset");
                    }, 1000);
                });
                return false;
            });
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
    outline:none;
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
.lable{
    color: gray;
}
</style>
