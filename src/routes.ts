import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/not-found',
  },
];

const components = import.meta.glob('./components/ui/**/*.vue', { eager: true });
const pages = import.meta.glob('./pages/**/*.vue', { eager: true });
const stories = import.meta.glob('./stories/**/*.vue', { eager: true });

// Import all Component, Page, & Story Modules via Glob Imports
const routeComponents = {
  components,
  pages,
  stories,
};

export { routes, routeComponents };
