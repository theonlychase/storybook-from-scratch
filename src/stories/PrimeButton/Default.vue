<script setup lang="ts">
  import controls from './controls';
  import { setDefaultControls } from '@/utils/stories';
  import PrimeButton from '@/components/ui/PrimeButton/PrimeButton.vue';

  const defaultProps = setDefaultControls({
    controls,
    title: 'Default Button',
  });
</script>

<template>
  <PrimeButton v-bind="defaultProps" />
</template>
