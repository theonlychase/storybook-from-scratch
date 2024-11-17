export default {
  defaultValue: {
    name: 'defaultValue',
    type: 'text',
    props: {
      value: undefined,
    },
    description: 'The default value for the input when not controlled by `modelValue`',
  },
  disabled: {
    name: 'disabled',
    type: 'toggle',
    props: {
      value: false,
    },
    description: 'When present, it specifies that the component should be disabled.',
  },
  fluid: {
    name: 'fluid',
    type: 'toggle',
    props: {
      value: false,
    },
    description: 'Spans 100% width of the container when enabled.',
  },
  invalid: {
    name: 'invalid',
    type: 'toggle',
    props: {
      value: false,
    },
    description: 'When present, it specifies that the component should have invalid state style.',
  },
  name: {
    name: 'name',
    type: 'text',
    props: {
      value: '',
    },
    description: 'The name attribute for the element, typically used in form submissions.',
  },
  placeholder: {
    name: 'placeholder',
    type: 'text',
    props: {
      value: 'Placeholder',
    },
    description: 'Default text to display when no option is selected.',
  },
  size: {
    name: 'size',
    type: 'select',
    props: {
      value: undefined,
      options: ['small', 'large'],
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
