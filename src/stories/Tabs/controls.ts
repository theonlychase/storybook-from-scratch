export const defaultControls = {
  lazy: {
    name: 'lazy',
    type: 'toggle',
    props: {
      modelValue: false,
    },
    description: 'When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.',
  },
  scrollable: {
    name: 'scrollable',
    type: 'toggle',
    props: {
      modelValue: false,
    },
    description: 'When specified, enables horizontal and/or vertical scrolling.',
  },
  selectOnFocus: {
    name: 'selectOnFocus',
    type: 'toggle',
    props: {
      modelValue: false,
    },
    description: 'When enabled, the focused tab is activated.',
  },
  showNavigators: {
    name: 'showNavigators',
    type: 'toggle',
    props: {
      modelValue: true,
    },
    description: 'Whether to display navigation buttons in container when scrollable is enabled.',
  },
  value: {
    name: 'value',
    type: 'text',
    props: {
      value: '0',
    },
    description: 'Value of the active tab.',
  },
};

export const accordionPanelControls = {
  as: {
    name: 'as',
    type: '',
    props: {
      value: undefined,
    },
    description: 'Use to change the HTML tag of root element.',
  },
  asChild: {
    name: 'asChild',
    type: '',
    props: {
      value: false,
    },
    description: 'When enabled, it changes the default rendered element for the one passed as a child element.',
  },
  disabled: {
    name: 'disabled',
    type: '',
    props: {
      value: false,
    },
    description: 'Whether the item is disabled.',
  },
  value: {
    name: 'value',
    type: '',
    props: {
      value: null,
    },
    description: 'Value of the active panel or an array of values in multiple mode.',
  },
};
