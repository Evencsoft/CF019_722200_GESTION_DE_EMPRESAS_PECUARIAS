<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Parámetros reproductivos en las especies pecuarias
    
    
    Separador
    .row
      .col-xl-12       
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 3.1 Fisiología de la reproducción natural
      
    Separador
    .row
      .col-xl-12       
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 3.2 Definición y descripción de ciclo estral de los animales domésticos

    Separador
    .row
      .col-xl-12       
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 3.3 Proceso reproductivo de la monta natural

    Separador
    .row
      .col-xl-12       
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 3.4 Cronograma de proceso de monta natural en animales domésticos

    Separador
    .row
      .col-xl-12       
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 3.5 Comportamiento reproductivo animal

    Separador
    .row
      .col-xl-12       
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 3.6 Gestación por especie animal

    Separador
    .row
      .col-xl-12       
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 3.7 Evaluación de parámetros reproductivos

</template>

<script>
export default {
  name: 'Tema3',
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
