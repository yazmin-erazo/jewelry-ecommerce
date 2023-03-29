import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductPresenter from "./ProductPresenter";

const ProductContainer = () => {
  const [items, setItems] = useState([]);
  const [viewMode, setViewMode] = useState("list");
  const [IsChange, setIsChanged] = useState(false)

  useEffect(() => {
    const products = axios.get("http://localhost:5000/products");
    products
      .then((response) => setItems(response.data))
      .catch((error) => console.log("Error al obtener los productos", error));
  }, []);

  const handleToggle = (e) => {
    setViewMode(e.target.checked ? "cards" : "list");
  };

  const deleteProductById = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`);
    setIsChanged(true);
  };

  const updateProductById = (id) => {
    axios.patch(`http://localhost:5000/products/${id}`, {
      name: "Editando nombre....",
    });
    setIsChanged(true);
  };

  return (
    <div>
      <ProductPresenter 
      items={items} 
      handleToggle={handleToggle}
      viewMode={viewMode}
      deleteProductById={deleteProductById}
      updateProductById={updateProductById}
      />
    </div>
  );
};

export default ProductContainer;
