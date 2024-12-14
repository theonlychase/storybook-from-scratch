<script setup lang="ts">
  import { type RouteRecord } from 'vue-router';
  import PanelMenu from 'primevue/panelmenu';

  const navItems = inject<RouteRecord[]>('nav-items');
  const closeSidebar = inject<() => void>('closeSidebar');
  const expandedKeys = ref({ components: true });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parentItems: any = computed(() => {
    const items =
      navItems
        ?.filter((item) => item.meta.parent && item.children.length)
        .map((parent) => {
          // @ts-expect-error - name property in meta
          parent.children.sort((a: never, b: never) => (b.meta.name === 'Default') - (a.meta.name === 'Default'));
          return parent;
        }) ?? [];

    return items.map((item) => {
      const parent = {
        label: item.name,
        key: item.name,
        parent: true,
        route: { name: item.name },
      };

      if (!item.children.length) {
        return parent;
      }

      return {
        ...parent,
        items: item.children.map((child) => ({
          child: true,
          label: child?.meta?.name,
          key: child?.meta?.name,
          route: { name: child.name },
        })),
      };
    });
  });

  const menuComponents = computed(() => [
    {
      label: 'Components',
      key: 'components',
      items: parentItems.value,
    },
  ]);
</script>

<template>
  <div class="flex-shrink-0 flex items-center px-4">
    <wc-icon
      name="templateOutline"
      class="mr-2"
      viewBox="0 0 24 24"
    />
    <div
      class="text-2xl"
      @click="closeSidebar"
    >
      <router-link :to="{ name: 'Dashboard' }">Design System</router-link>
    </div>
  </div>
  <div class="mt-5 flex-1 h-0 overflow-y-auto">
    <nav
      class="px-2 bg-gray-50"
      aria-label="Sidebar"
    >
      <PanelMenu
        v-model:expanded-keys="expandedKeys"
        class="navigation-menu"
        :model="menuComponents"
      >
        <template #item="{ active, hasSubmenu, item }">
          <router-link
            v-if="item.route"
            v-slot="{ isActive }"
            :to="item.route"
          >
            <div
              class="flex items-center gap-x-1.5 font-medium p-1.5 hover:bg-gray-100"
              :class="{
                'bg-gray-200 hover:bg-gray-200': isActive && !hasSubmenu,
                'pl-6': item.parent,
                'pl-12': item.child,
              }"
            >
              <span
                v-if="hasSubmenu"
                class="pi pi-angle-right transition-transform"
                :class="{
                  'rotate-90': active,
                }"
              />

              <span
                class="pi text-[.75rem]"
                :class="{
                  'pi-objects-column': hasSubmenu,
                  'pi-bookmark': !hasSubmenu,
                }"
              />

              {{ item.label }}
            </div>
          </router-link>
          <div
            v-else
            class="flex items-center gap-x-1.5 font-medium p-1.5"
            :class="{
              'p-panelmenu-item--active': active && !hasSubmenu,
            }"
          >
            <span
              v-if="hasSubmenu"
              class="pi pi-angle-right transition-transform"
              :class="{
                'rotate-90': active,
              }"
            />

            <span
              class="pi text-[.75rem]"
              :class="{
                'pi-folder': hasSubmenu,
              }"
            />

            {{ item.label }}
          </div>
        </template>
      </PanelMenu>
    </nav>
  </div>
</template>
