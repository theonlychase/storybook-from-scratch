export default {
  as: {
    name: 'as',
    type: '',
    props: {
      value: undefined,
    },
    description: 'Use to change the HTML tag of root element. Default: "BUTTON"',
  },
  badge: {
    name: 'badge',
    type: 'text',
    props: {
      value: null,
    },
    description: 'Value of the badge.',
  },
  badgeSeverity: {
    name: 'badgeSeverity',
    type: 'select',
    props: {
      modelValue: 'secondary',
      options: ['secondary', 'success', 'info', 'warn', 'help', 'danger', 'contrast'],
    },
    description: 'Severity type of the badge: <span class="font-bold">primary, secondary, success, info, warn, help, danger, contrast</span>',
  },
  disabled: {
    name: 'disabled',
    type: 'toggle',
    props: {
      modelValue: false,
    },
    description: 'Button will be disabled',
  },
  fluid: {
    name: 'fluid',
    type: 'toggle',
    props: {
      modelValue: false,
    },
    description: 'Spans 100% width of the container when enabled.',
  },
  icon: {
    name: 'icon',
    type: 'text',
    props: {
      value: null,
    },
    description: 'Name of the icon',
  },
  iconPos: {
    name: 'iconPos',
    type: 'select',
    props: {
      modelValue: 'left',
      options: ['left', 'right', 'top', 'bottom'],
    },
    description: 'Position of the icon',
  },
  label: {
    name: 'label',
    type: 'text',
    props: {
      value: 'Button',
    },
    description: 'Text of the button',
  },
  link: {
    name: 'link',
    type: 'toggle',
    props: {
      modelValue: false,
    },
    description: 'Add a link style to the button',
  },
  loading: {
    name: 'loading',
    type: 'toggle',
    props: {
      modelValue: false,
    },
    description: 'Button loading state',
  },
  outlined: {
    name: 'outlined',
    type: 'toggle',
    props: {
      modelValue: false,
    },
    description: 'Add a border class without a background initially.',
  },
  raised: {
    name: 'raised',
    type: 'toggle',
    props: {
      modelValue: false,
    },
    description: 'Button will display a shadow to indicate elevation',
  },
  rounded: {
    name: 'rounded',
    type: 'toggle',
    props: {
      modelValue: false,
    },
    description: 'Button will become rounded',
  },
  size: {
    name: 'size',
    type: 'select',
    props: {
      modelValue: undefined,
      options: ['small', 'large'],
      placeholder: 'Select a size',
    },
    description: 'Button sizes are <span class="font-bold">small, medium, or large</span>',
  },
  severity: {
    name: 'severity',
    type: 'select',
    props: {
      modelValue: 'primary',
      options: ['primary', 'secondary', 'success', 'info', 'warn', 'help', 'danger', 'contrast'],
      placeholder: 'Select a severity',
    },
    description: 'Button variations are: <span class="font-bold">primary, secondary, success, info, warn, help, danger, contrast</span>',
  },
  variant: {
    name: 'variant',
    type: 'select',
    props: {
      modelValue: undefined,
      options: ['text', 'outlined', 'link'],
      placeholder: 'Select a variant',
    },
    description: 'Button variants are: <span class="font-bold">text, outlined, link</span>',
  },
};
