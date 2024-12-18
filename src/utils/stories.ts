import { onBeforeRouteLeave } from 'vue-router';
import type { PageMeta } from '@/types/global';

const defaultControlState = ref({});

const setDefaultControls = ({
  controls,
  disabled = false,
  title = '',
  description = '',
}: {
  // TODO - type controls
  controls: any;
  disabled?: boolean;
  title?: string;
  description?: string;
}) => {
  const controlState = inject('controlState') as Ref;

  Object.keys(controls).forEach((key) => {
    controls[key].props.disabled = disabled;
  });

  controlState.value = structuredClone(controls);

  let defaultProps = {};

  Object.entries(controls).forEach(([key, value]: [string, any]): void => {
    Object.keys(value.props).forEach((prop) => {
      if (prop === 'modelValue' || prop === 'value') {
        defaultProps[`${key}`] = value.props[prop];
      }
    });

    if (key === 'placeholder' && value.props.placeholder) {
      defaultProps[`${key}`] = value.props.placeholder;
    }
  });

  setPageMeta({ title, description });

  onBeforeRouteLeave((to, from) => {
    controlState.value = null;
    defaultProps = {};
  });

  return defaultProps;
};

export const setPageMeta = ({ title, description }: PageMeta) => {
  const pageMeta = inject('pageMeta') ?? {};
  Object.assign(pageMeta, { title, description });
};

const mockOptions = [
  { name: 'Usa', id: 'usa' },
  { name: 'Mexico', id: 'mexico' },
  { name: 'Spain', id: 'spain' },
  { name: 'Brazil', id: 'brazil' },
  { name: 'Germany', id: 'germany' },
  { name: 'Turkey', id: 'turkey' },
  { name: 'Egypt', id: 'egypt' },
  { name: 'Iran', id: 'iran' },
  { name: 'Russia', id: 'russia' },
  { name: 'Romania', id: 'romania' },
  { name: 'Canada', id: 'canada' },
];

const mockImages = [
  {
    source: {
      medium: 'https://images.unsplash.com/photo-1511225070737-5af5ac9a690d',
    },
    description: 'Image description',
  },
  {
    source: {
      medium: 'https://images.unsplash.com/photo-1511225070737-5af5ac9a690d',
    },
    description: 'Image description',
  },
  {
    source: {
      medium: 'https://images.unsplash.com/photo-1511225070737-5af5ac9a690d',
    },
    description: 'Image description',
  },
  {
    source: {
      medium: 'https://images.unsplash.com/photo-1511225070737-5af5ac9a690d',
    },
    description: 'Image description',
  },
  {
    source: {
      medium: 'https://images.unsplash.com/photo-1511225070737-5af5ac9a690d',
    },
    description: 'Image description',
  },
  {
    source: {
      medium: 'https://images.unsplash.com/photo-1511225070737-5af5ac9a690d',
    },
    description: 'Image description',
  },
  {
    source: {
      medium: 'https://images.unsplash.com/photo-1511225070737-5af5ac9a690d',
    },
    description: 'Image description',
  },
];

export { defaultControlState, mockImages, mockOptions, setDefaultControls };
