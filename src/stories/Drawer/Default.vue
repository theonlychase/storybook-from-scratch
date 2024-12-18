<script setup lang="ts">
  import controls from './controls';
  import { setDefaultControls } from '@/utils/stories';
  import Drawer from '@/components/ui/Drawer/Drawer.vue';
  import Button from '@/components/ui/Button/Button.vue';
  const route = useRoute();
  const router = useRouter();

  const defaultProps = setDefaultControls({
    controls,
    title: 'Default Drawer',
    description: 'Drawer is a container component displayed as an overlay.',
  });

  // TODO - Create Composable For handling Query Params for Component State
  const isVisible = ref(false);
  watch(
    () => route.query,
    (val) => {
      Object.keys(val).forEach((key) => {
        defaultProps[key] = val[key];
      });
    },
    { deep: true },
  );

  function handleUpdate(value) {
    isVisible.value = value;
    router.push({
      name: route.name,
      query: { ...route.query, visible: value },
    });
  }
</script>

<template>
  <div>
    <Drawer
      v-bind="defaultProps"
      @update:visible="(value) => handleUpdate(value)"
    >
      Drawer content
    </Drawer>

    <Button
      :label="isVisible ? 'Hide Drawer' : 'Show Drawer'"
      @click="() => handleUpdate(!isVisible)"
    />
  </div>
</template>
