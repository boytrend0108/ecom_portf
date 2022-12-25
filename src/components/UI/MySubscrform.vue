<template>
  <form 
  class="form-subscr"
  id="form" 
  method="POST"
  >
    <div>
      <h2 class="form-subscr__title">Subscribe</h2>
      <h3 class="form-subscr__sub"> FOR OUR NEWLETTER AND PROMOTION</h3>
    </div>
    <div class="input-wrap">
       <!-- Hidden Required Fields -->
      <input type="hidden" name="project_name" value="digital-boys.com">
		  <input type="hidden" name="admin_email" value="eur-usd@bk.ru">
		  <input type="hidden" name="form_subject" value="Подписка на рассылку с формы на главной странице Subs-form">
		   <!-- END Hidden Required Fields -->
      <input 
        id="email" 
        name="email" 
        type="email"
        v-model="email" 
        class="form-sub__inp" 
        @input="validator"
        placeholder="Enter Your Email"
        ref="input">
      <my-button 
      class="form-btn"  
      @click="sendForm"
      >Subscribe</my-button>
    </div>
  </form>
</template>
<script>
export default {
  name: 'my-subscrform',
  data(){
    return {
      email:'',
      emailRegExp: /^[\w._-]+@\w+\.[a-z]{2,4}$/i
    }
  },
  
  methods: {
    async sendForm() {
      await $("form").submit(function () { //Change
        var th = $(this); // this - it is form
        $.ajax({
          type: "POST",
          url: "mailer/mail.php", //Change
          data: th.serialize()
        }).done(function () {
          alert("Thank you!");
          setTimeout(function () {
            // Done Functions
            thisComp.GET_SHOW_NOTIF();
            th.trigger("reset");
          }, 1000);
        }).fail(function(err){
          console.log("err", err)
        });
        // return false;
      });
    },

    validator() {
      if (this.emailRegExp.test(this.email)) {
        document.querySelector("#email").style.border = '3px solid green'
        document.querySelector(".form-btn").removeAttribute('disabled')
        document.querySelector(".form-btn").classList.remove("disabled");
      } else {
        document.querySelector(".form-btn").style.border = '3px solid #FF6A6A'
        document.querySelector(".form-btn").setAttribute('disabled',"disabled")
        document.querySelector(".form-btn").classList.add("disabled");
      }
    },
  },

  mounted(){
     
    }
}
</script>_

<style lang="scss" scoped>
.form-subscr {
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(max-width: $media-phone) {
    width: 340px;
  }

  @media(max-width: $media-phoneS) {
    width: 300px;
  }
}

.form-subscr__title {
  font-weight: 700;
  font-size: 24px;
  line-height: 167.2%;
  text-align: center;
  color: #222224;
  text-transform: uppercase;
}

.form-subscr__sub {
  font-weight: 400;
  font-size: 18px;
  line-height: 167.2%;
  text-align: center;
  color: #222224;
  text-transform: uppercase;
  margin: 0px 0 30px 0;
}

.input-wrap {
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.form-sub__inp {
  width: 256px;
  height: 52px;
  background: #E1E1E1;
  border-bottom-left-radius: 21px;
  border-top-left-radius: 21px;
  border: none;
  outline: none;
  padding: 0 15px;
  font-size: 20px;

  @media(max-width:$media-phoneS) {
    width: 180px;
  }
}

.form-btn {
  width: 100px;
  background-color: #F16D7F;
  color: white;
  border-bottom-right-radius: 21px;
  border-top-right-radius: 21px;
  border: none;
}

.disabled{
    cursor: not-allowed !important;
    background-color: gray !important;
    border: none !important;
    color: aliceblue !important;
}
</style>
