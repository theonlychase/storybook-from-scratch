export default {
  defaultValue: {
    name: 'defaultValue',
    type: 'text',
    props: {
      placeholder: 'Set default value...',
      value: undefined,
    },
    description: 'The default value for the input when not controlled by `modelValue`',
  },
  disabled: {
    name: 'disabled',
    type: 'toggle',
    props: {
      modelValue: false,
    },
    description: 'When present, it specifies that the component should be disabled.',
  },
  fluid: {
    name: 'fluid',
    type: 'toggle',
    props: {
      modelValue: false,
    },
    description: 'Spans 100% width of the container when enabled.',
  },
  invalid: {
    name: 'invalid',
    type: 'toggle',
    props: {
      modelValue: false,
    },
    description: 'When present, it specifies that the component should have invalid state style.',
  },
  name: {
    name: 'name',
    type: 'text',
    props: {
      placeholder: 'Set name attribute...',
      value: '',
    },
    description: 'The name attribute for the element, typically used in form submissions.',
  },
  loading: {
    name: 'loading',
    type: 'toggle',
    props: {
      modelValue: false,
    },
    description: 'Whether the select is in loading state.',
  },
  placeholder: {
    name: 'placeholder',
    type: 'text',
    props: {
      placeholder: 'Set Placeholder...',
      value: '',
    },
    description: 'Default text to display when no option is selected.',
  },
  showClear: {
    name: 'showClear',
    type: 'toggle',
    props: {
      modelValue: false,
    },
    description: 'When enabled, a clear icon is displayed to clear the value.',
  },
  size: {
    name: 'size',
    type: 'select',
    props: {
      modelValue: undefined,
      options: ['none', 'small', 'large'],
      placeholder: 'Select a size',
    },
    description: 'Select sizes are: <span class="font-bold">small, or large</span>',
  },
  variant: {
    name: 'variant',
    type: 'select',
    props: {
      modelValue: 'outlined',
      options: ['outlined', 'filled'],
    },
    description: 'Select variants are: <span class="font-bold">outlined, filled</span>',
  },
};
