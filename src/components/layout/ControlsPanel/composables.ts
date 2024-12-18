import type { Controls } from '@/types/global.ts';

const components = {
  Select: defineAsyncComponent(() => import('@/components/ui/Select/Select.vue')),
  InputText: defineAsyncComponent(() => import('@/components/ui/InputText/InputText.vue')),
  ToggleSwitch: defineAsyncComponent(() => import('@/components/ui/ToggleSwitch/ToggleSwitch.vue')),
};

const resizePanel = (panel) => {
  const resizing = ref(false);
  const height = ref<string | number>('auto');

  watchEffect(
    () => {
      panel.value.firstElementChild.onmousedown = () => {
        resizing.value = true;
      };

      document.onmousemove = (e) => {
        if (!resizing.value) {
          return;
        }
        height.value = panel.value.clientHeight - (e.clientY - panel.value.offsetTop);
      };

      document.onmouseup = () => {
        resizing.value = false;
      };
    },
    {
      flush: 'post',
    },
  );

  return { resizing, height };
};

const setComponents = (type) => {
  return type === 'select' ? components.Select : type === 'text' ? components.InputText : type === 'toggle' ? components.ToggleSwitch : null;
};

const setControls = (controlsState): { controlsState: Controls; headers: Ref<Array<string>> } => {
  const headers = ref<Array<string>>([]);

  watch(
    () => controlsState.value,
    (val) => {
      if (val) {
        const isDisabled = Object.keys(val).every((key) => {
          return controlsState.value[key].props.disabled;
        });
        headers.value = panelHeaders(isDisabled);
      }
    },
    { deep: true, immediate: true },
  );

  return { controlsState, headers };
};

const tabs = ['Docs'];

const panelHeaders = (disabledState) => {
  return ['Name', 'Description', `Control${disabledState ? 's Disabled' : ''}`];
};

const updateQuery = ({ val, name, propName }, route, router, controlsState) => {
  controlsState[`${name}`].props[propName] = val;

  router.push({
    name: route.name,
    query: {
      ...route.query,
      [`${name}`]: val,
    },
  });
};

export { resizePanel, setControls, setComponents, tabs, updateQuery };
