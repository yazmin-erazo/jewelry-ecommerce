import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../common/Modal";
import ProductFormContainer from "./ProductFormContainer";
import ProductPresenter from "./ProductPresenter";

const API_URL = "http://localhost:5000/products";

const ProductContainer = () => {
  const [items, setItems] = useState([]);
  const [viewMode, setViewMode] = useState("list");
  const [isCreated, setIsCreated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setIsCreated(false);
    setIsDeleted(false);
    const products = axios.get(API_URL);
    products
      .then((response) => setItems(response.data))
      .catch((error) => console.log("Error al obtener los productos", error));
  }, [isCreated, isDeleted]);

  const handleToggle = (e) => {
    setViewMode(e.target.checked ? "cards" : "list");
  };

  const deleteProductById = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => setIsDeleted(true))
      .catch((error) => console.log("Error al eliminar el producto", error));
  };

  const updateProductById = (id) => {
    axios
      .get(`${API_URL}/${id}`)
      .then((response) => {
        setSelectedProduct(response.data);
        setShowModal(true);
      })
      .catch((error) => console.log("Error al obtener el producto", error));
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  return (
    <div className="">
      <ProductPresenter
        items={items}
        handleToggle={handleToggle}
        viewMode={viewMode}
        deleteProductById={deleteProductById}
        updateProductById={updateProductById}
        onOpen={handleOpenModal}
        setSelectedProduct={setSelectedProduct}
        setShowModal={setShowModal}
      />

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <ProductFormContainer
            onClose={handleCloseModal}
            setIsCreated={setIsCreated}
            isCreated={isCreated}
            selectedProduct={selectedProduct}
          />
        </Modal>
      )}
    </div>
  );
};

export default ProductContainer;
