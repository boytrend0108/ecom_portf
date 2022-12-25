<template>
<form 
  id="form-subs" 
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
import { getDatabase, ref, onValue } from "firebase/database";
const database = getDatabase();
export default {
  name: 'my-form',
  data() {
    return {
      formData: {
        name: "",
        phone: "",
        email: ""
      },
      reg: {
        name: /^[a-zа-яё]+$/i,
        phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
        email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i
      },
      order: ''
    }
  },

  computed: {
    ...mapGetters([
      'USER_CART', 'NOTIF_MDG', 'ORDER_NUM'
    ]),

    orderNum() {
      return this.$store.getters.ORDER_NUM
    }
  },

  methods: {
    ...mapActions([
      "CLEAR_CART", "GET_SHOW_NOTIF", 'GET_BTN_DISABLED',
      'A_CHANGE_NOTIF_MDG', 'A_RESET_INPUT_COLOR', 'CHANGE_ORDER_NUM',
      'SEND_ORDER_TO_FIREBASE'
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

        if (this.USER_CART.length > 0) {
          document.querySelector(".form-btn2").removeAttribute("disabled", "disabled")
          document.querySelector(".form-btn2").classList.remove("disabled");
          document.querySelector(".form-btn2").textContent = "Send an order";
        } else {
          document.querySelector(".form-btn2").textContent = "Cart is empty"
        }
        return true
      }
      document.querySelector('.form-btn2').setAttribute("disabled", "disabled")
      document.querySelector(".form-btn2").classList.add("disabled");
      document.querySelector(".form-btn2").textContent = "Invalide input";
      return false
    },

    async getOrderNum() {
      try {
        onValue(ref(database, '/orderNum/'), (snapshot) => {
          const orderNum = snapshot.val();
          this.order = orderNum;
        }, {
          onlyOnce: true
        })
      } catch (e) {
        console.log(e)
      }
    },

    createData() {
      return {
        order: `Заказ номер ${this.order}`,
        name: this.formData.name,
        phone: this.formData.phone,
        email: this.formData.email,
        project_name: 'digital-boys.com',
        admin_email: 'eur-usd@bk.ru',
        form_subject: 'Заявка c сайта digital-boys.com'
      }
    },

    async sendForm() {
      const thisComp = this;// add this to have access to CLEAR_CATR and other fn..
      // to define form we can use classes, for exp-l await$('.my-form')
      const data = this.createData();
      await $("#form-subs").submit(function () { //Change
        var th = $(this); // this - it is form
        $.ajax({
          type: "POST",
          url: "mailer/mail.php", //Change
          data: data
        }).done(function () {
          // alert("Thank you!");
          setTimeout(function () {
            // Done Functions
            thisComp.SEND_ORDER_TO_FIREBASE([thisComp.formData.email, thisComp.formData.phone])
            thisComp.CHANGE_ORDER_NUM();
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

  async mounted() {
    this.getOrderNum()
  }
}
</script>

<style lang="scss" scoped>
.cart-form{
    display: flex;
    flex-direction: column;
    align-items: left;
    font-size: 2.2rem;
}

.form-input {
   margin: 1rem 0px;
    padding: 0 1rem;
    height: 4rem;
    width: 36rem;
    outline: none;
    font-size: 1.5rem;
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
    color: $pink-color;
    font-size: 1.5rem;
}
</style>
