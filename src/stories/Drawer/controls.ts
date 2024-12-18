export default {
  autoZIndex: {
    name: 'autoZIndex',
    type: 'toggle',
    props: {
      modelValue: true,
    },
    description: 'Whether to automatically manage layering.',
  },
  baseZIndex: {
    name: 'baseZIndex',
    type: 'text',
    props: {
      placeholder: 'Set a value...',
      value: 0,
    },
    description: 'Base zIndex value to use in layering.',
  },
  blockScroll: {
    name: 'blockScroll',
    type: 'toggle',
    props: {
      modelValue: false,
    },
    description: 'Whether background scroll should be blocked when drawer is visible.',
  },
  closeButtonProps: {
    name: 'closeButtonProps',
    type: 'text',
    props: {
      placeholder: 'Set a value...',
      value: {
        rounded: true,
        severity: 'secondary',
        size: 'large',
        variant: 'text',
      },
    },
    description: 'Used to pass the custom value to read for the button inside the component.',
  },
  closeIcon: {
    name: 'closeIcon',
    type: 'select',
    props: {
      placeholder: 'Select An Icon',
      modelValue: 'pi pi-times',
      optionLabel: 'label',
      optionValue: 'name',
      options: [
        {
          label: 'none',
          name: 'none',
        },
        {
          label: 'times',
          name: 'pi pi-times',
        },
      ],
    },
    description: 'Icon to display in the drawer close button.',
  },
  dismissable: {
    name: 'dismissable',
    type: 'toggle',
    props: {
      modelValue: true,
    },
    description: 'Whether clicking outside closes the panel.',
  },
  header: {
    name: 'header',
    type: 'text',
    props: {
      placeholder: 'Set dialog title...',
      value: 'Drawer Title',
    },
    description: 'Title content of the dialog.',
  },
  modal: {
    name: 'modal',
    type: 'toggle',
    props: {
      modelValue: true,
    },
    description: 'Whether to a modal layer behind the drawer.',
  },
  position: {
    name: 'position',
    type: 'select',
    props: {
      modelValue: 'left',
      options: ['left', 'right', 'top', 'bottom', 'full'],
    },
    description: 'Specifies the position of the drawer.',
  },
  showCloseIcon: {
    name: 'showCloseIcon',
    type: 'toggle',
    props: {
      modelValue: true,
    },
    description: 'Whether to display a close icon inside the panel.',
  },
  visible: {
    name: 'visible',
    type: 'toggle',
    props: {
      modelValue: false,
    },
    description: 'Specifies the visibility of the dialog.',
  },
};
