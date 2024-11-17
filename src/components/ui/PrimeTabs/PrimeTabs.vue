<script setup lang="ts">
  import Tabs from 'primevue/tabs';

  const {
    lazy = false,
    scrollable = false,
    selectOnFocus = false,
    showNavigators = true,
    value,
  } = defineProps<{
    lazy?: boolean;
    scrollable?: boolean;
    selectOnFocus?: boolean;
    showNavigators?: boolean;
    value: string | number;
  }>();
</script>

<template>
  <Tabs
    :lazy="lazy"
    :scrollable="scrollable"
    :select-on-focus="selectOnFocus"
    :show-navigators="showNavigators"
    :value="value"
  >
    <template
      v-if="!!$slots.default"
      #default
    >
      <slot name="default" />
    </template>
  </Tabs>
</template>
