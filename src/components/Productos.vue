<template>
<div class="col-md-4 d-flex">
  <div class="card card-producto">
    <img :src=producto.img alt="">
    <div class="card-body">
        <h2 class="card-title">{{producto.nombre}}</h2>
        <p class="card-text precio">${{producto.precio}}</p>
        <p class="card-text descripcion">Ver descripción</p>
        <button class="agregar" @click="agregar(producto)">Agregar</button>
        <button class="quitar" @click="quitar(producto)">Quitar</button>
    </div>
    </div>
</div>
</template>

<script>
import {onMounted, computed} from 'vue'
import{useStore} from 'vuex'
export default {
    props: ['producto'],
    setup(){
        const store = useStore()
        const carrito = {}
        const cantidad = 0
        const agregar = producto => {
            store.dispatch('agregarAlCarrito', producto)
            console.log('carrito', store.state.carrito)
            let elegido = document.querySelectorAll('producto-elegido')
            elegido.className = 'oculto'
            store.dispatch('sumarClicks')
        }
        const quitar = producto => {
            if(store.state.carrito.hasOwnProperty(producto.id)) {
               store.dispatch('quitarDelCarrito', producto)
                if(store.state.clicks > 0) {
                    store.dispatch('restarClicks')
                }
            }
        }
        return {
            agregar,
            carrito,
            quitar
        }
    }
}
</script>

<style scoped>
 h2 {
    font-size: 1.75em;
 }

 .precio {
    font-size: 1.4em;
 }

 .descripcion {
    font-size: 1.2em;
 }

 .card-body {
    padding: 0;
    padding-top: 15px;
 }
</style>