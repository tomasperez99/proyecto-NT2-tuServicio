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
     <!-- <div>
         <label class="labelForm">Necesita que el trabajador asista:</label>
         <button type="button" class="btn btn-primary">Unica vez</button>
     </div> -->
     <div><label></label></div>
     <div><label class="labelForm">Elija el/los dias</label></div>
     <div class="dias">
         <div>
         <input type="checkbox" >
         <label class="dia-Text">Lunes</label>
     </div>
     <div>
         <input type="checkbox">
         <label class="dia-Text">Martes</label>
     </div>
     <div>
         <input type="checkbox">
         <label class="dia-Text">Miercoles</label>
     </div>
     <div>
         <input type="checkbox">
         <label class="dia-Text">Jueves</label>
     </div>
     <div>
         <input type="checkbox">
         <label class="dia-Text">Viernes</label>
     </div>
     <div>
         <input type="checkbox">
         <label class="dia-Text">Sabado</label>
     </div>
     <div>
         <input type="checkbox">
         <label class="dia-Text">Domingo</label>
     </div>
     </div>
     <div><label></label></div>
     <label class="labelForm">Cantidad de horas por dia</label>
     <div>
         <div>
        <input type="text" placeholder="Ingrese la cantidad de horas" min="1" max="12">
     </div>
     <div><label></label></div>
     <div>
        <label class="labelForm">Elija en donde requiere el servicio</label>
        <input type="text">
     </div>
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
    .dias{
        display: flex;    
        flex-direction: column;
        align-items: baseline;
        margin-left: 50%;

    }
    .dia-Text{
        padding-left: 0.5rem;
    }
</style>