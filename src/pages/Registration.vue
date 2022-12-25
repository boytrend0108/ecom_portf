<template>
  <div class="wrapper">
    <form  class="form">
      <span class="p-float-label">
	      <InputText 
          id="email" 
          v-model="loginEmail"
          class="input"
          @input="inputValidator"
       />
	      <label class="lable" for="email">email</label>
      </span>
      <p>mymail@mail.ru</p>

      <span class="p-float-label">
	      <InputText 
          id="password" 
          v-model="loginPassword"
          class="input"
          @input="inputValidator"
        />
	      <label class="lable" for="password">Password</label>
      </span>
      <p>ssfsH5_f</p>

      <span class="p-float-label">
	      <InputText 
          id="name" 
          v-model="loginName"
          class="input"
          @input="inputValidator"
        />
	      <label class="lable" for="name">Name</label>
      </span>

      <div class="reg-checkbox" >
        <label for="regId" 
        :style="{'fontSize':'1.5rem','color':'white'}"
        >Agree with terms</label>
        <Checkbox 
          v-model="checked" 
          :binary="true" 
          inputId="regId"
          @click="termsValidator"
        />
      </div>
     
        <Button 
          label="REGISTER" 
          icon="pi pi-user" 
          iconPos="right" 
          class="p-button-secondary disabled"
          disabled
          @click="subminHandler" />
        <!-- <p>Already have an account? <button @click="goToLoginPage" >SIGN IN</button></p> -->
        <div class="reg-bnt_wr">
          <p :style="{'fontSize':'1.5rem'}">No Account ?</p>
          <button @click="goToLoginPage" class="bnt-reg">
            <span class="reg-span">SIGN IN</span>
          </button>
        </div>
    </form> 
  </div>
    
</template>

<script>

export default {
  name:"registration",
  data(){
    return{
      loginEmail:'',
      loginPassword:'',
      loginName:'',
      reg_email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i,
      reg_password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,15}$/,
      reg_name: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/,
      checked: false,
    }
  },
   
  methods: {
    termsValidator(){
      this.inputValidator();
      const btn = document.querySelector('.p-button-secondary');
      this.checked = !this.checked;
      if(this.checked){       
      if (this.reg_email.test(this.loginEmail) &&
        this.reg_password.test(this.loginPassword) &&
        this.reg_name.test(this.loginName) === true
      ) {
        btn.classList.remove('disabled');
        btn.removeAttribute('disabled')
      }
      }else{
        btn.classList.add('disabled');
        btn.setAttribute('disabled', 'disabled')
      }      
    },

    inputValidator(){
     
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

      if(this.reg_name.test(this.loginName)){
        document.getElementById("name").style.border = '3px solid green'
      }else{
        document.getElementById("name").style.border = '3px solid red'
      }
    },

    async showInfo() {
            this.$toast.add({severity:'success', summary: 'Well done!', detail:'Your registration is complete', life: 3000});
        },

    async subminHandler(event) {
      event.preventDefault();
      const formData = {
        loginEmail: this.loginEmail,
        loginPassword: this.loginPassword,
        loginName: this.loginName
      }
 
      try {
        await this.$store.dispatch('registration', formData);// go to auth.jf
        try {
          await this.showInfo(); // this is for toast el from PrimeVue
          this.$router.push('/');
            } catch (err) { console.log(err) }
      }
      catch (err) { console.log(err) }
    },

    goToLoginPage(event) {
      event.preventDefault();
      this.$router.push('/login')
    }
  },
  
}
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
}

button{
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
}

::v-deep(.p-button-secondary){
 .p-button-icon-right {
    font-size: 2rem;
}
}
.p-button-label {
    flex: 1 1 auto;
    font-size: 1.5rem;
  }

  .p-button-icon-right::before {
    margin-left: 0.5rem;
    font-size: 2rem;
  }

.form{
  top: 218px;
  right: 235px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing:border-box;
  width: auto;
  height: auto;
  padding: 20px;
  @include box-shadow;
}
.input{
  width: 300px;
  height: 40px;
  outline: none;
  margin: 10px;
  padding: 0 10px;
  font-size: 2rem;
}
.lable{
  padding: 0 10px;
  font-size: 2rem;
}
.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 42%;
    margin-top: -0.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
  }

.disabled{
   @include disabled(grey);
    color: aliceblue ;
}
.reg-checkbox{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px 10px 150px;
  .p-checkbox{
  margin-left: 10px;
  border-color:gray;
  background: gray;
}
}
.bnt-reg{
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



</style>