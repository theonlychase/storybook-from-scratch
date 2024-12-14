<script setup lang="ts">
  import AccordionPanel from 'primevue/accordionpanel';

  const {
    as = 'DIV',
    asChild = false,
    disabled = false,
    value,
  } = defineProps<{
    as?: string;
    asChild?: boolean;
    disabled?: boolean;
    value?: string | number;
  }>();
</script>

<template>
  <AccordionPanel
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
  </AccordionPanel>
</template>
