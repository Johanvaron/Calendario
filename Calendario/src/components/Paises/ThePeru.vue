<script setup lang="ts">
import { ref } from 'vue';
import TheHeader from '../TheHeader.vue';

const holidays = ref([
  { date: 'Viernes 29 Marzo', name: 'Viernes Santo' },
  { date: 'Miércoles 01 Mayo', name: 'Día del Trabajo' },
  { date: 'Viernes 07 Junio', name: ' Batalla de Arica y Día de la Bandera' },
  { date: 'Sábado 29 Junio', name: 'Día de San Pedro y San Pablo ' },
  { date: 'Martes 23 Julio', name: 'Día de la Fuerza Aérea de perú' },
  { date: 'Domingo 28 Julio', name: 'Día de la Independencia' },
  { date: 'Lunes 29 Julio', name: ' Fiestas Patrias' },
  { date: 'Martes 06 Agosto', name: ' Batalla de Junín' },
  { date: 'Viernes 30 Agosto', name: 'Santa Rosa de Lima' },
  { date: 'Martes 08 Octubre', name: 'Combate de Angamos' },
  { date: 'Viernes 01 Noviembre', name: ' Día de Todos los Santos' },
  { date: 'Domingo 08 Diciembre', name: ' Inmaculada Concepción' },
  { date: 'Lunes 09 Diciembre', name: ' Batalla de Ayacucho' },
]);

// Aquí agregamos la función que maneja el evento de selección de país
function onCountrySelected(country: string) {
  console.log(`Se ha seleccionado ${country}`);
}
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
        <div class=" boton-p text-left my-4" cols="12" sm="6" md="4" >
          <v-btn class="button-row" id="festivos-peru-activator" color="deep-purple accent-4">
            Festivos Perú
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

.bton-p{
  margin-right: 10px; 
}

.flag-icon {
  margin-right: 10px;
  width: 30px;
  height: auto;
}
</style>