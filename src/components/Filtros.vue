<template>
<div class="container">
  <div class="row justify-content-center" id="filtrosDiv">
    <div class="col-md-3 filtros" @click="filtrar('')">
            <img src="/filtros.svg" alt="icono filtros">
            <p>FILTROS</p>
    </div>
    <div class="col-md-3 filtros" @click="filtrar('queso')">
            <img src="/queso-icon.png" alt="icono quesos">
            <p>SOLO QUESOS</p>
    </div>
    <div class="col-md-3 filtros" @click="filtrar('sin taac')">
            <img src="/sin_taac.svg" alt="icono sin taac">
            <p>SIN TAAC</p>
    </div>
    <div class="col-md-3 filtros" @click="filtrar('bebidas')">
            <img src="/cerveza.svg" alt="icono bebidas">
            <p>BEBIDAS</p>
    </div>
  </div>
</div>
</template>

<script>
import { watch } from 'vue';
import { useStore } from 'vuex';
export default {
    name: 'Filtros',
    setup(){
        const store = useStore()

        const filtrar = (categoria) => {
        store.dispatch('agregarFiltro', categoria);
        console.log('cat selecc', store.state.filtro)
        }

        watch(() => store.state.filtro, (nuevoFiltro) => {
        console.log('cat selecc', nuevoFiltro);  // Se ejecuta cuando `filtro` cambia
        });

        return {
            filtrar
        };
    }
}
</script>

<style scoped>
    .container {
        text-align: center;
        padding: 3em;
        padding-bottom: 2em;
    }
</style>