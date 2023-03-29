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
  updateProductById,
}) => {
  return (
    <section className="mt-8 container m-auto">
      <div>
        <div className="flex justify-between items-center">
          <Button label="Agregar producto" icon={faPlusCircle} onClick={() => console.log('Click')} />
          <Toggle viewMode={viewMode} handleToggle={handleToggle} />
        </div>

        {viewMode === "list" && <ProductTableHeader />}
        {viewMode === "list"
          ? items.map((product) => {
              return (
                <div key={product.id}>
                  <ProductList
                    product={product}
                    updateProductById={updateProductById}
                    deleteProductById={deleteProductById}
                  />
                </div>
              );
            })
          : items.map((product) => {
              return (
                <div key={product.id} className="lg:w-1/2 lg:inline-block">
                  <ProductCards
                    product={product}
                    updateProductById={updateProductById}
                    deleteProductById={deleteProductById}
                  />
                </div>
              );
            })}
      </div>
    </section>
  );
};

export default ProductPresenter;
