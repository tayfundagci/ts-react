import { useEffect, useState } from "react";
import AlertDismissible from "../components/AlertDismissible";
import BootstrapModal from "../components/BootstrapModal";
import Counter from "../components/Counter";
import axios from "axios";
import { iProductType } from "../interfaces/Interfaces";
import BootstrapCard from "../components/BootstrapCard";

type Props = {};

function Home({}: Props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((e) => console.log(e));
    console.log(products);
  }, []);

  return (
    <div className="mt-5 ms-5 me-5">
      <h4>this is homepage</h4>
      <div>
        <div className="mb-2">
          <AlertDismissible />
        </div>
        <div className="mb-2">
          <BootstrapModal
            title="tayfundagci"
            titleNumber={5}
            description="Officia dolor nisi consectetur pariatur sint."
          />
        </div>
        <div>
          <Counter />
        </div>
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
