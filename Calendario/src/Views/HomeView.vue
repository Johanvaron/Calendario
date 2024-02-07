<template>
  <TheHeader/> 

  <!-- Contenedor para el desplegable y el calendario -->
  <v-container>
    <v-row>
      
      <!-- Componente desplegable para seleccionar el país -->
      <v-col cols="12" md="6">
        <TheDesplegable @country-selected="onCountrySelected"/>
      </v-col>

      <!-- Componente del calendario -->
      <v-col cols="12" md="6">
        <TheCalendar :selected-country="selectedCountry"/>
      </v-col>

      <!-- Si tienes un componente para listar feriados, lo puedes incluir aquí también -->
      <!--
      <v-col cols="12" md="6">
        <HolidayList :holidays="holidays"/>
      </v-col>
      -->

    </v-row>
  </v-container>

  <TheFooter/>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TheHeader from '@/components/TheHeader.vue';
import TheDesplegable from '@/components/TheDesplegable.vue';
import TheCalendar from '@/components/TheCalendar.vue';
import TheFooter from '@/components/TheFooter.vue';
// Importa HolidayList si tienes un componente para listar feriados
// import HolidayList from '@/components/HolidayList.vue';

const selectedCountry = ref(null);

function onCountrySelected(country:any) {
  selectedCountry.value = country;
  // Implementa la actualización de los feriados aquí
}
</script>

<style scoped>
/* Tus estilos aquí */
</style>
