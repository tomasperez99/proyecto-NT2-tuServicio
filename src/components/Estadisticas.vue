<template>
    <div class="container">
    <div class="heading">
      <h1>Estadisticas</h1>
    </div>
    <div class="row">
      <div class="card">
        <div class="card-header">
          <h2>5 trabajadores con mas solicitudes completadas</h2>
        </div>
        <div class="card-body" v-for="trabajador in trabajadoresConMasSoliCompletadas" :key="trabajador.id">
            <label>{{trabajador.nombre}}</label>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>5 trabajadores mejores calificados</h2>
        </div>
        <div class="card-body" v-for="trabajador in trabajadoresMejoresCalificados" :key="trabajador.id">
            <label>{{trabajador.nombre}}</label>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>5 trabajadores con menos rating</h2>
        </div>
        <div class="card-body" v-for="trabajador in trabajadoresConMenosRating" :key="trabajador.id">
            <label>{{trabajador.nombre}}</label>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>Solicitantes con mas solicitudes realizadas</h2>
        </div>
        <div class="card-body" v-for="solicitante in solicitantesConMasSolis" :key="solicitante.id">
            <label>{{solicitante.nombre}}</label>
        </div>
      </div>
    </div>
    <div class= "row2">
        <div class="card">
        <div class="card-header">
          <h2>Rubro mas solicitado</h2>
        </div>
        <div class="card-body" v-for="rubro in rubroMasSolicitado" :key="rubro.id">
            <label>{{rubro.nombre}}</label>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>Rubro menos solicitado</h2>
        </div>
        <div class="card-body" v-for="rubro in rubroMenosSolicitado" :key="rubro.id">
            <label>{{rubro.nombre}}</label>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
    data() {
    return {
      trabajadoresConMasSoliCompletadas: [{nombre:"Ema", id:10},{nombre:"Toto", id:11},{nombre:"Rama", id:12},{nombre:"Mariano", id:13},{nombre:"Gaspar", id:14},],
      rubroMenosSolicitado: [{nombre: "Abogado", id:2}],
      rubroMasSolicitado: [{nombre: "Verdulero", id:1}],
      trabajadoresMejoresCalificados: [{nombre:"Ema", id:10},{nombre:"Toto", id:11},{nombre:"Rama", id:12},{nombre:"Mariano", id:13},{nombre:"Gaspar", id:14},],
      trabajadoresConMenosRating: [{nombre:"Ema", id:10},{nombre:"Toto", id:11},{nombre:"Rama", id:12},{nombre:"Mariano", id:13},{nombre:"Gaspar", id:14},],
      solicitantesConMasSolis: [{nombre:"Ema", id:10},{nombre:"Toto", id:11},{nombre:"Rama", id:12},{nombre:"Mariano", id:13},{nombre:"Gaspar", id:14},],
    };
  }
}
</script>
<style>
    * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: #fefefe;
  font-family: sans-serif;
}

.container {
  width: 200%;
  margin: 50px auto;
}
.heading {
  text-align: center;
  font-size: 20px;
  margin-bottom: 50px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-flow: wrap;
}

.row2 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-flow: wrap;
}

.card {
  width: 21%;
  background: #fff;
  border: 1px solid #ccc;
  margin-bottom: 50px;
  transition: 0.3s;
}

.card-header {
  text-align: center;
  padding: 10px 10px;
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  color: #fff;
}

.card-body {
  padding: 18px 15px;
  text-align: center;
  font-size: 25px;
}

.card-body .btn {
  display: block;
  color: #fff;
  text-align: center;
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  margin-top: 30px;
  text-decoration: none;
  padding: 10px 5px;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
}

@media screen and (max-width: 1000px) {
  .card {
    width: 40%;
  }
}

@media screen and (max-width: 620px) {
  .container {
    width: 100%;
  }

  .heading {
    padding: 20px;
    font-size: 20px;
  }

  .card {
    width: 80%;
  }
}

</style>