<template>
  <div id="app">
    <Index msg="Header"/>
   <b-row>
     <b-col>
       
       <router-link to="/series">Ruta #1</router-link>
       <br>
       <router-link to="/peliculas">Ruta #2</router-link>
     </b-col>
     <b-col>
       <router-view></router-view>
     </b-col>
     <b-col>
       <router-link to="/login" tag="button" style="width:auto;">>Ingresar</router-link>
     </b-col>
   </b-row>
    <hr>
  </div>
  
</template>

<script>
import Index from './components/Index'
export default {
  name: "App",
  components:{
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
