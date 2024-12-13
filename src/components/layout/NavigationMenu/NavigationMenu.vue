<script setup lang="ts">
  import { type RouteRecord } from 'vue-router';
  import PanelMenu from 'primevue/panelmenu';

  const navItems = inject<RouteRecord[]>('nav-items');
  const closeSidebar = inject<() => void>('closeSidebar');

  // @ts-expect-error: model prop type is incorrect.
  const parentItems: never = computed(() => {
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
        parent: true,
        route: { name: item.name },
      };

      if (!item.children.length) {
        return parent;
      }

      return {
        ...parent,
        items: item.children.map((child) => ({
          label: child?.meta?.name,
          route: { name: child.name },
        })),
      };
    });
  });
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
      <router-link :to="{ name: 'Dashboard' }">UI Library</router-link>
    </div>
  </div>
  <div class="mt-5 flex-1 h-0 overflow-y-auto">
    <nav
      class="px-2 bg-gray-50"
      aria-label="Sidebar"
    >
      <PanelMenu
        class="navigation-menu"
        :model="parentItems"
      >
        <template #item="{ active, hasSubmenu, item }">
          <router-link
            v-slot="{ isActive }"
            :to="item.route"
          >
            <div
              class="flex items-center gap-x-1.5 text-sm font-medium"
              :class="{
                'p-panelmenu-item--active': isActive && !hasSubmenu,
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
                class="pi text-[.65rem]"
                :class="{
                  'pi-objects-column': hasSubmenu,
                  'pi-bookmark': !hasSubmenu,
                }"
              />

              {{ item.label }}
            </div>
          </router-link>
        </template>
      </PanelMenu>
    </nav>
  </div>
</template>
