<script setup lang="ts">
import { ref } from 'vue';
import TheHeader from '../TheHeader.vue';
import TheCalendar from '../TheCalendar.vue';

// Datos simulados de feriados de Chile, deberás remplazarlos con los datos reales
const holidays = ref([
  // Estos son ejemplos, necesitas reemplazarlos con los feriados reales de Chile
  { date: '1 de Enero', name: 'Año Nuevo' },
  { date: '19 de Abril', name: 'Viernes Santo' },
  { date: '1 de Mayo', name: 'Día del Trabajador' },
  { date: '21 de Mayo', name: 'Día de las Glorias Navales' },
  { date: '16 de Julio', name: 'Día de la Virgen del Carmen' },
  { date: '18 de Septiembre', name: 'Independencia Nacional' },
  { date: '19 de Septiembre', name: 'Día de las Glorias del Ejército' },
  { date: '12 de Octubre', name: 'Día del Descubrimiento de Dos Mundos' },
  { date: '31 de Octubre', name: 'Día de las Iglesias Evangélicas y Protestantes' },
  { date: '1 de Noviembre', name: 'Día de Todos los Santos' },
  { date: '25 de Diciembre', name: 'Navidad' },
]);

// Aquí va tu código para manejar el evento de seleccionar un país
const onCountrySelected = (country: string) => {
  console.log(`Has seleccionado ${country}`);
};
</script>

<template>
  <TheHeader />
  <v-container>
    <v-row>
      <!-- Columna para los desplegables -->
      <v-col cols="12" md="6">
        <!-- Desplegable para seleccionar el país -->
        <TheDesplegable @country-selected="onCountrySelected" />
        <!-- Botón de Festivos Perú -->
        <div class="text-left  my-4" cols="12" sm="6" md="4">
          <v-btn cols="12" id="festivos-peru-activator" color="deep-purple accent-4">
            Festivos Chile
          </v-btn>
          <!-- Menú desplegable para los festivos de Perú -->
          <v-menu activator="#festivos-peru-activator" offset-y>
            <v-list>
              <v-list-item v-for="(holiday, index) in holidays" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ holiday.date }}: {{ holiday.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <!-- Añadir aquí el botón y menú desplegable para Festivos Chile si es necesario -->
      </v-col>

      <!-- Columna para el calendario -->
      <v-col cols="12" md="6">
        <TheCalendar :holidays="holidays" />
      </v-col>
    </v-row>
  </v-container>
  <TheFooter />
</template>

<style scoped>
.holiday-item {
  display: flex;
  align-items: center;
}

.flag-icon {
  margin-right: 10px;
  width: 30px;
  /* O el tamaño que prefieras */
  height: auto;
}

/* Puedes añadir estilos adicionales si es necesario */
</style>