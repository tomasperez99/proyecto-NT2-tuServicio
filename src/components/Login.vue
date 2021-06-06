<template>
  <div class="home">
      <div class="wrapper fadeInDown">
              <div id="formContent">
                <!-- Tabs Titles -->

                <!-- Icon -->
                <div class="fadeIn first">
                  <img src="data:image/png;base64,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" id="icon" alt="User Icon" />
                </div>

                <!-- Login Form -->
                <form v-on:submit.prevent="login">
                  <input type="text" id="login" class="fadeIn second" name="login" placeholder="Usuario" v-model="usuario">
                  <input type="password" id="password" class="fadeIn third" name="login" placeholder="Password" v-model="password">
                  <input type="submit" class="fadeIn fourth" value="Ingresar">
                  <input type="submit" class="fadeIn fourth" value="Registrarse">
                  <a id= "olvidaste" href="URL">Olvidaste tu contraseña?</a>
                </form>

                <!-- Remind Passowrd -->
                <div class="alert alert-danger" role="alert" v-if="error">
                   {{error_msg}}
                </div>

              </div>
            </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  components: {
  },
  data: function(){
    return {
      usuario: "",
      password: "",
      error: false,
      error_msg: "",
    }
  },
  methods:{
    login(){
        let json = {
          "usuario" : this.usuario,
          "password": this.password
        };
        axios.post('http://solodata.es/auth', json)
        .then( data =>{
           if(data.data.status == "ok"){
             localStorage.token = data.data.result.token;
             this.$router.push('dashboard');
           }else{
             this.error = true;
             this.error_msg = data.data.result.error_msg;
           }
        })
    }
  }
}
</script>


<style scoped>
/* BASIC */
html {
  background-color: #56baed;
}
body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
}
a {
  color: #92badd;
  display:inline-block;
  text-decoration: none;
  font-weight: 400;
}
h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display:inline-block;
  margin: 40px 8px 10px 8px; 
  color: #cccccc;
}
/* STRUCTURE */
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}
#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
}
#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

#olvidaste {
  margin-bottom: 15px;
}

/* TABS */
h2.inactive {
  color: #cccccc;
}
h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}
/* FORM TYPOGRAPHY*/
input[type=button], input[type=submit], input[type=reset]  {
  background-color: #56baed;
  border: none;
  color: white;
  padding: 25px 100px 25px 25px;
  text-align: left;
  text-decoration: none;
  /* display: inline-block; */
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 10px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
  background-color: #39ace7;
}
input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}
input[type=text], input[type=password] {
  background-color: #f6f6f6;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}
input[type=text]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}
input[type=text]:placeholder {
  color: #cccccc;
}
/* ANIMATIONS */
/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
.fadeIn {
  opacity:0;
  -webkit-animation:fadeIn ease-in 1;
  -moz-animation:fadeIn ease-in 1;
  animation:fadeIn ease-in 1;
  -webkit-animation-fill-mode:forwards;
  -moz-animation-fill-mode:forwards;
  animation-fill-mode:forwards;
  -webkit-animation-duration:1s;
  -moz-animation-duration:1s;
  animation-duration:1s;
}
.fadeIn.first {
  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.fadeIn.third {
  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}
.fadeIn.fourth {
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-delay: 1s;
}
/* Simple CSS3 Fade-in Animation */
.underlineHover:after {
  display: block;
  left: 0;
  bottom: -10px;
  width: 0;
  height: 2px;
  background-color: #56baed;
  content: "";
  transition: width 0.2s;
}
.underlineHover:hover {
  color: #0d0d0d;
}
.underlineHover:hover:after{
  width: 100%;
}
/* OTHERS */
*:focus {
    outline: none;
} 
#icon {
  width:60%;
}
</style>