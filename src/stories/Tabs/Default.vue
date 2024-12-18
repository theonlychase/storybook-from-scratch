<script setup lang="ts">
  import { defaultControls } from './controls';
  import { setDefaultControls } from '@/utils/stories';
  import { dummyText } from '@/utils/helpers.ts';
  import Tabs from '@/components/ui/Tabs/Tabs.vue';
  import Tab from '@/components/ui/Tabs/Tab.vue';
  import TabPanels from '@/components/ui/Tabs/TabPanels.vue';
  import TabPanel from '@/components/ui/Tabs/TabPanel.vue';
  import TabList from '@/components/ui/Tabs/TabList.vue';

  const defaultProps = setDefaultControls({
    controls: defaultControls,
    title: 'Default Tabs',
    description: 'Tabs facilitates seamless switching between different views.',
  });
</script>

<template>
  <Tabs
    value="0"
    v-bind="defaultProps"
  >
    <TabList>
      <Tab value="0">Header I</Tab>
      <Tab value="1">Header II</Tab>
      <Tab value="2">Header III</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="0">
        <p class="m-0">
          {{ dummyText }}
        </p>
      </TabPanel>
      <TabPanel value="1">
        <p class="m-0">
          {{ dummyText.split(' ').reverse().join(' ') }}
        </p>
      </TabPanel>
      <TabPanel value="2">
        <p class="m-0">
          {{ dummyText }}
        </p>
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>
