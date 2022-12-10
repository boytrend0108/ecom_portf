<template>
  <div class="wrapper">
    <form 
    class="form"
    @submit="subminHandler"
    >
      <input 
      v-model="loginEmail"
      type="email" 
      class="input"
      placeholder="email"
      >
      <p>eur-usd@bk.ru</p>
      <input 
      v-model="loginPassword"
      type="password" 
      class="input"
      placeholder="password"
      >
      <p>test123456</p>
      <my-button class="btnSignup">Sign In</my-button>
      <p>No Account? <button @click="goToRegistrationPage">REGISTRATION</button></p>
    </form>
  </div>
   
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'
export default {
  components: { MyButton },
  name:"login",
  data(){
    return{
      loginEmail:'',
      loginPassword:''
    }
  },

  methods: {
    async subminHandler(event) {
      console.log('submit')
      event.preventDefault();
      const formData = {
        loginEmail: this.loginEmail,
        loginPassword: this.loginPassword
      }
      
      try{
        await this.$store.dispatch('login', formData);
        this.$router.push('/');
      }
      catch(err){console.log(err)}
      
    },
    goToRegistrationPage(event){
      event.preventDefault();
      console.log("goTo...");
      this.$router.push('/registration');
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

.btnSignup{
  margin:16px; 
  text-transform: uppercase; 
}
</style>