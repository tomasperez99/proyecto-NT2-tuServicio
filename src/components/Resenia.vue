<template>
<div class="divPadre">
    <div id="mainDiv">
        <p class="pTittle" align="left">Escribe tu reseña sobre {{trabajador.nombre}}</p>
        <star-rating id='star' @rating-selected = "setRating" class="starRating" v-model="rating" :show-rating="false" :star-size="50"></star-rating>
         <label hidden="true" id="labelError" for="star" style="color:red">Ingrese un puntaje válido para la Reseña</label>
        <br>
        <input id="inputDetalle" class="inputText" type="text" placeholder="Contanos tu experiencia...">
        <br>
        <br>
        <button @click="checkResenia" type="submit" class="buttonPublicar">Publicar</button>
        <router-link to="/Index" >
            <button type="submit" class="buttonCancelar">
            Cancelar
            </button>
        </router-link>
    </div>
    <div hidden=true id="doneDiv">
        <h3 style="padding: 25px">Reseña enviada</h3>
    </div>
</div>
</template>
<script>
import StarRating from 'vue-star-rating'
import axios from 'axios'
export default {
    data() {
        return {
            url_resenias: "https://60d8a7d9eec56d0017477414.mockapi.io/Resenia/",
            rating: 0,
            detalle: null,
            trabajador: this.$parent.trabajador,
            solicitud: this.$parent.solicitud
        }
    },
    components: {
        StarRating
    },
    methods: {
        setRating: function(rating){
            this.rating = rating;
            
        },
        getDetalle(){
            this.detalle = document.getElementById("inputDetalle").value
        },
        checkResenia() {
            var label = document.getElementById('labelError')
            if (this.rating > 0) {
                label.hidden = true
                this.postResenia()
                this.getDetalle()
                this.postResenia()
                document.getElementById('mainDiv').hidden = true
                document.getElementById('doneDiv').hidden = false
            }else {
                label.hidden = false
            }
        },
        postResenia() {
            var response = axios.post(this.url_resenias, {
                idSolicitud: this.solicitud.id,
                comentario: this.detalle
            })
            return response
        }
    }

}
</script>

<style>

    .divPadre{
        border-style: solid;
        border-width: 0.9px;
        border-color: rgb(192, 192, 192);
        box-shadow: 2px 2px #e0e0e0;
    }

    .pTittle{
        
        padding-top: 15px;
        font-weight: bold;
        text-align: center;
    }

    .starRating{
        padding-left: 225px;
    }

    .inputText{
        width: 400px;
        padding: 20px;
    }

    .buttonPublicar {
        background-color: #7a3ec7;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        color: floralwhite;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }

    .buttonCancelar {
        background-color: #d3d3d3;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        color: rgb(0, 0, 0);
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        margin-bottom: 30px;
    }
    

</style>