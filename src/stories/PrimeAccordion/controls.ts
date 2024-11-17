export const defaultControls = {
  lazy: {
    name: 'lazy',
    type: 'toggle',
    props: {
      value: false,
    },
    description: 'When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.',
  },
  multiple: {
    name: 'multiple',
    type: 'toggle',
    props: {
      value: false,
    },
    description: 'When enabled, multiple tabs can be activated at the same time.',
  },
  selectOnFocus: {
    name: 'selectOnFocus',
    type: 'toggle',
    props: {
      value: false,
    },
    description: 'When enabled, the focused tab is activated.',
  },
  value: {
    name: 'value',
    type: 'text',
    props: {
      value: null,
    },
    description: 'Value of the active panel or an array of values in multiple mode.',
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
