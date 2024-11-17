<script setup lang="ts">
  import Sidebar from '@/components/layout/Sidebar/Sidebar.vue';
  import Page from '@/components/layout/Page/Page.vue';
  import { type PageMeta } from '@/types/global';

  const pageMeta: PageMeta = reactive({
    description: '',
    title: '',
  });

  provide('pageMeta', pageMeta);
</script>

<template>
  <Sidebar />
  <Page>
    <template #page>
      <slot name="page" />
    </template>

    <template #story>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </template>
  </Page>
</template>
