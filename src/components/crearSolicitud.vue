<template>
  <div>
     <b-container>
         <b-col></b-col>
         <h2>Creacion de Solicitud</h2>
         <b-col></b-col>
     </b-container>
     <div>
         <label class="labelForm">Servicio requerido</label>
         <button type="button" class="btn btn-primary">Albañileria</button>
         <button type="button" class="btn btn-primary">Limpieza</button>
         <button type="button" class="btn btn-primary">Mudanza</button>
         <button type="button" class="btn btn-primary">Electricista</button>
         <button type="button" class="btn btn-primary">Plomeria</button>
         <button type="button" class="btn btn-primary">Tecnico IT</button>
     </div>
     <div><label></label></div>
     <div>
         <label class="labelForm">Necesita que el trabajador asista:</label>
         <button type="button" class="btn btn-primary">Unica vez</button>
     </div>
     <div><label></label></div>
     <div><label class="labelForm">Elija el/los dias</label></div>
     <div>
         <input type="checkbox" >
         <label>Lunes</label>
     </div>
     <div>
         <input type="checkbox">
         <label>Martes</label>
     </div>
     <div>
         <input type="checkbox">
         <label>Miercoles</label>
     </div>
     <div>
         <input type="checkbox">
         <label>Jueves</label>
     </div>
     <div>
         <input type="checkbox">
         <label>Viernes</label>
     </div>
     <div>
         <input type="checkbox">
         <label>Sabado</label>
     </div>
     <div>
         <input type="checkbox">
         <label>Domingo</label>
     </div>
     <div><label></label></div>
     <label class="labelForm">Cantidad de horas por dia</label>
     <div>
        <input type="text" placeholder="Ingrese la cantidad de horas en numeros" min="1" max="12">
     </div>
     <div><label></label></div>
     <label class="labelForm">Elija en donde requiere el servicio</label>
     <div>
        <input type="text">
     </div>
     
  </div>
</template>

<script>
export default {

}
</script>

<style>

    .labelForm {
        font-weight: bold;
        text-align: left;
        float:left;
    }
    .label {
        display: block;
        padding-left: 15px;
        text-indent: -15px;
    }
input {
  width: 13px;
  height: 13px;
  padding: 0;
  margin:0;
  vertical-align: bottom;
  position: relative;
  top: -1px;
  *overflow: hidden;
}
    
</style>