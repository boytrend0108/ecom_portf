<template>
  <div class="wrapper">

    <form 
    class="form"
    @submit="subminHandler"
    >
    <span class="p-float-label">
	      <InputText 
          id="email" 
          v-model.trim="loginEmail"
          class="input"
          @input="validator"
       />
	      <label class="lable" for="email">email</label>
      </span>
      <p>eur-usd@bk.ru </p>
      <p>Admin: boytrend@gmail.com</p>
      <span class="p-float-label">
	      <InputText 
          id="password" 
          v-model.trim="loginPassword"
          class="input"
          @input="validator"
        />
	      <label class="lable" for="password">Password</label>
      </span>
      <p>ssfsH5_f</p>
      <p>Admin Admin_2023 </p>
      <Button 
          label="SIGN IN" 
          icon="pi pi-user" 
          iconPos="right" 
          class="p-button-secondary disabled"
          disabled
          @click="subminHandler" 
      />
      <div class="reg-bnt_wr">
        <p :style="{'fontSize':'1.5rem'}">No Account ?</p>
        <button @click="goToRegistrationPage" class="bnt-reg">
          <span class="reg-span">REGISTRATION</span>
        </button>
      </div>
    </form>
  </div>
   
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'
import messages from '@/utils/messages';
export default {
  components: { MyButton },
  name:"login",
  data(){
    return{
      loginEmail:'',
      loginPassword:'',
      reg_email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i,
      reg_password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,15}$/
    }
  },

  methods: {
    validator(){
      const btn = document.querySelector('.p-button-secondary');
      if(this.reg_email.test(this.loginEmail)){
        document.getElementById("email").style.border = '3px solid green'
      }else{
        document.getElementById("email").style.border = '3px solid red'
      }
    
      if(this.reg_password.test(this.loginPassword)){
        document.getElementById("password").style.border = '3px solid green'
      }else{
        document.getElementById("password").style.border = '3px solid red'
      }

      if(this.reg_email.test(this.loginEmail) &&
      this.reg_password.test(this.loginPassword) === true
      ){
       btn.classList.remove('disabled');
       btn.removeAttribute('disabled')
      }
    },

    async showInfo() {
            this.$toast.add({severity:'success', summary: 'Well done!', detail:'Your registration is complete', });
        },

    async subminHandler(event) {
      event.preventDefault();
      const formData = {
        loginEmail: this.loginEmail,
        loginPassword: this.loginPassword
      }
      
      try {
        if (formData.loginEmail === "boytrend@gmail.com" 
            && formData.loginPassword === "Admin_2023") {
          await this.$store.dispatch('login', formData)
          this.$router.push('/admin?message=admin')
          localStorage.setItem("isAdmin", "true")
          this.$store.commit('SET_IS_ADMIN')
        } else {
          await this.$store.dispatch('login', formData)
          this.$router.push('/')
        }
      } catch (err) {
        console.log(err)
       }
      
    },
    goToRegistrationPage(event){
      event.preventDefault();
      this.$router.push('/registration');
    }
  },

  mounted(){
    const queryMessage = messages[this.$route.query.message]
      if (messages[this.$route.query.message]){ // if route contain message 'logout'
        this.$message(queryMessage.summary, queryMessage.details)// show message
      }
  }
}
</script>

<style lang="scss" scoped >
p {
  font-size: 1.1rem;
  color: white;
}
.wrapper {
  display: flex ; 
  align-items: center;
  justify-content: center;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: white;
  margin: 0 11px;
}

.p-button-secondary {
  background-color: aliceblue;
  color: gray;
  width: 30rem;
  margin: 10px 0;
  height: 4rem;
  font-size: 1.5rem;
  @media(max-width:$media-phoneS){
    width: 27rem;
  }
}

::v-deep(.p-button-secondary){
 .p-button-icon-right {
    font-size: 2rem;
}
}

.form {
  top: 218px;
  right: 235px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  max-width: 300px;
  height: auto;
  padding: 20px;
  @include box-shadow;
}

.input {
  width: 300px;
  height: 40px;
  outline: none;
  margin: 10px;
  padding: 0 10px;
  font-size: 2rem;
}

.btnSignup {
  margin: 16px;
  text-transform: uppercase;
}

.disabled {
  @include disabled(grey);
  color: aliceblue;
}

.lable {
  padding: 0 10px;
  font-size: 2rem;
}

.p-float-label label {
  position: absolute;
  pointer-events: none;
  top: 38%;
  margin-top: -0.5rem;
  transition-property: all;
  transition-timing-function: ease;
  line-height: 1;
}

.bnt-reg {
  font-size: 1.5rem;
}

.reg-bnt_wr {
  width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;

  .reg-span:hover {
    text-shadow: red 2px 0 10px;
    color: rgba(14, 12, 12, 0.808)
  }
}
.p-inputtext{
  max-width: 270px !important;
}
    
</style>
