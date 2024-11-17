<script setup lang="ts">
  import TabList from 'primevue/tablist';
</script>

<template>
  <TabList>
    <template
      v-if="!!$slots.default"
      #default
    >
      <slot name="default" />
    </template>
  </TabList>
</template>
