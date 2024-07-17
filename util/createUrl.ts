import { ReadonlyURLSearchParams } from 'next/navigation';

// eslint-disable-next-line import/prefer-default-export
export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};
