<script setup lang="ts">
  import controls from './controls';
  import { setDefaultControls } from '@/utils/stories';
  import PrimeButton from '@/components/ui/PrimeButton/PrimeButton.vue';

  const defaultProps = setDefaultControls({
    controls,
    title: 'Default Button',
    description: 'Button is an extension to standard button element with icons and theming.',
  });
</script>

<template>
  <PrimeButton v-bind="defaultProps" />
</template>
