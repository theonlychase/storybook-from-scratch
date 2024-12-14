<script setup lang="ts">
  import { accordionPanelControls } from './controls';
  import { setDefaultControls } from '@/utils/stories';
  import { dummyText } from '@/utils/helpers.ts';
  import Accordion from '@/components/ui/Accordion/Accordion.vue';
  import AccordionPanel from '@/components/ui/Accordion/AccordionPanel.vue';
  import AccordionHeader from '@/components/ui/Accordion/AccordionHeader.vue';
  import AccordionContent from '@/components/ui/Accordion/AccordionContent.vue';

  setDefaultControls({
    controls: accordionPanelControls,
    title: 'Disabled AccordionPanel',
    description: 'Enabling disabled property of an AccordionPanel prevents user interaction.',
  });
</script>

<template>
  <Accordion>
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
    <AccordionPanel
      value="2"
      :disabled="Boolean($route.query?.disabled ?? true)"
    >
      <AccordionHeader>Header III</AccordionHeader>
      <AccordionContent>
        <p class="m-0">
          {{ dummyText }}
        </p>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>
