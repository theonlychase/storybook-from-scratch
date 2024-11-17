<script setup lang="ts">
  import Tab from 'primevue/tab';

  const {
    as = 'BUTTON',
    asChild = false,
    disabled = false,
    value,
  } = defineProps<{
    as?: string;
    asChild?: boolean;
    disabled?: boolean;
    value: string | number;
  }>();
</script>

<template>
  <Tab
    :as="as"
    :as-child="asChild"
    :disabled="disabled"
    :value="value"
  >
    <template
      v-if="!!$slots.default"
      #default
    >
      <slot name="default" />
    </template>
  </Tab>
</template>
