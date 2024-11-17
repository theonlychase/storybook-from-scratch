<script setup lang="ts">
  import { type RouteRecord } from 'vue-router';
  import NavigationMenuItem from '@/components/layout/NavigationMenuItem/NavigationMenuItem.vue';

  const navItems = inject<RouteRecord[]>('nav-items');
  const closeSidebar = inject<() => void>('closeSidebar');

  const parentItems = navItems
    ?.filter((item) => item.meta.parent && item.children.length)
    .map((parent) => {
      // @ts-expect-error - name property in meta
      parent.children.sort((a: any, b: any) => (b.meta.name === 'Default') - (a.meta.name === 'Default'));
      return parent;
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
      class="px-2 space-y-1 bg-gray-50"
      aria-label="Sidebar"
    >
      <NavigationMenuItem
        v-for="{ name, path, children } in parentItems"
        :key="name"
        :children="children"
        :name="name"
        :path="path"
      />
    </nav>
  </div>
</template>
