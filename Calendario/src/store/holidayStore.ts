import { defineStore } from 'pinia';

// Define las interfaces para representar la estructura de los datos
interface Holiday {
  date: string;
  name: string;
}

interface Event {
  name: string;
  start: string;
  end: string;
}

// Define y exporta el store utilizando defineStore de pinia
export const useHolidayStore = defineStore({
  id: 'holiday', // Un identificador único para este store
  state: () => ({
    holidays: [] as Holiday[], //almacenará datos de vacaciones
    events: [] as Event[], //almacenará datos de eventos
    country: 'CO',
  }),
  getters: {
    // Un getter que transforma los datos de vacaciones en datos de eventos
    holidayEvents: (state): Event[] => {
      return state.holidays.map(holiday => ({
        name: holiday.name,
        start: holiday.date,
        end: holiday.date,
        timed: false,
      }));
    },
  },
  actions: {
    // Una acción asincrónica para cargar datos de vacaciones desde una API externa
    async fetchHolidays(countryCode: string, language: string = 'es') {
      try {
        // Realiza una solicitud HTTP para obtener datos de vacaciones con el parámetro de idioma
        const response = await fetch(`https://date.nager.at/api/v3/publicholidays/2024/${countryCode}?language=${language}`);
        if (!response.ok) {
          throw new Error('Failed to fetch holidays');
        }
        // Parsea la respuesta JSON y almacena los datos en el array de vacaciones
        const holidaysData = await response.json();
        this.holidays = holidaysData.map((holiday: any) => ({
          date: holiday.date,
          name: holiday.name
        }));
        //Se actualiza el array 
        this.events = this.holidayEvents;
      } catch (error) {
        //errores que se mostrarán en la consola 
        console.error("Error fetching holidays:", error);
      }
    },
  },
});
