import "./assets/main.css";

import PrimeVue from "primevue/config";
// import 'primevue/resources/themes/saga-blue/theme.css'
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/soho-light/theme.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCKqO6bBg_gAaQyx6hSqiXAGx32HHxe4do",
  authDomain: "learn-vue-b09fc.firebaseapp.com",
  projectId: "learn-vue-b09fc",
  storageBucket: "learn-vue-b09fc.appspot.com",
  messagingSenderId: "348913188400",
  appId: "1:348913188400:web:614ec975d7e5dab750b7f5",
};

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import ToastService from "primevue/toastservice";


initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.mount("#app");
