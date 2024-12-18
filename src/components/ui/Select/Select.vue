<script setup lang="ts">
  import Select from 'primevue/select';

  const {
    defaultValue,
    disabled = false,
    fluid = false,
    invalid = false,
    loading = false,
    name,
    optionLabel,
    optionValue,
    options,
    placeholder,
    showClear = false,
    size,
    variant = 'outlined',
  } = defineProps<{
    defaultValue?: any;
    disabled?: boolean;
    fluid?: boolean;
    invalid?: boolean;
    loading?: boolean;
    modelValue?: any;
    name?: string;
    options?: any[];
    optionLabel?: string;
    optionValue?: string;
    placeholder?: string;
    showClear?: boolean;
    size?: 'small' | 'large';
    variant?: 'outlined' | 'filled';
  }>();

  const selectedOption = defineModel();
</script>

<template>
  <Select
    v-model="selectedOption"
    :default-value="defaultValue"
    :disabled="disabled"
    :fluid="fluid"
    :invalid="invalid"
    :loading="loading"
    :name="name"
    :options="options"
    :option-label="optionLabel"
    :option-value="optionValue"
    :placeholder="placeholder"
    :show-clear="showClear"
    :size="size"
    :variant="variant"
  />
</template>
