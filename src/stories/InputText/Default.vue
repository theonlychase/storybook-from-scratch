<script setup lang="ts">
  import controls from './controls';
  import { setDefaultControls } from '@/utils/stories';
  import InputText from '@/components/ui/InputText/InputText.vue';

  const defaultProps = setDefaultControls({
    controls,
    title: 'Default InputText',
    description: 'InputText is an extension to standard input element with theming.',
  });
</script>

<template>
  <InputText v-bind="defaultProps" />
</template>
