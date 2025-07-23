import { useTitle } from "../hooks/useTitle";
import { useFetch } from "../hooks/useFetch";
import { ProductCard } from "../components";
export const Home = ({ apiPath }) => {
  useTitle("Home");
  const products = useFetch(apiPath);
  return (
    <main>
      <section className="products">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
       </div>
      </section>
    </main>
  );
};
