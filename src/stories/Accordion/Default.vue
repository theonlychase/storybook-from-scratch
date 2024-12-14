<script setup lang="ts">
  import { defaultControls } from './controls';
  import { setDefaultControls } from '@/utils/stories';
  import { dummyText } from '@/utils/helpers.ts';
  import Accordion from '@/components/ui/Accordion/Accordion.vue';
  import AccordionPanel from '@/components/ui/Accordion/AccordionPanel.vue';
  import AccordionHeader from '@/components/ui/Accordion/AccordionHeader.vue';
  import AccordionContent from '@/components/ui/Accordion/AccordionContent.vue';

  const defaultProps = setDefaultControls({
    controls: defaultControls,
    title: 'Default Accordion',
    description: 'Accordion groups a collection of contents in panels.',
  });
</script>

<template>
  <Accordion v-bind="defaultProps">
    <AccordionPanel value="0">
      <AccordionHeader>Header I</AccordionHeader>
      <AccordionContent>
        <p class="m-0">
          {{ dummyText }}
        </p>
      </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="1">
      <AccordionHeader>Header II</AccordionHeader>
      <AccordionContent>
        <p class="m-0">
          {{ dummyText }}
        </p>
      </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="2">
      <AccordionHeader>Header III</AccordionHeader>
      <AccordionContent>
        <p class="m-0">
          {{ dummyText }}
        </p>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>
