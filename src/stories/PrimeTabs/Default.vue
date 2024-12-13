<script setup lang="ts">
  import { defaultControls } from './controls';
  import { setDefaultControls } from '@/utils/stories';
  import { dummyText } from '@/utils/helpers.ts';
  import PrimeTabs from '@/components/ui/PrimeTabs/PrimeTabs.vue';
  import PrimeTab from '@/components/ui/PrimeTabs/PrimeTab.vue';
  import PrimeTabPanels from '@/components/ui/PrimeTabs/PrimeTabPanels.vue';
  import PrimeTabPanel from '@/components/ui/PrimeTabs/PrimeTabPanel.vue';
  import PrimeTabList from '@/components/ui/PrimeTabs/PrimeTabList.vue';

  const defaultProps = setDefaultControls({
    controls: defaultControls,
    title: 'Default Tabs',
    description: 'Tabs facilitates seamless switching between different views.',
  });
</script>

<template>
  <PrimeTabs
    value="0"
    v-bind="defaultProps"
  >
    <PrimeTabList>
      <PrimeTab value="0">Header I</PrimeTab>
      <PrimeTab value="1">Header II</PrimeTab>
      <PrimeTab value="2">Header III</PrimeTab>
    </PrimeTabList>
    <PrimeTabPanels>
      <PrimeTabPanel value="0">
        <p class="m-0">
          {{ dummyText }}
        </p>
      </PrimeTabPanel>
      <PrimeTabPanel value="1">
        <p class="m-0">
          {{ dummyText }}
        </p>
      </PrimeTabPanel>
      <PrimeTabPanel value="2">
        <p class="m-0">
          {{ dummyText }}
        </p>
      </PrimeTabPanel>
    </PrimeTabPanels>
  </PrimeTabs>
</template>
