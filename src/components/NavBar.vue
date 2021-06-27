<template>
  <div class="topnav">
      <router-link to="/Index">Inicio</router-link>
      <router-link to="/crearSolicitud">Crear Solicitud</router-link>
      <router-link to="/Resenia">Dejar Resenia</router-link>
      <router-link id="loginButton" to="/Login">Ingresar</router-link>
  </div>
</template>

<script>
export default {
}

</script>

<style>
.topnav {
  background-color: #333;
  overflow: hidden;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

#loginButton {
  float: right;
  background-color: #1E90FF;
  color: white;
}

</style>