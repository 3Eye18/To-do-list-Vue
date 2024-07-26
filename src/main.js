import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store';

import "./assets/style/tailwind.css";
import "./assets/style/global.css";

// import the fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";

// import fontawesome icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// import icon style(s)
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// add the icon style(s) you have installed to the library
library.add(fas, far, fab);

let app

import { registerGlobalComponent } from "./utils/import";
import { projectAuth } from "./configs/firebase";
projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)

        registerGlobalComponent(app)

        app.component('font-awesome-icon', FontAwesomeIcon)
        app.use(store)
        app.use(router)

        app.mount("#app"); 
    }
})
