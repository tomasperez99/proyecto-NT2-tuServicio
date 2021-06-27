
<template>
    <div>
        <div>
            <h1>{{this.header}}</h1>
            <div v-if="this.success">
                <h2>Prestador: {{this.trabajador.nombre}}</h2>
                <h2>Solicitante: {{this.solicitante.nombre}}</h2>

            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            url_solicitud: "https://60d8a7d9eec56d0017477414.mockapi.io/Solicitud/",
            url_trabajadores: "https://60bd1cd7b8ab3700175a0245.mockapi.io/Trabajadores/",
            url_solicitante: "https://60bd1cd7b8ab3700175a0245.mockapi.io/Solicitante/",
            id: this.$route.params.id,
            solicitud: Object,
            trabajador: Object,
            solicitante: Object,
            success: false,
            header: null
        }
    },
    methods: {
        getSolicitud() {
            axios.get(this.url_solicitud + this.id)
                    .then((response) => {
                        this.solicitud = response.data;
                        if (response.status == 200) {
                            this.success = true
                            this.header = "Solicitud Nro: " + this.id
                            this.getTrabajador(response.data.idTrabajador)
                            this.getSolicitante(response.data.idSolicitante)
                        }
                    })
                    .catch((response) => {
                            console.log(response.data)
                            this.success = false
                            this.header = "404: No existe esa Solicitud"
                    });
        },
        getTrabajador(id) {
            axios.get(this.url_trabajadores + id)
                .then((response) => {
                    this.trabajador = response.data;
                })
                .catch();
        },
        getSolicitante(id) {
            axios.get(this.url_solicitante + id)
                .then((response) => {
                    this.solicitante = response.data;
                })
                .catch();
        }
    },
    created() {
        this.getSolicitud()
    }
}
</script>
<style lang="">
    
</style>