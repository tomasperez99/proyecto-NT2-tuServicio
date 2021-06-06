<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <table class="center">
  <tr>
    <td>
      <select width="auto" v-model="selected">
      <option disabled value="">Seleccione un elemento</option>
      <option>Busco Servicios</option>
      <option>Busco Trabajo</option>
      </select>
    </td>
    <td id="busquedaIndex">
        <input size="40" type="text">
    </td>    
  </tr>
  
  <div>
        <td>
        
        </td>
  </div>

</table>

</div>
</template>




<script>
export default {
  name: 'Index',
  props: {
    msg: String
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

#busquedaIndex{
    padding-left: 20px;
    width: 150px;
}

</style>
