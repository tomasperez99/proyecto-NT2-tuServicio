<template>
    <div>
        <!-- <div>{{this.trabajadores}}</div>
        <div>{{this.rubros}}</div>
        <div>{{this.resenias}}</div>
        <div>{{this.solicitantes}}</div>
        <div>{{this.solicitudes}}</div> -->
        <div>{{this.getTopsRubros()}}</div>
        <div>Rubro mas solicitado: {{this.getFromList('id', this.rubros, this.rubroMasSolicitado).nombre}}</div>
        <div>Rubro menos solicitado: {{this.getFromList('id', this.rubros, this.rubroMenosSolicitado).nombre}}</div>
        <div>{{this.trabajadoresConMasSolicitudes}}</div>
        <div>{{this.solicitantesMasActivos}}</div>
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
        
        getTopTrabajadores() {
            let frecuenciaTrabajadores = this.getFrecuenciasArray(this.solicitudes, this.trabajadores, 'idTrabajador')
            //console.log(frecuenciaTrabajadores)
            this.trabajadoresConMasSolicitudes = this.getTopFrecuentes(frecuenciaTrabajadores, 5)
        },

        getTopSolicitantes() {
            let frecuenciaSolicitantes = this.getFrecuenciasArray(this.solicitudes, this.solicitantes, 'idSolicitante')
            //console.log(frecuenciaSolicitantes)
            this.solicitantesMasActivos = this.getTopFrecuentes(frecuenciaSolicitantes, 5)
        },
        
        getTopFrecuentes(arrayFrecuencia, top) {
            //console.log(arrayFrecuencia)
            let i;
            let frecuenciaMax = 0;
            let aux = frecuenciaMax + 1;
            let arrayTop = []
            for (i = 0; i < top; i++) {
                let e;
                let id; 1                                                                       
                for(e = 0; e < arrayFrecuencia.length; e++) {
                    if (frecuenciaMax < arrayFrecuencia[e] && (frecuenciaMax < aux || (frecuenciaMax > aux && i == 0))) {
                        frecuenciaMax = arrayFrecuencia[e]
                        id = e + 1
                    }
                }
                arrayTop.push(id)
                aux = frecuenciaMax
                frecuenciaMax = 0
            }
            return arrayTop

        },
/* 
        getTrabajadoresMasSolicitados() {
            let frecuenciaTrabajadores = this.getFrecuenciasArray(this.solicitudes, this.trabajadores, 'idTrabajador')

            let i;
            let frecuenciaTrabajador = frecuenciaTrabajadores[0];
            let aux = frecuenciaTrabajador + 1;
            for (i = 0; i < 5; i++) {
                let e;
                for(e = 0; e < frecuenciaTrabajadores.length; e++) {
                    if (frecuenciaTrabajador < frecuenciaTrabajadores[e] && (frecuenciaTrabajador < aux || (frecuenciaTrabajador > aux && e == 0))) {
                        frecuenciaTrabajador = frecuenciaTrabajadores[e]
                    }
                }
                aux = frecuenciaTrabajador
                frecuenciaTrabajador = frecuenciaTrabajadores[e]
            }

        }, */

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
        getRubros() {
            axios.get(this.url_rubros)
                    .then((response) => {
                        this.rubros = response.data;
                    })
                    .catch();
        },
        getSolicitudes() {
            axios.get(this.url_solicitudes)
                    .then((response) => {
                        this.solicitudes = response.data;
                    })
                    .catch();
        },
        getTrabajadores() {
            axios.get(this.url_trabajadores)
                    .then((response) => {
                        this.trabajadores = response.data;
                    })
                    .catch();

        },
        getSolicitantes() {
            axios.get(this.url_solicitantes)
                    .then((response) => {
                        this.solicitantes = response.data;
                    })
                    .catch();
        },
        getResenias() {
            axios.get(this.url_resenias)
                    .then((response) => {
                        this.resenias = response.data;
                    })
                    .catch();
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
        this.getRubros()
        this.getTrabajadores()
        this.getSolicitantes()
        this.getResenias()
        this.getSolicitudes()
    }
}
</script>
<style lang="">
    
</style>