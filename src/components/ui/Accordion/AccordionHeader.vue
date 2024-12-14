<script setup lang="ts">
  import AccordionHeader from 'primevue/accordionheader';

  const { as = 'BUTTON', asChild = false } = defineProps<{
    as?: string;
    asChild?: boolean;
  }>();
</script>

<template>
  <AccordionHeader
    :as="as"
    :as-child="asChild"
  >
    <template
      v-if="!!$slots.default"
      #default
    >
      <slot name="default" />
    </template>
  </AccordionHeader>
</template>
