import { useEffect, useState } from "react";
import AlertDismissible from "../components/AlertDismissible";
import BootstrapModal from "../components/BootstrapModal";
import Counter from "../components/Counter";
import axios from "axios";
import { iProductType } from "../interfaces/Interfaces";
import BootstrapCard from "../components/BootstrapCard";

type Props = {};

function Home({ }: Props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((e) => console.log(e));
    console.log(products);
  }, []);

  return (
    <div className="mt-5 ms-5 me-5">
      <div>
        <AlertDismissible /> <hr />
        <BootstrapModal title="tayfundagci" titleNumber={5} description="Officia dolor nisi consectetur pariatur sint." /> <hr />
        <Counter /> <hr />
        <div className="row" style={{ minHeight: "100px" }}>
          {products.map((product: iProductType) => (
            <BootstrapCard
              brand={product.brand}
              key={product.id}
              title={`${product.title}`}
              description={`${product.description}`}
              image={product.images[0]}
              price={`$ ${product.price}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
