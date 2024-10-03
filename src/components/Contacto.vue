<template>
      <section id="contacto">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <form d-flex align-items-center>
              <h2>Contactanos</h2>
                <div class="mb-3">
                  <label for="" class="form-label">Inline Form</label>
                  <input
                    type="mail"
                    name=""
                    id=""
                    class="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                  />
                  <small id="helpId" class="text-muted">E-mail</small>
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Inline Form</label>
                  <input
                    type="mail"
                    name=""
                    id=""
                    class="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                  />
                  <small id="helpId" class="text-muted">E-mail</small>
              </div>
              <div class="mb-3 textarea-form">
              <label for="" class="form-label"></label>
              <textarea class="form-control" name="" id="" rows="3"></textarea>
            </div>
            <div class="text-end">
              <button type="submit" class="btn btn-secondary">Enviar</button>
          </div>   
            </form>           
          </div>
        <div class="col-md-6 redes">
            <h3>Nuestras Redes</h3>
            <div class="row text-center">
                <div class="col-3">
                    <i class="fab fa-facebook"></i>
                </div>
                <div class="col-3">
                    <i class="fab fa-twitter"></i>
                </div>
                <div class="col-3">
                    <i class="fab fa-instagram"></i>
                </div>
                <div class="col-3">
                    <i class="fab fa-whatsapp"></i>
                </div>
            </div>
            <div class="ubicacion mt-5">
              <h3>Nuestra Ubicación</h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13136.066850016401!2d-58.3815704!3d-34.6037389!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1727734108293!5m2!1ses-419!2sar" height="170" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
  iframe {
    width: 100%;
    border-radius: 5px;
  }

  button {
    float: right;
  }

  .text-end {
    width: 100% !important;
  }
</style>