<script setup lang="ts">
  import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <DefaultLayout>
      <template
        v-if="route.meta.static"
        #page
      >
        <component :is="Component" />
      </template>

      <template
        v-else
        #story
      >
        <component :is="Component" />
      </template>
    </DefaultLayout>
  </router-view>
</template>
