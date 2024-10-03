<template>
    <div class="container">
        <h1>Mi carrito</h1><i class="fa fa-shopping-cart" aria-hidden="true"></i>
    <div class="detalle-carrito" v-if='Object.keys(carrito).length > 0'>
        <ul class="ulDetalle">
            <li v-for="item in carrito" :key="item.id">
                {{item.nombre}} Cantidad: {{item.cantidad}} subtotal: $ {{item.precio * item.cantidad}}
                <img :src="item.img" alt="imagen del producto">
            </li>
            <button class="btn btn-secondary me-3">Comprar</button>
            <a href="/" class="btn btn-dark">Volver</a>
        </ul>
    </div>
    <div v-else>
        Todavía no tenés productos en tu carrito de compras. Dirigíte a la sección productos para comenzar. 
        <router-link to="/" class="btn btn-secondary">Ir a productos</router-link>
    </div>
    </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'VerCarrito',
    setup(){
        const store = useStore()
        // Usar computed para hacer que carrito sea reactivo
        const carrito = computed(() => store.state.carrito);
        return {
            carrito
        }
    }
}
</script>

<style scoped>
    .container {
        margin-top: 140px;
    }
    h1 {
        display: inline;
        margin-right: 20px;
        margin-bottom: 30px;
        font-weight: 600;
    }
    i {
        font-size: 30px;
        color: black;
    }
    .ulDetalle {
        margin-top: 20px;
    }
    .ulDetalle img {
        max-width: 60px;
    }
    button {
        margin-left: 10px;
    }
</style>