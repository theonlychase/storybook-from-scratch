import { InputValueProps } from '@/types/global';

const filterDuplicates = (options: Array<InputValueProps>) => {
  const uniqueValues = new Map();

  options.forEach((value) => {
    const id = getValueId(value);

    !uniqueValues.has(id) && uniqueValues.set(id, value);
  });

  return Array.from(uniqueValues.values());
};

const getValueId = (value): string => {
  return isObject(value) ? value.id : value;
};

const getValueName = (value): string => {
  return isObject(value) ? value.name : value;
};

const isObject = (value): boolean => {
  return value !== null && typeof value === 'object';
};

const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
});

const dummyText = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
          fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus.`;

export { dummyText, filterDuplicates, getValueId, getValueName, isObject, keyCodes };
