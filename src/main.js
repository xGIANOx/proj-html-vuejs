import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faFolderTree } from "@fortawesome/free-solid-svg-icons";


library.add(faCartShopping);
library.add(faFolderTree);


import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
