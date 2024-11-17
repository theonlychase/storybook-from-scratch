<script setup lang="ts">
  import { defaultControls } from './controls';
  import { setDefaultControls } from '@/utils/stories';
  import { dummyText } from '@/utils/helpers.ts';
  import PrimeAccordion from '@/components/ui/PrimeAccordion/PrimeAccordion.vue';
  import PrimeAccordionPanel from '@/components/ui/PrimeAccordion/PrimeAccordionPanel.vue';
  import PrimeAccordionHeader from '@/components/ui/PrimeAccordion/PrimeAccordionHeader.vue';
  import PrimeAccordionContent from '@/components/ui/PrimeAccordion/PrimeAccordionContent.vue';

  const defaultProps = setDefaultControls({
    controls: defaultControls,
    title: 'Default Accordion',
  });
</script>

<template>
  <PrimeAccordion v-bind="defaultProps">
    <PrimeAccordionPanel value="0">
      <PrimeAccordionHeader>Header I</PrimeAccordionHeader>
      <PrimeAccordionContent>
        <p class="m-0">
          {{ dummyText }}
        </p>
      </PrimeAccordionContent>
    </PrimeAccordionPanel>
    <PrimeAccordionPanel value="1">
      <PrimeAccordionHeader>Header II</PrimeAccordionHeader>
      <PrimeAccordionContent>
        <p class="m-0">
          {{ dummyText }}
        </p>
      </PrimeAccordionContent>
    </PrimeAccordionPanel>
    <PrimeAccordionPanel value="2">
      <PrimeAccordionHeader>Header III</PrimeAccordionHeader>
      <PrimeAccordionContent>
        <p class="m-0">
          {{ dummyText }}
        </p>
      </PrimeAccordionContent>
    </PrimeAccordionPanel>
  </PrimeAccordion>
</template>
