import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import Firebase from "firebase/compat/app";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

import "primevue/resources/themes/nova-alt/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

Vue.config.productionTip = false;
Vue.component("DataTable", DataTable);
Vue.component("Column", Column);

let app = null;

Firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
