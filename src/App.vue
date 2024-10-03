<template>
    <header class="fixed-top">
      <div v-if="isDivVisible">
      <ProductoElegido/>
      </div>
      
      <a href="/">
      <h1 id="logo">Picadas taste</h1>
      </a>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">

        <div class="container-fluid">

          <button class="navbar-toggler ms-auto" type="button"
                  data-bs-toggle="collapse" 
                  data-bs-target="#barra" 
                  aria-controls="barra" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="barra">
            <ul class="navbar-nav ms-auto text-center">
              <li class="nav-item">
                <i class="fas fa-home" style="font-size:12px; color:white;"></i>
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <i class="fas fa-info-circle" style="font-size:12px; color:white;"></i>
                <router-link class="nav-link" to="#nosotros" exact>Nosotros</router-link>
              </li>
              <li class="nav-item">
                <i class="fas fa-envelope" style="font-size:12px; color:white;"></i>
                <router-link class="nav-link" to="#contacto" exact>Contacto</router-link>
              </li>
                <div id="imgcarrito">
                <router-link to="/carrito">
                <img src="/carrito.png" alt="imagen carrito">
                <p>{{clicks}}</p>
                </router-link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
  </header>
  <main>
  <router-view></router-view>
  </main> 
</template>

<script>

import ProductoElegido from '@/components/ProductoElegido.vue'
import { computed } from 'vue';
import { useStore } from 'vuex';

export default ({
  components: {
    ProductoElegido
  },
  setup() {
    const store = useStore();

    // Computed para manejar la visibilidad del div desde el store
    const isDivVisible = computed(() => store.state.agrego);
    const clicks = computed(() => store.state.clicks);

    return {
      isDivVisible,
      clicks
    };
  }
})
</script>

<style scoped>
  #imgcarrito {
    width: 100px;
  }
  #imgcarrito img {
    display: inline-block;
    width: 40px;
  }
  #imgcarrito p {
      display: inline-block;
    }
</style>

