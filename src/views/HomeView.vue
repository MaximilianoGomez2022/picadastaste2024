<template>
    <Banner/>
    <Filtros/>
    <div class="container" v-if="isLoading">
      cargando...
    </div>
    <div v-else class="container">
    <div class="row" id="carrito-section">
          <Productos v-for="producto in productos" 
          :producto="producto" :key="producto.id" />
          <div class="contenedor-carrito justify-content-end">
          <router-link to="/carrito" class="btn btn-dark w-20">Ver detalle del carrito</router-link>
          </div>    
    </div>
    </div>
    <Nosotros/>
    <Contacto/>
    <ProductoElegido/>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Productos from '@/components/Productos.vue'
import {useStore} from 'vuex'
import {onMounted, computed, ref, watch} from 'vue'
import Filtros from '@/components/Filtros.vue'
import Nosotros from '@/components/Nosotros.vue'
import Contacto from '@/components/Contacto.vue'
import ProductoElegido from '@/components/ProductoElegido.vue'

export default {
  name: 'HomeView',
  components: {
    Productos,
    Banner,
    Filtros,
    Nosotros,
    Contacto,
    ProductoElegido
  },
  setup() {
    const store = useStore()
        const productos = ref([]);
        const isLoading = ref(true);

        onMounted(async() => {
        if (!store.state.productos.length) {
        await store.dispatch('fetchProductos');
        }
        productos.value = store.state.productos; // Acceso correcto al estado de Vuex
        console.log('Productos después del fetch:', productos.value); // Verifica si los productos fueron cargados

        // Cambia el estado de isLoading a false cuando los productos estén cargados
        isLoading.value = false;
        console.log('isLoading (después del fetch):', isLoading.value);
        });

        // Observar cambios en el filtro del estado de Vuex
        watch(
          () => store.state.filtro,
          (nuevoFiltro) => {
            // Actualizar los productos filtrados cuando el filtro cambie
            productos.value = store.getters.productosFiltrados;
          }
        );
        
        return {productos, isLoading}
  }
}
</script>
<style scoped>
.w-20 {
  width: 30% !important;
  float: right !important;
  margin-right: 50px;
  font-size: 20px;
  margin-top: 50px;
  display: none;
}
</style>
