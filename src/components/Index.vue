<template>
  <div class="hello">
    <h1>Tu Servicio</h1>
  <table class="center">
  <tr>
    <td>
      <select id="tipoBusqueda" v-model="selected" >
      <option disabled>Seleccione un elemento</option>
      <option>Busco Servicios</option>
      <option>Busco Trabajo</option>
      </select>
    </td>
    <td id="busquedaIndex">
        <input type="text" id="busquedaIndex">
    </td>
    <td>
        <button type="button" class="btn btn-primary">Buscar</button>
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
h1 {
  padding-bottom: 20px;
}

.center {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}

#busquedaIndex{
    padding-left: 10px;
    width: 400px;
    padding: 17px;
}

#tipoBusqueda {
    padding: 8px;
}


</style>
