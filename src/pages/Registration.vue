<template>
  <div class="wrapper">
    <form 
    class="form"
    
    >
      <span class="p-float-label">
	    <InputText 
        id="email" 
        v-model="loginEmail"
        class="input"
      />
	    <label class="lable" for="email">email</label>
      </span>
      <p>eur-usd@bk.ru</p>
      <span class="p-float-label">
	    <InputText 
        id="password" 
        v-model="loginPassword"
        class="input"
      />
	    <label class="lable" for="password">Password</label>
      </span>
        <p>test123456</p>
        
        <Button 
        label="REGISTER" 
        icon="pi pi-user" 
        iconPos="right" 
        class="p-button-secondary"
        @click="subminHandler" />
        <p>Already have an account? <button @click="goToLoginPage" >SIGN IN</button></p>
    </form> 
  </div>
    
</template>

<script>
// import MyButton from '@/components/UI/MyButton.vue'
import { useToast } from "primevue/usetoast";

export default {
  // components: { MyButton },
  name:"registration",
  data(){
    return{
      loginEmail:'',
      loginPassword:''
    }
  },
   
  methods: {
    async showInfo() {
            this.$toast.add({severity:'success', summary: 'Well done!', detail:'Your registration is complete', life: 3000});
        },

    async subminHandler(event) {
      console.log('submit');
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
      console.log("goTo...")
      this.$router.push('/login')
    }
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

.btnSignup{
  margin:16px;  
}
</style>