<script setup lang="ts">
  import controls from './controls';
  import { setDefaultControls } from '@/utils/stories';
  import PrimeSelect from '@/components/ui/PrimeSelect/PrimeSelect.vue';

  const defaultProps = setDefaultControls({
    controls,
    title: 'Default Select',
  });
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
</script>

<template>
  <PrimeSelect
    v-bind="defaultProps"
    :options="options"
  />
</template>
