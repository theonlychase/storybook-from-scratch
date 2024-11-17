import type { Controls } from '@/types/global.ts';

const components = {
  PrimeSelect: defineAsyncComponent(() => import('@/components/ui/PrimeSelect/PrimeSelect.vue')),
  PrimeInputText: defineAsyncComponent(() => import('@/components/ui/PrimeInputText/PrimeInputText.vue')),
  PrimeToggleSwitch: defineAsyncComponent(() => import('@/components/ui/PrimeToggleSwitch/PrimeToggleSwitch.vue')),
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
  return type === 'select' ? components.PrimeSelect : type === 'text' ? components.PrimeInputText : type === 'toggle' ? components.PrimeToggleSwitch : null;
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

const tabs = ['Controls'];

const panelHeaders = (disabledState) => {
  return ['Name', 'Description', `Control${disabledState ? 's Disabled' : ''}`];
};

const updateQuery = ({ val, name }, route, router, controlsState) => {
  controlsState[`${name}`].props.value = val;

  router.push({
    name: route.name,
    query: {
      ...route.query,
      [`${name}`]: val,
    },
  });
};

export { resizePanel, setControls, setComponents, tabs, updateQuery };
