<template>
    <div class="divPadre">
        <p class="pTittle" align="left">Escribe tu reseña sobre {Trabajador.nombre}</p>
        <br>
        <br>
        <star-rating v-model="rating"></star-rating>
    </div>
</template>
<script>
import StarRating from 'vue-star-rating'
export default {
    components: {
        StarRating
    }
}
</script>

<style>

    .divPadre{
        border-style: solid;
        border-width: 1px;
        border-color: rgb(192, 192, 192);
        box-shadow: 2px 3px #e0e0e0;
    }

    .pTittle{
        padding-left: 45px;
        padding-top: 15px;
        font-weight: bold;
    }

</style>