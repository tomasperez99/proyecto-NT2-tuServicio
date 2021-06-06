<template>
    <div>

        <div align=center>
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
            <b-container>
                <b-row>
                    <b-col> 
                        <div class="divFiltro">
                            <p class="pFiltros">Que rubro de servicio estas buscando?</p>
                            <br>
                                <label for="checkid"  style="word-wrap:break-word">
                                    <input id="checkid"  type="checkbox" value="test" /> Albañileria
                                </label>          
                        </div>
                    </b-col>
                    <b-col>
                        <div class="divFiltro">
                            <br>
                            <br>
                            <br>
                        </div>
                    </b-col>
                    <b-col></b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    td{
        border: 50px;
    }

    .divFiltro{
        border: 2px solid rgb(182, 182, 182);
  border-radius: 5px;
    }
    .pFiltros{
        align: center;
    }
</style>