<script setup lang="ts">
import { ref, watch } from 'vue';
import { useHolidayStore } from '../store/holidayStore';

const selectedDate = ref<string | null>(null);
const menu = ref(false);
const showMessage = ref(false);
const holidayStore = useHolidayStore();

// Suponiendo que fetchHolidays es una función asíncrona que carga los días festivos
holidayStore.fetchHolidays('CO,es');

const isHoliday = (date: string) => {
  const formattedDate = date.split('T')[0];
  return holidayStore.holidays.some(holiday => holiday.date === formattedDate);
};

const formatDateISO = (date: Date) => date.toISOString().split('T')[0];

const allowedDates = (date: Date) => {
  const currentDate = new Date().setHours(0, 0, 0, 0);
  const selectedDay = date.setHours(0, 0, 0, 0);
  const dayOfWeek = date.getDay();
  const isPastDate = selectedDay < currentDate;
  const isHolidayDate = isHoliday(formatDateISO(date));

  return !isPastDate && dayOfWeek !== 0 && !isHolidayDate;
};

watch(selectedDate, (newDate) => {
  if (newDate) {
    showMessage.value = new Date(newDate).getDay() === 0 || isHoliday(formatDateISO(new Date(newDate)));
    if (showMessage.value) {
      selectedDate.value = null;
    }
  }
});

function checkDate() {
}

// Integración del v-date-picker
const picker = ref<string | null>(null);


</script>

<template>
  <v-container>
    <v-row>
      <v-col class="text-right" cols="12" sm="6" offset-sm="6">
        <v-text-field v-if="!menu" variant="outlined"  v-model="selectedDate" label="Selecciona una fecha"
          prepend-icon="mdi-calendar" readonly @click="menu = !menu"></v-text-field>
        <v-menu v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="200px"
          nudge-left="200">
          <v-locale-provider locale="es-CL">
            <v-date-picker class="calendario" v-model="picker" :first-day-of-week="1" :allowed-dates="allowedDates"
              title="Selecciona una fecha" header="Fecha seleccionada" color="deep-purple accent-4" @input="checkDate">
            </v-date-picker>
          </v-locale-provider>
        </v-menu>
      </v-col>
    </v-row>

    <div v-if="showMessage" class="message">
      Los domingos y días festivos no se pueden seleccionar.
    </div>
  </v-container>
</template>


<style scoped>
.message {
  color: red;
}

.calendario {
  width: 100%;
  margin-left: 280%;
  display: flex;
  margin-top: 170px;
}
</style>
