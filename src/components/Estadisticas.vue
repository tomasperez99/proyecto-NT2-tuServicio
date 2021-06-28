<template>
    <div class="container">
    <div class="heading">
      <h1>Estadisticas</h1>
    </div>
    <div class="row">
      <div class="card">
        <div class="card-header">
          <h2>Trabajadores mas solicitados</h2>
        </div>
        <div class="card-body" v-for="trabajador in trabajadoresConMasSolicitudes" :key="trabajador">
            <router-link :to=getRouteTrabajador(trabajador.id)>{{trabajador.nombre}}</router-link>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>Trabajadores mejor calificados</h2>
        </div>
        <div class="card-body" v-for="trabajador in trabajadoresMejorRating" :key="trabajador">
            <router-link :to=getRouteTrabajador(trabajador.id)>{{trabajador.nombre}}</router-link>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>Solicitantes con mas solicitudes Realizadas</h2>
        </div>
        <div class="card-body" v-for="solicitante in solicitantesMasActivos" :key="solicitante">
            <label>{{solicitante.nombre}}</label>
        </div>
      </div>
    </div>
    <div class= "row2">
        <div class="card">
        <div class="card-header">
          <h2>Rubro mas solicitado</h2>
        </div>
        <div class="card-body" >
            <label>{{getFromList('id', this.rubros, rubroMasSolicitado).nombre}}</label>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>Rubro menos solicitado</h2>
        </div>
        <div class="card-body" >
            <label>{{getFromList('id', this.rubros, rubroMenosSolicitado).nombre}}</label>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            url_trabajadores: "https://60bd1cd7b8ab3700175a0245.mockapi.io/Trabajadores",
            url_rubros: "https://60bd1cd7b8ab3700175a0245.mockapi.io/Rubros",
            url_solicitudes: "https://60d8a7d9eec56d0017477414.mockapi.io/Solicitud",
            url_resenias: "https://60d8a7d9eec56d0017477414.mockapi.io/Resenia",
            url_solicitantes: "https://60bd1cd7b8ab3700175a0245.mockapi.io/Solicitante",
            solicitantes: [],
            resenias: [],
            trabajadores: [],
            solicitudes: [],
            rubros: [],
            rubroMasSolicitado: null,
            rubroMenosSolicitado: null,
            IDTrabajadoresConMasSolicitudes: [],
            trabajadoresConMasSolicitudes: [],
            trabajadoresMejorRating: [],
            IDTrabajadoresMejorRating: [],
            IDSolicitantesMasActivos: [],
            solicitantesMasActivos:[]
        }
    },
    methods: {

        init(){
            this.getTopTrabajadores()
            this.getTopSolicitantes()
            this.getTopsRubros()
            this.getTrabajadoresRating()
            this.map()
        },

        getRouteTrabajador(id){
            return '/vistaTrabajador/' + id
        },

        map() {
            let i = 0;
            for (i = 0; i < this.IDTrabajadoresConMasSolicitudes.length; i++) {
                this.trabajadoresConMasSolicitudes.push(this.getFromList('id', this.trabajadores, this.IDTrabajadoresConMasSolicitudes[i]))
            }
            for (i = 0; i < this.IDSolicitantesMasActivos.length; i++) {
                this.solicitantesMasActivos.push(this.getFromList('id', this.solicitantes, this.IDSolicitantesMasActivos[i]))
            }
            for (i = 0; i < this.IDTrabajadoresMejorRating.length; i++) {
                this.trabajadoresMejorRating.push(this.getFromList('id', this.trabajadores, this.IDTrabajadoresMejorRating[i]))
            }
        },
        
        getTopTrabajadores() {
            let frecuenciaTrabajadores = this.getFrecuenciasArray(this.solicitudes, this.trabajadores, 'idTrabajador')
            this.IDTrabajadoresConMasSolicitudes = this.getTopFromArray(frecuenciaTrabajadores, 3)
        },

        getTopSolicitantes() {
            let frecuenciaSolicitantes = this.getFrecuenciasArray(this.solicitudes, this.solicitantes, 'idSolicitante')
            this.IDSolicitantesMasActivos = this.getTopFromArray(frecuenciaSolicitantes, 2)
        },

        getTrabajadoresRating() {
            let trabajador = {
                id: null,
                rating: 0,
                count: 0
            }
            let ratingsTrabajadores = []
            let i;
            for (i = 0; i < this.trabajadores.length; i++) {
                let trabajadorAux = JSON.parse(JSON.stringify(trabajador))
                trabajadorAux.id = this.trabajadores[i].id
                ratingsTrabajadores.push(trabajadorAux)
            }
            for (i = 0; i < this.resenias.length; i++) {
                let solicitud = this.getFromList('id', this.solicitudes, this.resenias[i].idSolicitud)
                let tr = this.getFromList('id', ratingsTrabajadores, solicitud.id)
                tr.rating = tr.rating + this.resenias[i].rating
                tr.count++
            }
            
            let aux = [];
            for (i = 0; i < ratingsTrabajadores.length; i++) {
                aux.push(ratingsTrabajadores[i].rating / ratingsTrabajadores[i].count)
            }
            this.IDTrabajadoresMejorRating = this.getTopFromArray(aux, 3)
        },
        
        getTopFromArray(array, top) {
            let i;
            let frecuenciaMax = 0;
            let auxMax;
            let arrayTop = []

            auxMax = frecuenciaMax + 1
            for (i = 0; i < top; i++) {
                let e;
                let id;
                    
                    for(e = 0; e < array.length; e++) {
                        if ((frecuenciaMax < array[e] && array[e] < auxMax) || (frecuenciaMax < array[e] && array[e] > auxMax && i == 0)) {
                            frecuenciaMax = array[e]
                            id = e + 1
                        }
                    }
                    auxMax = frecuenciaMax
                    frecuenciaMax = 0
                
                arrayTop.push(id)                
            }
            return arrayTop
        },

        getFrecuenciasArray(arrayA, arrayB, key) {
            let total = []
            let i;
            for (i = 0; i < arrayA.length; i++) {
                total.push(arrayA[i][key])
            }
            let frecuencias = []
            for (i = 0; i < arrayB.length; i++) {
                frecuencias.push(0)
            }
            for (i = 0; i < arrayA.length; i++) {
                frecuencias[total[i] - 1] = frecuencias[total[i] - 1] + 1
            }

            return frecuencias
        },

        getTopsRubros() {
            let rubrosSolicitudes = []
            let i;
            let cantidadMasSolicitado = 0
            for (i = 0; i < this.solicitudes.length; i++) {
                let rubro;
                rubro = this.getFromList('id', this.trabajadores, this.solicitudes[i].idTrabajador).rubro
                rubrosSolicitudes.push(rubro)
            }
            let frecuenciaRubros = []
            for (i = 0; i < this.rubros.length; i++) {
                frecuenciaRubros.push(0)
            }
            for (i = 0; i < rubrosSolicitudes.length; i++) {
                frecuenciaRubros[rubrosSolicitudes[i] - 1] = frecuenciaRubros[rubrosSolicitudes[i] - 1] + 1
            }
            let cantidadMenosSolicitado = frecuenciaRubros[0]
            for (i = 0; i < frecuenciaRubros.length; i++) {
                if (cantidadMasSolicitado < frecuenciaRubros[i]) {
                    cantidadMasSolicitado = frecuenciaRubros[i]
                    this.rubroMasSolicitado = (i+1)
                }
                if (cantidadMenosSolicitado > frecuenciaRubros[i]) {
                    cantidadMenosSolicitado = frecuenciaRubros[i]
                    this.rubroMenosSolicitado = (i+1)
                }
            }
        },

        getAxios(url) {
            var response = axios.get(url)
            return response
        },

        getFromList(key, list, value) {
            let i;
            for (i = 0; i < list.length; i++) {
                if(list[i][key] == value) {
                    return list[i]
                }
            }
        }
    },

    created() {
        this.getAxios(this.url_solicitudes)
            .then((response) => {
                        this.solicitudes = response.data;
                        this.getAxios(this.url_trabajadores)
                            .then((response) => {
                                this.trabajadores = response.data;
                                this.getAxios(this.url_solicitantes)
                                    .then((response) => {
                                    this.solicitantes = response.data;
                                    this.getAxios(this.url_rubros)
                                        .then((response) => {
                                            this.rubros = response.data;
                                            this.getAxios(this.url_resenias)
                                                .then((response) => {
                                                this.resenias = response.data;
                                                this.init()
                                                })
                                                .catch();
                                        })
                                        .catch();
                                })
                                .catch();
                            })
                            .catch();
                    })
                    .catch();  
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