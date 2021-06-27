<template>
    <div class="divPadre">
        <p class="pTittle" align="left">Escribe tu reseña sobre {Trabajador.nombre}</p>
        <star-rating @rating-selected = "setRating" class="starRating" v-model="rating" :show-rating="false" :star-size="50"></star-rating>
        <br>
        <input id="inputDetalle" class="inputText" type="text" placeholder="Contanos tu experiencia...">
        <br>
        <br>
        <button @click="validarResenia" type="submit" class="buttonPublicar">Publicar</button>
        <router-link to="/Index" >
            <button type="submit" class="buttonCancelar">
            Cancelar
            </button>
        </router-link>
        
    </div>
</template>
<script>
import StarRating from 'vue-star-rating'
export default {
    data() {
        return {
            rating: 0,
            detalle: null
        }
    },
    components: {
        StarRating
    },
    methods: {
        setRating: function(rating){
            this.rating = rating;
            
        },
        validarResenia(){
            if (this.rating == 0){
                alert("Debes seleccionar un puntaje antes de publicar la reseña.")
            }else{
                this.getDetalle()
            }
        },
        getDetalle(){
            this.detalle = document.getElementById("inputDetalle").value
        }
    },

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