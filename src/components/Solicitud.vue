
<template>
    <div>
        <div>
            <h1>{{this.header}}</h1>
            <div v-if="this.success">
                <h2>Prestador: {{this.trabajador.nombre}}</h2>
                <h2>Solicitante: {{this.solicitante.nombre}}</h2>
                <h2>Detalle</h2>
                <textarea id="mensaje" cols="60" rows="5" :placeholder=this.solicitud.mensaje disabled=true></textarea>
                <b-row>
                    <b-col>
                        <h2>Estado: </h2>
                    </b-col>
                    <b-col>
                        <h2 v-if="this.solicitud.estado == 0" style="color: #eff53d">PENDIENTE</h2>
                        <h2 v-if="this.solicitud.estado == 1" style="color: #43c450">INICIADO</h2>
                        <h2 v-if="this.solicitud.estado == 2" style="color: #43c450">TERMINADO</h2>
                        <h2 v-if="this.solicitud.estado == 3" style="color: #eb234e">CANCELADO</h2>
                    </b-col>
                </b-row>
                <div style="margin-top: 25px">
                    <button type="button" class="btn btn-primary" v-if="this.solicitud.estado == 3 && !this.showresenia" @click="mostrarResenia()">Dejar Reseña</button>
                    <Resenia v-if="this.showresenia"></Resenia>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Resenia from './Resenia'
import axios from "axios";
export default {
  components: { Resenia },
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
            showresenia: false,
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
        },
        mostrarResenia() {
            this.showresenia = !this.showresenia
            console.log(this.showresenia)
        }
    },
    created() {
        this.getSolicitud()
    }
}
</script>
<style lang="css">
h1 {
    padding: 25px;
    border-color:rgb(116, 116, 116);
    border: 2px solid;
}
h2 {
    padding-top: 25px;
}
</style>