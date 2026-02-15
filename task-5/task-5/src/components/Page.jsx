import { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const productData = async () => {
      const fetchData = await fetch("https://fakestoreapi.com/products");
      const respData = await fetchData.json();
      console.log(respData);
      setProduct(respData);
    };

    productData();
  }, []); 
  return (
    <div>
      <h1>Product Page</h1>

      {product.map((ele) => (
        <h1 key={ele.id}>{ele.title}</h1>
      ))}
    </div>
  );
};

export default Product;


