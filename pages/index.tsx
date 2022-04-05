import type { InferGetStaticPropsType } from 'next';
import getAllProducts from '@framework/product/get-all-products';
import { getConfig } from '@framework/api/cofig';

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60, //every 4 hours it will revalidate products
  };
}

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{JSON.stringify(products)}</div>;
};

export default Home;
