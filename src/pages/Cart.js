import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
const products = [
  {
    id: "100",
    name: "Echo Dot (5th Gen)",
    category: "Smart Home",
    price: 49.99,
    image: "https://m.media-amazon.com/images/I/71yRY8YlAbL._AC_SL1500_.jpg",
    description:
      "Smart speaker with voice assistant for hands-free control and music.",
  },
  {
    id: "200",
    name: "Fire TV Stick 4K",
    category: "Streaming Devices",
    price: 39.99,
    image: "https://m.media-amazon.com/images/I/61XGGd7lh+L._AC_SL1500_.jpg",
    description: "Stream in 4K with voice remote and Dolby Vision support.",
  },
];

export const Cart = () => {
  useTitle("Cart");
  return (
    <main>
      <section>
        <h1>Card Items: {products.length}</h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
