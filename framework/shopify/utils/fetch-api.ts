import { ApiFetcherOptions, ApiFetcherResults } from '@common/types/api';

export const fetchAPI = async <T>({
  url,
  query,
}: ApiFetcherOptions): Promise<ApiFetcherResults<T>> => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const { data, errors } = await res.json();
  // ?? checking if left is null or undefined only
  // || checking if left is null, undefined, "", 0 or false
  if (errors) {
    throw new Error(errors[0].message ?? errors.message);
  }

  return { data };
};
