import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductFormPresenter from "./ProductFormPresenter";

const API_URL = "http://localhost:5000/products";

const ProductFormContainer = ({ onClose, setIsCreated }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
    category: "default",
    img: "",
  });

  const [error, setError] = useState(false);

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

    axios.post(API_URL, data);
    setNewProduct({
      name: "",
      price: "",
      stock: "",
      description: "",
      category: "default",
      img: "",
    });
    setIsCreated(true);
    onClose();
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const defaultImage =
    "https://static.vecteezy.com/system/resources/previews/005/080/698/non_2x/diamond-ring-icon-good-for-printing-in-trendy-two-tone-style-isolated-on-soft-blue-background-free-vector.jpg";
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <ProductFormPresenter
      newProduct={newProduct}
      error={error}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      onClose={onClose}
    />
  );
};

export default ProductFormContainer;
