import { createI18n } from 'vue-i18n';
import es from 'vuetify/lib/locale/es';

// Define the messages in Spanish
const messages = {
  es: {
    ...es, // Utilize the object expansion to include the Vuetify messages
    // You can add or override custom messages if necessary
  },
};

// Create the vue-i18n instance
const i18n = createI18n({
  legacy: false, // Set this to false for Vue 3
  locale: 'es', // Set the default language
  fallbackLocale: 'es', // Set the fallback language
  messages, // Set the locale messages
});

export default i18n;