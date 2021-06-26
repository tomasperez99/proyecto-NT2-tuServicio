<template>
  <section class="seccion-perfil-usuario">
        <div class="perfil-usuario-header">
            <div class="perfil-usuario-portada">
                <div class="perfil-usuario-avatar">
                    <img src="https://futhead.cursecdn.com/static/img/21/players/239818.png" alt="img-avatar">
                </div>
            </div>
        </div>
        <div class="perfil-usuario-body">
            <div class="perfil-usuario-bio">
                <h3 class="titulo">{{this.trabajador.nombre}}</h3>
                <p class="texto">{{this.trabajador.desc}}</p>
            </div>
            <div class="perfil-usuario-footer">
                <ul class="lista-datos">
                    <li>Horas Disponibles: </li>
                    <li>Localidad: </li>
                    <li>Precio: </li>
                </ul>
                <ul class="lista-datos">
                    <li>{{this.trabajador.localidad}}</li>
                    <li>$500/hora</li>
                </ul>
            </div>
        </div>
        <div><label></label></div>
        <h3>CONTACTA SIN COMPROMISO</h3>
        <div class="container p-4">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card animate__animated animate__flipInY">
                    <div class="card-body">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Nombre" id="nombreForm"> 
                            </div>

                           <div class="form-group">
                                <input type="text" class="form-control" placeholder="Email" id="emailForm">
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Telefono" id="telefonoForm">
                            </div>

                            <div class="form-group">
                                <textarea name="message" rows="2" class="form-control" placeholder="Mensaje"></textarea>
                            </div>

                            <button class="btn btn-primary btn-block" onclick="enviarFormulario()">
                                Enviar
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  
</template>


<script>
import axios from 'axios'
export default {
    data() {
        return {
            url_trabajadores: "https://60bd1cd7b8ab3700175a0245.mockapi.io/Trabajadores/",
            trabajador: Object,
            id: this.$route.params.id
        }
    },
    methods: {
        getTrabajador(){
            axios.get(this.url_trabajadores + this.id)
            .then((response)=>{
                this.trabajador = response.data
            })
            .catch()
            
        },
        enviarFormulario(){        
        let nombre = document.getElementById('nombreForm')
        let email = document.getElementById('emailForm')
        let telefono = document.getElementById('telefonoForm')
        
        if(nombre.value == null || email.value == null || telefono.value == null) {
            alert("Faltan completar datos")
        }else{
            alert("Trabajador contactado correctamente")
        }
    }
    },
    created() {
        this.getTrabajador()
    }
};
</script>
<style>
.seccion-perfil-usuario .perfil-usuario-body,
.seccion-perfil-usuario {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
}

.seccion-perfil-usuario .perfil-usuario-header {
    width: 100%;
    display: flex;
    justify-content: center;
    background: linear-gradient(#B873FF, transparent);
    margin-bottom: 1.25rem;
}

.seccion-perfil-usuario .perfil-usuario-portada {
    display: block;
    position: relative;
    width: 90%;
    height: 17rem;
    background: linear-gradient(45deg, #BC3CFF, #317FFF);
    border-radius: 0 0 20px 20px;
}

.seccion-perfil-usuario .perfil-usuario-portada .boton-portada {
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: 0;
    border-radius: 8px;
    padding: 12px 25px;
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    cursor: pointer;
}

.seccion-perfil-usuario .perfil-usuario-portada .boton-portada i {
    margin-right: 1rem;
}

.seccion-perfil-usuario .perfil-usuario-avatar {
    display: flex;
    width: 180px;
    height: 180px;
    align-items: center;
    justify-content: center;
    border: 7px solid #FFFFFF;
    background-color: #DFE5F2;
    border-radius: 50%;
    box-shadow: 0 0 12px rgba(0, 0, 0, .2);
    position: absolute;
    bottom: -40px;
    left: calc(50% - 90px);
    z-index: 1;
}

.seccion-perfil-usuario .perfil-usuario-avatar img {
    width: 100%;
    position: relative;
    border-radius: 50%;
}

.seccion-perfil-usuario .perfil-usuario-body {
    width: 70%;
    position: relative;
    max-width: 750px;
}

.seccion-perfil-usuario .perfil-usuario-body .titulo {
    display: block;
    width: 100%;
    font-size: 1.75em;
    margin-bottom: 0.5rem;
}

.seccion-perfil-usuario .perfil-usuario-body .texto {
    color: #848484;
    font-size: 0.95em;
}

.seccion-perfil-usuario .perfil-usuario-footer,
.seccion-perfil-usuario .perfil-usuario-bio {
    display: flex;
    flex-wrap: wrap;
    padding: 1.5rem 2rem;
    box-shadow: 0 0 12px rgba(0, 0, 0, .2);
    background-color: #fff;
    border-radius: 15px;
    width: 100%;
}

.seccion-perfil-usuario .perfil-usuario-bio {
    margin-bottom: 1.25rem;
    text-align: center;
}

.seccion-perfil-usuario .lista-datos {
    width: 50%;
    list-style: none;
}

.seccion-perfil-usuario .lista-datos li {
    padding: 5px 0;
}

.seccion-perfil-usuario .lista-datos li>.icono {
    margin-right: 1rem;
    font-size: 1.2rem;
    vertical-align: middle;
}


</style>


