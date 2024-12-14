<script setup lang="ts">
  import AccordionContent from 'primevue/accordioncontent';

  const { as = 'DIV', asChild = false } = defineProps<{
    as?: string;
    asChild?: boolean;
  }>();
</script>

<template>
  <AccordionContent
    :as="as"
    :as-child="asChild"
  >
    <template
      v-if="!!$slots.default"
      #default
    >
      <slot name="default" />
    </template>
  </AccordionContent>
</template>
