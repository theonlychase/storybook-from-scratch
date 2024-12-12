<script setup lang="ts">
  import { setPageMeta } from '@/utils/stories.ts';
  setPageMeta({ title: 'Storybook From Scratch' });
</script>

<template>
  <div class="mb-4">Custom, lightweight alternative to Storybook for building Vue components in isolation.</div>

  <ul class="space-y-2 list-disc list-inside">
    <li>Auto generated routes for pages, components & stories</li>
    <li>Reactive, auto generated controls for modifying component state</li>
    <li>Built with Vue3, Vite, & Vue Router 4</li>
    <li>
      Custom UI Components built with
      <a
        class="text-blue-500 hover:text-blue-600"
        href="https://primevue.org/"
        target="_blank"
        title="PrimeVue"
      >
        PrimeVue
      </a>
    </li>
    <li>Styled with Tailwind</li>
    <li>
      <a
        class="text-blue-500 hover:text-blue-600"
        href="https://github.com/theonlychase/storybook-from-scratch"
        target="_blank"
      >
        Github Repo
      </a>
    </li>
  </ul>
</template>
