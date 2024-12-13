<script setup lang="ts">
  import controls from './controls';
  import { setDefaultControls } from '@/utils/stories';
  import PrimeToggleSwitch from '@/components/ui/PrimeToggleSwitch/PrimeToggleSwitch.vue';

  const defaultProps = setDefaultControls({
    controls,
    title: 'Default ToggleSwitch',
    description: 'ToggleSwitch is used to select a boolean value.',
  });
</script>

<template>
  <PrimeToggleSwitch v-bind="defaultProps" />
</template>
