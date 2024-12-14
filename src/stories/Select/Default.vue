<script setup lang="ts">
  import controls from './controls';
  import { setDefaultControls } from '@/utils/stories';
  import Select from '@/components/ui/Select/Select.vue';

  const defaultProps = setDefaultControls({
    controls,
    title: 'Default Select',
    description: 'Select is used to choose an item from a collection of options.',
  });
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
</script>

<template>
  <Select
    v-bind="defaultProps"
    :options="options"
  />
</template>
