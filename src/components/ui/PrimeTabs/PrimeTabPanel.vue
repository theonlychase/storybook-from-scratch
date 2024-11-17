<script setup lang="ts">
  import TabPanel from 'primevue/tabpanel';

  const {
    as = 'BUTTON',
    asChild = false,
    value,
  } = defineProps<{
    as?: string;
    asChild?: boolean;
    value: string | number;
  }>();
</script>

<template>
  <TabPanel
    :as="as"
    :as-child="asChild"
    :value="value"
  >
    <template
      v-if="!!$slots.default"
      #default
    >
      <slot name="default" />
    </template>
  </TabPanel>
</template>
