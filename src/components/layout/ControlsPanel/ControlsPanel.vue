<script setup lang="ts">
  import type { Ref } from 'vue';
  // TODO - disable resize height if less than viewport height
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import { resizePanel, setControls, setComponents, tabs, updateQuery } from './composables';

  const router = useRouter();
  const route = useRoute();
  const controls = inject<Ref<Record<any, any>>>('controlState');

  const panel = ref(null);
  const activeTab = ref('Docs');
  // const { height } = resizePanel(panel);
  const { controlsState, headers }: { controlsState: { [key: string]: any }; headers: Ref<Array<string>> } = setControls(controls);
</script>

<template>
  <div
    ref="panel"
    class="w-full h-auto min-h-[200px] mt-auto shadow relative bg-gray-50 border border-solid border-gray-200"
  >
    <div class="absolute top-0 left-0 h-1 w-full cursor-move z-10" />
    <wc-tabs
      v-model:value="activeTab"
      content-class="max-h-[calc(100vh_-_50vh)]"
      :tabs="tabs"
      overflow-content
    >
      <template #[activeTab]="{ tab }">
        <table
          v-if="tab === 'Docs'"
          class="min-w-full divide-y divide-gray-200"
        >
          <thead class="bg-gray-200 sticky top-0 z-10">
            <tr>
              <th
                v-for="header in headers"
                :key="header"
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody class="bg-gray-50 divide-y divide-gray-200">
            <tr
              v-for="control in controlsState"
              :key="control.name"
            >
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {{ control.name }}
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                v-html="control.description"
              />
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <component
                  :is="setComponents(control.type)"
                  :key="control.name"
                  v-bind="{ ...control.props }"
                  @update:value="(val) => updateQuery({ val, name: control.name }, route, router, controlsState)"
                  @update:model-value="(val) => updateQuery({ val, name: control.name }, route, router, controlsState)"
                />
                <div
                  v-if="!setComponents(control.type)"
                  v-html="control.props.value || '--'"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </wc-tabs>
  </div>
</template>
