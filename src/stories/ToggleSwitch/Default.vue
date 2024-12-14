<script setup lang="ts">
  import controls from './controls';
  import { setDefaultControls } from '@/utils/stories';
  import ToggleSwitch from '@/components/ui/ToggleSwitch/ToggleSwitch.vue';

  const defaultProps = setDefaultControls({
    controls,
    title: 'Default ToggleSwitch',
    description: 'ToggleSwitch is used to select a boolean value.',
  });
</script>

<template>
  <ToggleSwitch v-bind="defaultProps" />
</template>
