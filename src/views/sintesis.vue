<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Se resume el componente formativo: Reproducción natural en las especies pecuarias, que trata los temas sobre la anatomía y bienestar animal en procesos productivos de la especie pecuaria, incluyendo la bioseguridad y manejo de los animales destinados para reproducción natural, teniendo en cuenta las enfermedades reproductivas. También se trata el tema sobre los parámetros productivos en la especie pecuaria, su fisiología, comportamiento reproductivo, de animales y la gestación, de la misma forma se destaca el tema sobre procedimientos estandarizados de seguridad en el trabajo, como también la explotación destinada a la reproducción animal, al mismo tiempo se resaltan las buenas prácticas pecuarias en procedimientos, registros y manejo en reproducción animal.
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
