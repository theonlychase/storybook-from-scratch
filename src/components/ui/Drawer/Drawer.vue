<script setup lang="ts">
  import Drawer from 'primevue/drawer';

  const emit = defineEmits<{
    (e: 'show'): void;
    (e: 'hide'): void;
    (e: 'after-hide'): void;
    (e: 'after-show'): void;
  }>();

  const {
    autoZIndex = true,
    baseZIndex = 0,
    blockScroll = false,
    closeButtonProps,
    closeIcon,
    dismissable = true,
    header,
    modal = true,
    position = 'left',
    showCloseIcon = true,
  } = defineProps<{
    autoZIndex?: boolean;
    baseZIndex?: number;
    blockScroll?: boolean;
    closeButtonProps?: object;
    closeIcon?: string;
    dismissable?: boolean;
    header?: string;
    modal?: boolean;
    position?: 'left' | 'right' | 'top' | 'bottom' | 'full';
    showCloseIcon?: boolean;
    visible?: boolean;
  }>();

  const isVisible = defineModel<boolean>('visible');
</script>

<template>
  <Drawer
    v-model:visible="isVisible"
    :auto-z-index="autoZIndex"
    :base-z-index="baseZIndex"
    :block-scroll="blockScroll"
    :close-button-props="closeButtonProps"
    :close-icon="closeIcon"
    :dismissable="dismissable"
    :header="header"
    :modal="modal"
    :position="position"
    :show-close-icon="showCloseIcon"
    @show="() => emit('show')"
    @hide="() => emit('hide')"
    @after-hide="() => emit('after-hide')"
    @after-show="() => emit('after-show')"
  >
    <template
      v-if="!!$slots.container"
      #container="{ closeCallback }"
    >
      <slot
        name="container"
        :close-callback="closeCallback"
      />
    </template>

    <template
      v-if="!!$slots.closeicon"
      #closeicon
    >
      <slot name="closeicon" />
    </template>

    <template
      v-if="!!$slots.header"
      #header
    >
      <slot name="header" />
    </template>

    <template
      v-if="!!$slots.default"
      #default
    >
      <slot name="default" />
    </template>

    <template
      v-if="!!$slots.footer"
      #footer
    >
      <slot name="footer" />
    </template>
  </Drawer>
</template>
