import { memo } from 'react';

export const ErrorFallback = memo(() => {
  //todo i18next, error
  return <div>Ошибочка вышла!</div>;
});
ErrorFallback.displayName = 'ErrorFallback';
