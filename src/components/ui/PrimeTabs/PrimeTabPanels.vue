<script setup lang="ts">
  import TabPanels from 'primevue/tabpanels';
</script>

<template>
  <TabPanels>
    <template
      v-if="!!$slots.default"
      #default
    >
      <slot name="default" />
    </template>
  </TabPanels>
</template>
