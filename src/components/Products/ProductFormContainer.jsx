import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductFormPresenter from "./ProductFormPresenter";

const API_URL = "http://localhost:5000/products";

const ProductFormContainer = ({ onClose, setIsCreated, selectedProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    category: "default",
    img: "",
  });

  const [error, setError] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setNewProduct(selectedProduct);
    }
  }, [selectedProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();



    if (
      !newProduct.name ||
      !newProduct.price ||
      !newProduct.stock ||
      !newProduct.description ||
      newProduct.category === "default"
    ) {
      setError(true);
      return;
    }

    let data = {
      name: newProduct.name,
      price: Number(newProduct.price),
      stock: newProduct.stock,
      description: newProduct.description,
      category: newProduct.category,
      img: newProduct.img,
    };

    if (selectedProduct) {
      axios
        .put(`${API_URL}/${selectedProduct.id}`, newProduct)
        .then(() => {
        })
        .catch((error) => console.log("Error al actualizar el producto", error));
    } else {
      axios.post(API_URL, data);
    }
    
    setNewProduct({
      name: "",
      price: "",
      stock: "",
      description: "",
      category: "default",
      img: "",
    });
    onClose()
    setIsCreated(true);    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };
 

  return (
    <ProductFormPresenter
      newProduct={newProduct}
      error={error}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      onClose={onClose}
      selectedProduct={selectedProduct}
    />
  );
};

export default ProductFormContainer;
