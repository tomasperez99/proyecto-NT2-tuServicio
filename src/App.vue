<template>
  <div id="app">
    <NavBar/>
    <Index msg = "Tu Servicio"/>
   <b-row>
     <b-col>
      
     </b-col>
     <b-col>
       <router-view></router-view>
     </b-col>
     <b-col>
       
     </b-col>
   </b-row>
  </div>
  
</template>

<script>
import NavBar from './components/NavBar'
import Index from './components/Index'
export default {
  name: "App",
  components:{
      NavBar,
      Index
  }
};
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#fotoHeader{
  
  color: aqua;
  

}



</style>
