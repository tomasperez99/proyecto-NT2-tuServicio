<template>
  <div>
    <b-container>
      <b-col></b-col>
      <h2>Informacion del trabajador</h2>
      <b-col></b-col>
    </b-container>
    <div>
      <img
        align="right"
        src="https://futhead.cursecdn.com/static/img/21/players/239818.png"
      />
    </div>

    <div><label></label></div>
    <div><label></label></div>
    <div>
      <label class="datoImportante">Ruben Dias</label>
    </div>
    <div><label></label></div>
    <div><label></label></div>
    <div><label></label></div>
    <div>
      <label class="datoImportante">Carpintero</label>
    </div>
    <div><label></label></div>
    <div><label></label></div>
    <div><label></label></div>
    <div><label></label></div>
    <div><label></label></div>
    <div>
      <label class="datoNormal"
        >Carpintero con disponibilidad horaria full time dentro de la capital
        federal</label
      >
    </div>
    <div><label></label></div>
    <div><label></label></div>
    <div><label></label></div>
    <div>
      <label class="datoMenor">Horas disponible por dia: </label>
      <label class="labelForm2">8 </label>
    </div>
    <div><label></label></div>
    <div><label></label></div>
    <div><label></label></div>
    <div>
      <label class="datoMenor">Localidad: </label>
      <label class="labelForm2">CABA </label>
    </div>
    <div><label></label></div>
    <div><label></label></div>
    <div><label></label></div>
    <div>
      <label class="datoMenor">Precio: </label>
      <label class="labelForm2">$45000 </label>
    </div>
    <div><label></label></div>
    <div><label></label></div>
    <div>
      <label class="datoNormal"
        >Soy ruben , un carpintero con mas de 30 años de experiencia en el
        rubro. Actualmente por la pandemia no me quedo otra alternativa que
        salir a buscar trabajo y lo hago de esta forma. Soy una persona
        responsable, ante cualquier duda contactame</label
      >
    </div>
    <div><label></label></div>
    <div><label></label></div>
    <div><label></label></div>
    <div><label></label></div>
    <div class="container p-4">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card animate__animated animate__flipInY">
                    <div class="card-body">
                            <div class="form-group">
                                <input type="text" name= "Nombre" class="form-control" placeholder="Nombre"> 
                            </div>

                           <div class="form-group">
                                <input type="text" name="Email" class="form-control" placeholder="Email">
                            </div>

                            <div class="form-group">
                                <input type="text" name="Telefono" class="form-control" placeholder="Telefono">
                            </div>

                            <div class="form-group">
                                <textarea name="Escribi aca tu mensaje..." rows="2" class="form-control" placeholder="Escribi aca tu mensaje..."></textarea>
                            </div>

                            <button class="btn btn-primary btn-block">
                                Enviar
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.labelForm {
  font-weight: bold;
  text-align: left;
  float: left;
}
.datoImportante {
  font-weight: 800;
  text-align: left;
  float: left;
  font-size: xx-large;
}
.datoMenor {
  font-weight: normal;
  text-align: left;
  float: left;
}
.datoNormal {
  font-weight: 700;
  text-align: left;
  float: left;
  font-size: large;
}
.labelForm2 {
  font-weight: bold;
  text-align: right;
  float: right;
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
  margin: 0;
  vertical-align: bottom;
  position: relative;
  top: -1px;
  *overflow: hidden;
}
</style>