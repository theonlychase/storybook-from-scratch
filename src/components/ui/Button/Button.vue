<script setup lang="ts">
  import Button from 'primevue/button';

  const {
    as = 'BUTTON',
    badge,
    badgeClass,
    badgeSeverity,
    disabled = false,
    fluid = false,
    icon,
    iconPos = 'left',
    label,
    link = false,
    loading = false,
    loadingIcon,
    outlined = false,
    raised = false,
    rounded = false,
    size,
    severity,
    style,
    text = false,
    variant,
  } = defineProps<{
    as?: string;
    badge?: string;
    badgeClass?: string | object;
    badgeSeverity?: 'secondary' | 'success' | 'info' | 'warn' | 'help' | 'danger' | 'contrast';
    disabled?: boolean;
    fluid?: boolean;
    icon?: string;
    iconClass?: string | object;
    iconPos?: 'left' | 'right' | 'top' | 'bottom';
    label?: string;
    link?: boolean;
    loading?: boolean;
    loadingIcon?: string;
    outlined?: boolean;
    raised?: boolean;
    rounded?: boolean;
    size?: 'small' | 'large';
    severity?: 'primary' | 'secondary' | 'success' | 'info' | 'warn' | 'help' | 'danger' | 'contrast';
    style?: never;
    text?: boolean;
    variant?: 'text' | 'outlined' | 'link';
  }>();
</script>

<template>
  <Button
    :as="as"
    :badge="badge"
    :badge-class="badgeClass"
    :badge-severity="badgeSeverity"
    :disabled="disabled"
    :fluid="fluid"
    :icon="icon"
    :icon-class="iconClass"
    :icon-pos="iconPos"
    :label="label"
    :link="link"
    :loading="loading"
    :loading-icon="loadingIcon"
    :outlined="outlined"
    :raised="raised"
    :rounded="rounded"
    :size="size"
    :severity="severity"
    :style="style"
    :text="text"
    :variant="variant"
  />
</template>
