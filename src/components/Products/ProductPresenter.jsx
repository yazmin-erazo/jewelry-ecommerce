import ProductCards from "./ProductCards";
import ProductList from "./ProductList";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ProductTableHeader from "./ProductTableHeader";
import Button from "../common/Button";
import Toggle from "../common/Toggle";

const ProductPresenter = ({
  items,
  handleToggle,
  viewMode,
  deleteProductById,
  onOpen,
  setSelectedProduct,
  setShowModal,
  updateProductById,
}) => {
  return (
    <section className="mt-8 container m-auto ">
      <div>
        <div className="flex justify-between items-center ">
          <Button
            label="Agregar producto"
            icon={faPlusCircle}
            onClick={onOpen}
          />
          <Toggle viewMode={viewMode} handleToggle={handleToggle} />
        </div>
        <div className="flex flex-wrap">
          {viewMode === "list" && <ProductTableHeader />}
          {viewMode === "list"
            ? items.map((product) => {
                return (
                  <div key={product.id}>
                    <ProductList
                      product={product}
                      deleteProductById={deleteProductById}
                      setSelectedProduct={setSelectedProduct}
                      setShowModal={setShowModal}
                      updateProductById={updateProductById}
                    />
                  </div>
                );
              })
            : items.map((product) => {
                return (
                  <div key={product.id} className="w-full lg:w-1/2 lg:inline-block">
                    <ProductCards
                      product={product}
                      deleteProductById={deleteProductById}
                      setSelectedProduct={setSelectedProduct}
                      setShowModal={setShowModal}
                      updateProductById={updateProductById}
                    />
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default ProductPresenter;
