import type { RouteLocationNormalized, RouteMap, RouteMeta } from 'vue-router';

function dynamicPropsFn(route: RouteMap) {
  Object.keys(route.query).forEach((key) => {
    if (route.query[key] === 'true' || route.query[key] === 'false') {
      route.query[key] = route.query[key] === 'true';
    }
  });

  return { ...route.query };
}

function getComponentPath(path: string) {
  const componentName =
    path
      .split('/')
      .pop()
      ?.replace(/\.\w+$/, '') ?? '';
  const name = componentName.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-');
  const routePath = name.toLowerCase();

  return { componentName, name, routePath };
}

function removeQueryParams(to: RouteLocationNormalized) {
  if (Object.keys(to.query).length) return { path: to.path, query: {} };
}

export default function dynamicRoutes({ components, stories, pages }, app, router) {
  // TODO - Fix issue with child components being added as parents if they include a part of the parent component name
  const disabledComponents = ['Tab'];

  // Global Components and Routes for UI and Stories
  Object.entries(components).forEach(([path, component]) => {
    const { componentName: parent, routePath } = getComponentPath(path);

    const children: Array<RouteMeta> = [];
    Object.entries(stories).forEach(([storyPath, story]) => {
      if (storyPath.includes(parent) && !disabledComponents.includes(parent)) {
        const { componentName, name, routePath: variation } = getComponentPath(storyPath);

        const storyName = name.replaceAll('-', ' ');

        children.push({
          name: `${parent}-${componentName}`,
          path: variation,
          component: () => import(`../stories/${parent}/${componentName}.vue`),
          meta: { parent, name: storyName },
          beforeRouteEnter(to) {
            removeQueryParams(to);
          },
          props: dynamicPropsFn,
        });
      }
    });

    // redirect to first child, which now, should always be default
    const childToRedirect = children.find((child: any) => child.meta.name.toLowerCase() === 'default');
    const redirect = children.length ? { name: childToRedirect ? childToRedirect.name : children[0].name } : parent;

    const parentRoute = {
      name: parent,
      path: `/${routePath}`,
      component: () => import(`../components/ui/${parent}/${parent}.vue`),
      meta: { parent: true },
      props: dynamicPropsFn,
      redirect,
      children,
    };

    router.addRoute(parentRoute);

    app.component(
      parent,
      defineAsyncComponent(() => import(`../components/ui/${parent}/${parent}.vue`)),
    );
  });

  // Global Page Components and Routes
  Object.entries(pages).forEach(([path, component]) => {
    const { componentName, routePath } = getComponentPath(path);
    const homePath = componentName === 'Dashboard';

    const pageRoute = {
      name: componentName,
      path: homePath ? '/' : `/${routePath}`,
      component: () => import(`../pages/${componentName}/${componentName}.vue`),
      meta: {
        static: true,
      },
    };

    router.addRoute(pageRoute);

    app.component(
      componentName,
      defineAsyncComponent(() => import(`../pages/${componentName}/${componentName}.vue`)),
    );
  });
}
