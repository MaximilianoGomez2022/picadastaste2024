import { createStore } from 'vuex';
import { collection, getDocs } from 'firebase/firestore'; // Funciones de Firestore
import { db } from '../firebase.js'; // Importa la configuración de Firebase

export default createStore({
  state: {
    productos: [],
    carrito : {},
    filtro : '',
    agrego: false,
    clicks: 0
  },
  getters: {
    getProductos: (state) => state.productos,
    getClicks: (state) => state.clicks,
    getCarrito: (state) => state.carrito,
    getFiltro: (state) => state.filtro,
    productosFiltrados(state) {
      if (state.filtro === '') {
        return state.productos; // Si no hay filtro, devuelve todos los productos
      }
      // Filtra productos según el filtro seleccionado
      return state.productos.filter(producto =>
        producto.categoria.includes(state.filtro)
      );
    },
  },
  mutations: {
    setProductos(state, productos) {
      state.productos = productos;
    },
    setCarrito(state, payload) {
      state.carrito[payload.id] = payload
    },
    setFiltro(state, payload) {
      state.filtro = payload
    },
    setClicks(state, payload) {
      state.clicks = payload
      console.log(state.clicks)
    },
    eliminarDelCarrito(state, productoId) {
      const { [productoId]: removed, ...restoCarrito } = state.carrito;
      state.carrito = restoCarrito;
    }
  },
  actions: {
    async fetchProductos({ commit }) {
      try {
        // Obtener los cursos desde Firestore
        const productosSnapshot = await getDocs(collection(db, 'Productos'));
        const productos = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        commit('setProductos', productos);
        console.log(productos)
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    },
    agregarAlCarrito({ commit,state }, producto) {
      state.carrito.hasOwnProperty(producto.id)
      ? producto.cantidad = state.carrito[producto.id].cantidad + 1
      : producto.cantidad = 1
      commit('setCarrito', producto);
    },
    quitarDelCarrito({ commit, state }, producto) {
      if (state.carrito.hasOwnProperty(producto.id)) {
        const cantidadActual = state.carrito[producto.id].cantidad;
    
        if (cantidadActual > 1) {
          // Si hay más de uno, simplemente reducimos la cantidad
          producto.cantidad = cantidadActual - 1;
          commit('setCarrito', producto);
        } else {
          // Si la cantidad es 1, removemos el producto del carrito
          commit('eliminarDelCarrito', producto.id);
        }
      }
    },
    agregarFiltro({commit}, filtro) {
      commit('setFiltro', filtro)
    },
    sumarClicks({commit}) {
      let payload = this.state.clicks + 1
      commit('setClicks', payload)
    },
    restarClicks({commit}) {
      let payload = this.state.clicks - 1
      commit('setClicks', payload)
    }
  },
  modules: {
  }
})
