type FetcherParams = {
  query: string;
};

type FetcherResult<T> = {
  data: T;
};

export const fetchAPI = async <T>({
  query,
}: FetcherParams): Promise<FetcherResult<T>> => {
  const url = 'http://localhost:4000/graphql';

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
