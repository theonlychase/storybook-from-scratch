<script setup lang="ts">
  import controls from './controls';
  import { setDefaultControls } from '@/utils/stories';
  import PrimeInputText from '@/components/ui/PrimeInputText/PrimeInputText.vue';

  const defaultProps = setDefaultControls({
    controls,
    title: 'Default Select',
  });
</script>

<template>
  <PrimeInputText v-bind="defaultProps" />
</template>
