<script setup lang="ts">
  import controls from './controls';
  import { setDefaultControls } from '@/utils/stories';
  import Button from '@/components/ui/Button/Button.vue';

  const defaultProps = setDefaultControls({
    controls,
    title: 'Default Button',
    description: 'Button is an extension to standard button element with icons and theming.',
  });
</script>

<template>
  <Button v-bind="defaultProps" />
</template>
