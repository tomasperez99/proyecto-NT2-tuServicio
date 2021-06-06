<template>
    <div >
        <br>
        <br>
        <br>
        <div class="divBackround">
            <div align=center >
                <table >
                    <tr>
                        <td>
                            <button type="button" class="btn btn-primary">Asistencia Presencial</button>
                        </td>
                        <td>
                            <button type="button" class="btn btn-primary">Asistencia Remota</button>
                        </td>
                    </tr>
                </table>
            </div>
            <br>
            <br>
            <div>
                <b-row>
                    <button @click="getTrabajadores">Traer usuarios</button>
                </b-row>
                <b-container>
                    <b-row>
                        <b-col> 
                            <div class="divFiltro">
                                <p class="pFiltros">Que rubro de servicio estas buscando?</p>
                                <br>
                                    <label><input type="checkbox" value="first_checkbox" > Albañileria</label><br>
                                    <label><input type="checkbox" value="first_checkbox"> Limpieza</label><br>
                                    <label><input type="checkbox" value="first_checkbox"> Mudanza</label><br>
                                    <label><input type="checkbox" value="first_checkbox"> Electricista</label><br>
                                    <label><input type="checkbox" value="first_checkbox"> Plomeria</label><br>
                                    <label><input type="checkbox" value="first_checkbox"> Tecnico</label><br>      
                            </div>
                        </b-col>
                        <b-col>
                            <div class="divTrabajador" v-for="trabajador in trabajadores" :key="trabajador.id">
                                <div class="divTrabajadorNombre">
                                    <a>{{ trabajador.nombre }}</a>
                                </div>
                                <br>
                                <img class= "imgAvatar" src="https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg" >
                                <div>   
                                    <p>{{trabajador.desc}}</p>
                                    <br>
                                    <p>Trabajador.Rubro</p>
                                    <br>
                                    <p>{{trabajador.mail}}</p>
                                </div>
                                <br>
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
import axios from 'axios'
export default {
    data(){
        return{
            trabajadores: [],
            url: "https://60bd1cd7b8ab3700175a0245.mockapi.io/Trabajadores"
        }
    },
    methods: {
        getTrabajadores(){
            axios.get(this.url)
            .then((response)=>{
                this.trabajadores = response.data
            })
            .catch()
            
        }
    }
}

</script>
<style >
    td{
        border: 50px;
    }

    .divFiltro{
        border: 2px solid rgb(182, 182, 182);
        border-radius: 5px;
        padding: 20px;
        margin: 20px;
        width: 160px;
        height: fit-content;
        
    }
    .pFiltros{
        align: center;
    }

    .divBackround{
        background-color: rgb(240, 240, 240);
        width: auto;
        border: 10px;
        padding: 50px;
        margin: 20px;
        border-radius: 10px;
        
    }
    .divTrabajador
    {
        
        margin: 10px;
        border: 2px solid rgb(200, 200, 200);
        border-radius: 10px;
        background-color: rgb(241, 241, 241);
        display: inline-block;
        width: auto;
    }
    .divTrabajadorNombre
    {
        background-color: rgb(216, 216, 216);
        border-radius:9px 9px 0px 0px;   
    }
    .imgAvatar
    {
        border-radius: 50%;
        width: 70%;
        
        padding-bottom: 10%;
        
    }
</style>