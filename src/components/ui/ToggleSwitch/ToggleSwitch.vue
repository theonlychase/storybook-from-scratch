<script setup lang="ts">
  import ToggleSwitch from 'primevue/toggleswitch';

  const {
    defaultValue,
    disabled = false,
    falseValue = false,
    invalid = false,
    name,
    readonly = false,
    trueValue = true,
  } = defineProps<{
    defaultValue?: string | boolean;
    disabled?: boolean;
    falseValue?: string | boolean;
    invalid?: boolean;
    modelValue?: string | boolean;
    name?: string;
    readonly?: boolean;
    trueValue?: string | boolean;
  }>();

  const checked = defineModel<string | boolean>();
</script>

<template>
  <ToggleSwitch
    v-model="checked"
    :default-value="defaultValue"
    :disabled="disabled"
    :false-value="falseValue"
    :invalid="invalid"
    :name="name"
    :readonly="readonly"
    :true-value="trueValue"
  />
</template>
