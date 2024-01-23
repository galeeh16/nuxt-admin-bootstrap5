import VueApexCharts from "vue3-apexcharts";

export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp
    nuxtApp.vueApp.use(VueApexCharts);
});