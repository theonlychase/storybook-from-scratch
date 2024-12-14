<script setup lang="ts">
  import Button from 'primevue/button';

  const {
    as = 'BUTTON',
    badge,
    badgeSeverity,
    disabled = false,
    fluid = false,
    icon,
    iconPos = 'left',
    label,
    link = false,
    loading = false,
    outlined = false,
    raised = false,
    rounded = false,
    size,
    severity,
    variant,
  } = defineProps<{
    as?: string;
    badge?: string;
    badgeSeverity?: 'secondary' | 'success' | 'info' | 'warn' | 'help' | 'danger' | 'contrast';
    disabled?: boolean;
    fluid?: boolean;
    icon?: string;
    iconPos?: 'left' | 'right' | 'top' | 'bottom';
    label?: string;
    link?: boolean;
    loading?: boolean;
    outlined?: boolean;
    raised?: boolean;
    rounded?: boolean;
    size?: 'small' | 'large';
    severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'help' | 'danger' | 'contrast';
    variant?: 'text' | 'outlined' | 'link';
  }>();
</script>

<template>
  <Button
    :as="as"
    :badge="badge"
    :badgeSeverity="badgeSeverity"
    :disabled="disabled"
    :fluid="fluid"
    :icon="icon"
    :iconPos="iconPos"
    :label="label"
    :link="link"
    :loading="loading"
    :outlined="outlined"
    :raised="raised"
    :rounded="rounded"
    :size="size"
    :severity="severity"
    :variant="variant"
  />
</template>
