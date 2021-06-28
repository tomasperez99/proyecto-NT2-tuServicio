<template>
    <div>
        <!-- <div>{{this.trabajadores}}</div>
        <div>{{this.rubros}}</div>
        <div>{{this.resenias}}</div>
        <div>{{this.solicitantes}}</div>
        <div>{{this.solicitudes}}</div> -->
        
        <div>Rubro mas solicitado: {{this.getFromList('id', this.rubros, this.rubroMasSolicitado).nombre}}</div>
        <div>Rubro menos solicitado: {{this.getFromList('id', this.rubros, this.rubroMenosSolicitado).nombre}}</div>
        <div>{{this.trabajadoresConMasSolicitudes}}</div>
        <div>{{this.solicitantesMasActivos}}</div>
        <div>{{this.trabajadoresMejorRating}}</div>
        <div>{{this.trabajadoresPeorRating}}</div>
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
            trabajadoresConMasSolicitudes: [],
            trabajadoresMejorRating: [],
            trabajadoresPeorRating: [],
            solicitantesMasActivos: []
        }
    },
    methods: {

        init(){
            this.getTopTrabajadores()
            this.getTopSolicitantes()
            this.getTopsRubros()
            this.getTrabajadoresRating()
        },
        
        getTopTrabajadores() {
            let frecuenciaTrabajadores = this.getFrecuenciasArray(this.solicitudes, this.trabajadores, 'idTrabajador')
            this.trabajadoresConMasSolicitudes = this.getTopFromArray(frecuenciaTrabajadores, 3)
        },

        getTopSolicitantes() {
            let frecuenciaSolicitantes = this.getFrecuenciasArray(this.solicitudes, this.solicitantes, 'idSolicitante')
            this.solicitantesMasActivos = this.getTopFromArray(frecuenciaSolicitantes, 2)
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
            console.log(ratingsTrabajadores)
            for (i = 0; i < ratingsTrabajadores.length; i++) {
                aux.push(ratingsTrabajadores[i].rating / ratingsTrabajadores[i].count)
            }

            console.log(ratingsTrabajadores)
            console.log(aux)
            this.trabajadoresMejorRating = this.getTopFromArray(aux, 5, true)
            this.trabajadoresPeorRating = this.getTopFromArray(aux, 5, false)

        },
        
        getTopFromArray(array, top, max=true) {
            let i;
            let frecuenciaMax = 0;
            let auxMax;
            let auxMin;
            let arrayTop = []

            auxMax = frecuenciaMax + 1
            auxMin = frecuenciaMax - 1
            for (i = 0; i < top; i++) {
                let e;
                let id;

                if(max) {
                    
                    for(e = 0; e < array.length; e++) {
                        if ((frecuenciaMax < array[e] && array[e] < auxMax) || (frecuenciaMax < array[e] && array[e] > auxMax && i == 0)) {
                            frecuenciaMax = array[e]
                            id = e + 1
                            console.log(e)
                        }
                    }
                    auxMax = frecuenciaMax
                    frecuenciaMax = 0
                }else {
                    for(e = 0; e < array.length; e++) {
                        if ((frecuenciaMax > array[e] && array[e] > auxMin) || (frecuenciaMax > array[e] && array[e] < auxMin && i == 0)) {
                            frecuenciaMax = array[e]
                            id = e + 1
                        }
                    }
                    auxMin = frecuenciaMax
                    frecuenciaMax = array[0]
                }
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
<style lang="">
    
</style>