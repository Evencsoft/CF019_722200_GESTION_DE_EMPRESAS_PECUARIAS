<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Procedimientos estandarizados y de seguridad en el trabajo en la explotación destinada a la reproducción animal
      
      
      Separador
      .row
        .col-xl-12       
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2.my-5 4.1 Definición y aplicación del POE en reproducción natural
        
      Separador
      .row
        .col-xl-12       
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2.my-5 4.2 Tipos, procedimiento, registros y manejo en reproducción natural
  
      Separador
      .row
        .col-xl-12       
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2.my-5 4.3 Buenas prácticas pecuarias en reproducción natural
  
      Separador
      .row
        .col-xl-12       
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2.my-5 4.4 Normas de salud y seguridad en el trabajo y medio ambiente en explotaciones pecuarias dedicadas a la reproducción animal
  
  
  </template>

<script>
export default {
  name: 'Tema4',
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
