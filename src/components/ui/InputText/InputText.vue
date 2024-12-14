<script setup lang="ts">
  import InputText from 'primevue/inputtext';

  const {
    defaultValue,
    disabled = false,
    fluid = false,
    invalid = false,
    name,
    placeholder,
    size,
    variant = 'outlined',
  } = defineProps<{
    defaultValue?: Nullable<string>;
    disabled?: boolean;
    fluid?: boolean;
    invalid?: boolean;
    modelValue?: Nullable<string>;
    name?: string;
    placeholder?: string;
    size?: 'small' | 'large';
    variant?: 'outlined' | 'filled';
  }>();

  const textValue = defineModel<Nullable<string>>();
</script>

<template>
  <InputText
    v-model="textValue"
    :default-value="defaultValue"
    :disabled="disabled"
    :fluid="fluid"
    :invalid="invalid"
    :name="name"
    :placeholder="placeholder"
    :size="size"
    :variant="variant"
  />
</template>
