import { Transform } from 'class-transformer';

export const ToStringFromNameGroup = () =>
  Transform(({ value }) => {
    if (Array.isArray(value)) return value[0]?.name;
    return value?.name;
  });
