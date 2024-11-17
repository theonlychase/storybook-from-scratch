import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { createRouter, createWebHistory } from 'vue-router';
import { parse, stringify } from 'qs';
import { routes, routeComponents } from './routes';
import { defaultControlState } from './utils/stories';
import dynamicRoutes from './utils/dynamicRoutes';
import './assets/styles/tailwind.css';
import 'primeicons/primeicons.css';
import App from './App.vue';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes,
  parseQuery: parse,
  stringifyQuery: stringify,
});

dynamicRoutes(routeComponents, app, router);

const navItems = router.getRoutes();
app.provide('nav-items', navItems);
app.provide('controlState', defaultControlState);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities',
      },
      darkModeSelector: false,
    },
  },
});
app.use(router).mount('#app');
