<template>
  <section id="banner">
      <div id="texto-banner" class="container">
        <h2>¡ Hacé tu pedido !</h2>
        <p>20% de Descuento en tu primer compra</p>
        <p>El sabor en tu paladar</p>
        <p>Disfrutá los mejores fiambres<br/> para compartir en esos momentos especiales.</p>
        <router-link class="btn btn-secondary" to="#carrito-section" exact>Nuestros Productos</router-link>
      </div>
      <figure>                  
        <picture >
          <source media="(max-width: 470px)" srcset="/banner-cel-chico.jpg">
            <source media="(max-width: 576px)" srcset="/banner-cel.jpg">
            <source media="(max-width: 768px)" srcset="/banner-tablet.jpg">
            <img src="/banner-2024.jpg" class="d-block w-90" alt="banner-taste">
        </picture>
    </figure>
    </section>
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style>

</style>