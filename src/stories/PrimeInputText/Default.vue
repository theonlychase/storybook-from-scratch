<script setup lang="ts">
  import controls from './controls';
  import { setDefaultControls } from '@/utils/stories';
  import PrimeInputText from '@/components/ui/PrimeInputText/PrimeInputText.vue';

  const defaultProps = setDefaultControls({
    controls,
    title: 'Default InputText',
    description: 'InputText is an extension to standard input element with theming.',
  });
</script>

<template>
  <PrimeInputText v-bind="defaultProps" />
</template>
