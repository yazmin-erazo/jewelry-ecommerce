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
  const [isDeleted, setisDeleted] = useState(false);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    setIsCreated(false);
    setisDeleted(false);
    const products = axios.get(API_URL);
    products
      .then((response) => setItems(response.data))
      .catch((error) => console.log("Error al obtener los productos", error));
  }, [isCreated, isDeleted]);

  const handleToggle = (e) => {
    setViewMode(e.target.checked ? "cards" : "list");
  };

  const deleteProductById = (id) => {
    axios.delete(`${API_URL}/${id}`);
    setisDeleted(true);
  };

  const updateProductById = (id) => {
    axios.patch(`${API_URL}/${id}`, {});
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
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
      />

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <ProductFormContainer
            onClose={handleCloseModal}
            setIsCreated={setIsCreated}
            isCreated={isCreated}
          />
        </Modal>
      )}
    </div>
  );
};

export default ProductContainer;
