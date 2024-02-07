<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const selectedOption = ref(null);

//redireccionanmiento 
const countryOptions = ref([
    { text: 'Perú', value: 'Peru' },
    { text: 'Chile', value: 'Chile' }
]);

const navigate = () => {
    if (!selectedOption.value) return;
    let path = `/${selectedOption.value}`;
    router.push(path);
};
</script>
<template>
    <v-container>
        <v-row>
            <v-col class="text-left" cols="12" sm="6" md="4">
                <v-select item-title="text" v-model="selectedOption" :items="countryOptions" label="Seleccione una opción"
                    single-line variant="outlined" @change="countryOptions"></v-select>
            </v-col>
        </v-row>

        <v-row justify="start" align="center" class="button-row">
            <v-col cols="12">
                <v-btn class="mi-boton text-white" color="deep-purple accent-4" @click="navigate">Continuar</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
  
  
  
<style scoped>
.mi-boton {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
    text-align: center;
}
</style>
