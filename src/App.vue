<template>
  <div>
    <NavBar/>
    <div id="app">
        <div class="mainRouter">
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: "App",
  components:{
      NavBar,
  }
};
</script>



<style>

.mainRouter {
    margin-left: auto;
    margin-right: auto;
    width: 700px;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

</style>
