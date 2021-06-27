<template>
  <section class="seccion-perfil-usuario">
    <div class="perfil-usuario-header">
      <div class="perfil-usuario-portada">
        <div class="perfil-usuario-avatar">
          <img :src="this.trabajador.avatar" alt="img-avatar" />
        </div>
      </div>
    </div>
    <div class="perfil-usuario-body">
      <div class="perfil-usuario-bio">
        <h3 class="titulo">{{ this.trabajador.nombre }}</h3>
        <p class="texto">{{ this.trabajador.desc }}</p>
      </div>
      <div class="perfil-usuario-footer">
        <ul class="lista-datos">
          <li>Localidad:</li>
          <li>Precio:</li>
        </ul>
        <ul class="lista-datos">
          <li>{{ this.trabajador.localidad }}</li>
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
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  class="form-control"
                  placeholder="Nombre"
                />
              </div>

              <div class="form-group">
                <input
                  id="email"
                  type="text"
                  name="email"
                  class="form-control"
                  placeholder="Email"
                />
              </div>

              <div class="form-group">
                <input
                  id="telefono"
                  type="text"
                  name="telefono"
                  class="form-control"
                  placeholder="Telefono"
                />
              </div>

              <div class="form-group">
                <textarea
                  id="mensaje"
                  name="message"
                  rows="2"
                  class="form-control"
                  placeholder="Mensaje"
                ></textarea>
              </div>

              <button
                v-on:click="checkSolicitud()"
                class="btn btn-primary btn-block"
              >
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
import axios from "axios";
export default {
  data() {
    return {
      url_trabajadores: "https://60bd1cd7b8ab3700175a0245.mockapi.io/Trabajadores/",
      url_solicitante: "https://60bd1cd7b8ab3700175a0245.mockapi.io/Solicitante",
      url_solicitud: "https://60d8a7d9eec56d0017477414.mockapi.io/Solicitud",
      trabajador: Object,
      id: this.$route.params.id,
    };
  },
  methods: {
    getTrabajador() {
      axios
        .get(this.url_trabajadores + this.id)
        .then((response) => {
          this.trabajador = response.data;
        })
        .catch();
    },
    checkSolicitud() {        
        let nombre = document.getElementById('nombre')
        let email = document.getElementById('email')
        let telefono = document.getElementById('telefono')
        
        if(nombre.value == '' || email.value ==  ''  || telefono.value ==  '' ) {
            alert("Faltan completar datos")
        }else{
            alert("Trabajador contactado correctamente")
            this.enviarSolicitud()
        }
    },
    enviarSolicitud() {
      let nombre = document.getElementById("nombre").value;
      let email = document.getElementById("email").value;
      let telefono = document.getElementById("telefono").value;
      let mensaje = document.getElementById("mensaje").value;

      this.postSolicitante(nombre, email, telefono).then((response) => {

        if (response.status == 201) {
            let idSolicitante = response.data.id
            console.log('Id Solicitante: ' + idSolicitante)
            
            // var fechaAlta = new Date()
            // fechaAlta = fechaAlta.getDate()
            // var fechaInicio = 0
            // var fechaFinalizacion = 0

            this.postSolicitud(this.id, idSolicitante, mensaje).then((response) => {

                if (response.status == 201) {
                    console.log('ID Solicitud: ' + response.data.id)
                }
            })
        }
      })

    },
    postSolicitante(nombre, email, telefono) {
        var response = axios.post(this.url_solicitante, {
          nombre: nombre,
          mail: email,
          telefono: telefono
        })
        return response
    },
    postSolicitud(idTrabajador, idSolicitante, mensaje) {
        var response = axios.post(this.url_solicitud, {
          idTrabajador: idTrabajador,
          idSolicitante: idSolicitante,
          mensaje: mensaje,
          estado: 0
        })
        return response
    }
  },
  created() {
    this.getTrabajador();
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
  background: linear-gradient(#b873ff, transparent);
  margin-bottom: 1.25rem;
}

.seccion-perfil-usuario .perfil-usuario-portada {
  display: block;
  position: relative;
  width: 90%;
  height: 17rem;
  background: linear-gradient(45deg, #bc3cff, #317fff);
  border-radius: 0 0 20px 20px;
}

.seccion-perfil-usuario .perfil-usuario-portada .boton-portada {
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: 0;
  border-radius: 8px;
  padding: 12px 25px;
  background-color: rgba(0, 0, 0, 0.5);
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
  border: 7px solid #ffffff;
  background-color: #dfe5f2;
  border-radius: 50%;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
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
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
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

.seccion-perfil-usuario .lista-datos li > .icono {
  margin-right: 1rem;
  font-size: 1.2rem;
  vertical-align: middle;
}
</style>


