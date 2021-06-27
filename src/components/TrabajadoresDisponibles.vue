<template>
  <div>
    <br />
    <br />
    <br />
    <div class="divBackround">
      <div>
        <b-container>
          <b-row>
            <b-col id="checkis">
              <div class= "checkBox" v-for="rubro in rubros" :key="rubro.id">
                <input
                  class="tilde"
                  type="checkbox"
                  :id="rubro.desc"
                  :value="rubro.id"
                  v-model="rubrosSeleccionados"
                />
                <label class="rubro" :for="rubro.nombre">{{ rubro.nombre }}</label>
              </div>
            </b-col>
            <b-col>
              <div
                class="divTrabajador"
                v-for="trabajador in trabajadoresFiltrados"
                :key="trabajador.id"
              >
                <div class="divTrabajadorNombre">
                  <router-link :to="getRouteTrabajador(trabajador.id)">{{
                    trabajador.nombre
                  }}</router-link>
                </div>
                <br />
                <img class="imgAvatar" :src="trabajador.avatar" />
                <div>
                  <p>{{ trabajador.desc }}</p>
                  <br />
                  <p>{{ getRubroByID(trabajador.rubro) }}</p>
                  <br />
                  <a href="">{{ trabajador.mail }}</a>
                </div>
                <br />
              </div>
            </b-col>
            <b-col></b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      url_trabajadores:
        "https://60bd1cd7b8ab3700175a0245.mockapi.io/Trabajadores",
      url_rubros: "https://60bd1cd7b8ab3700175a0245.mockapi.io/Rubros",
      trabajadores: [],
      rubros: [],
      rubrosSeleccionados: [],
    };
  },
  methods: {
    getTrabajadores() {
      axios
        .get(this.url_trabajadores)
        .then((response) => {
          this.trabajadores = response.data;
        })
        .catch();
    },

    getRubros() {
      axios
        .get(this.url_rubros)
        .then((response) => {
          this.rubros = response.data;
          this.clearFilter();
        })
        .catch();
    },
    getRubroByID(id) {
      let i;
      for (i = 0; i < this.rubros.length; i++) {
        if (this.rubros[i].id == id) return this.rubros[i].nombre;
      }
      return "Undefined";
    },
    getRouteTrabajador(id) {
      return "vistaTrabajador/" + id;
    },
    clearFilter() {
      var i;
      for (i = 0; i < this.rubros.length; i++) {
        this.rubrosSeleccionados.push(this.rubros[i].id);
      }
    },
  },
  computed: {
    trabajadoresFiltrados() {
      return this.trabajadores.filter((trabajador) =>
        this.rubrosSeleccionados.includes(trabajador.rubro)
      );
    },
  },
  created() {
    this.getTrabajadores();
    this.getRubros();
  },
};
</script>
<style >
td {
  border: 50px;
}

.divFiltro {
  border: 2px solid rgb(182, 182, 182);
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  width: 160px;
  height: fit-content;
}
.pFiltros {
  align: center;
}

.divBackround {
  background-color: rgb(240, 240, 240);
  width: 110%;
  border: 10px;
  padding: 50px;
  margin: 20px;
  border-radius: 10px;
}
.divTrabajador {
  margin: 10px;
  border: 2px solid rgb(200, 200, 200);
  border-radius: 10px;
  background-color: rgb(241, 241, 241);
  display: inline-block;
  width: 120%;
}
.divTrabajadorNombre {
  background-color: rgb(216, 216, 216);
  border-radius: 9px 9px 0px 0px;
}
.imgAvatar {
  border-radius: 50%;
  width: 70%;

  padding-bottom: 10%;
}
.checkBox {
  border: 2px solid rgb(200, 200, 200);
  height: 30px;
  position: relative;
  *overflow: hidden;
  text-align: center;
}
.tilde {
  text-align: left;
  margin-left: 5px;
  top: -12px;
  margin: 1px;
}
.rubro{
  padding-left: 2%;
}
#checkis {
padding-top :99px;
}

</style>