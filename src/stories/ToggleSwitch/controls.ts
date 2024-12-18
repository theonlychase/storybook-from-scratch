export default {
  defaultValue: {
    name: 'defaultValue',
    type: 'text',
    props: {
      placeholder: 'true or false...',
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
      placeholder: 'Set name attribute...',
      value: '',
    },
    description: 'The name attribute for the element, typically used in form submissions.',
  },
};
