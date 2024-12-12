<script setup lang="ts">
  import ControlsPanel from '@/components/layout/ControlsPanel/ControlsPanel.vue';
  import type { PageMeta } from '@/types/global';

  const meta = inject<PageMeta>('pageMeta');
</script>

<template>
  <main class="md:pl-64 flex-1 flex flex-col">
    <div class="p-4 sm:px-6 md:px-8">
      <h1 class="text-2xl font-semibold text-gray-900">
        {{ meta?.title || $route.name }}
      </h1>
      <div
        v-if="meta?.description"
        class="text-sm text-gray-400"
      >
        {{ meta.description }}
      </div>
    </div>

    <div class="px-4 sm:px-6 md:px-8 max-w-7xl flex-1">
      <div class="py-4 mb-16">
        <slot name="page" />
        <slot name="story" />
      </div>
    </div>

    <controls-panel v-if="!$route.meta.static" />
  </main>
</template>
