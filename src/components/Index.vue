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

</table>
<div class="count">
    <h2>Avisos solicitando profesionales: {{cantAvisos}} </h2>
    <h2>Profesionales registrados: {{cantProfesionales}}</h2>
</div>

</div>
</template>




<script>
export default {
  name: 'Index',
  props: {
    msg: String
  },
  computed: {
      cantProfesionales() {
          return this.$store.state.cantProfesionales
      },
      cantAvisos() {
          return this.$store.state.cantAvisos
      }
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

.count {
    margin-top: 50px;
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
