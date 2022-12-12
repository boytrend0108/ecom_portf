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
        <label for="regId">Agree with terms</label>
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
        <p>Already have an account? <button @click="goToLoginPage" >SIGN IN</button></p>
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
        loginPassword: this.loginPassword
      }

      try {
        await this.$store.dispatch('registration', formData);
        try {
          await this.showInfo();
          this.$router.push('/');
          console.log(formData);
        } catch (err) { console.log(err) }
      }
      catch (err) { console.log(err) }
    },

    goToLoginPage(event) {
      event.preventDefault();
      this.$router.push('/login')
    }
  },

  isCheck(){
    console.log('54')
  },

  mounted(){
    // console.log(this.checked);
  }
  
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
.p-button-secondary{
  background-color:aliceblue;
  color: gray;
  width:300px;
  margin:10px 0;
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
  font-size: 16px;
}
.lable{
  padding: 0 10px;
}
.disabled{
   @include disabled(grey);
    color: aliceblue ;
}
.reg-checkbox{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  .p-checkbox{
  margin-left: 10px;
  border-color:gray;
  background: gray;
}
}


</style>