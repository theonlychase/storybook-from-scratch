<script setup lang="ts">
  import Accordion from 'primevue/accordion';

  const {
    lazy = false,
    multiple = false,
    selectOnFocus = false,
    value = null,
  } = defineProps<{
    lazy?: boolean;
    multiple?: boolean;
    selectOnFocus?: boolean;
    value?: null | string | number | string[] | number[];
  }>();
</script>

<template>
  <Accordion
    :lazy="lazy"
    :multiple="multiple"
    :select-on-focus="selectOnFocus"
    :value="value"
  >
    <template
      v-if="!!$slots.default"
      #default
    >
      <slot name="default" />
    </template>
  </Accordion>
</template>
