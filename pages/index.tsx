import type { InferGetStaticPropsType } from 'next';
import getAllProducts from '@framework/product/get-all-products';

export async function getStaticProps() {
  const products = await getAllProducts();
  //const products = [1,  "2" , 3]
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
