import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductList = ({
  product,
  deleteProductById,
  setSelectedProduct,
  setShowModal,
  updateProductById,
}) => {
  const ringImg = "https://i.imgur.com/nIrKEXq.jpeg";
  const earringsImg = "https://i.imgur.com/tRC15fU.jpeg";
  const watchImg = "https://i.imgur.com/9KWnset.jpeg";
  const bracelet = "https://i.imgur.com/oACPehg.jpeg";
  const neckalceImg = "https://i.imgur.com/XE8zM46.jpeg";
  return (
    <div className="mx-4">
      <div className="overflow-x-auto ">
        <table className="w-full table-auto " style={{ tableLayout: "fixed" }}>
          <tbody className="text-gray-700">
            <tr className="border-b">
              <td className="w-1/12 px-2 py-2 text-center sm:table-cell text-xs text-gray-400">
                {product.id}
              </td>
              <td className="w-1/12 px-1 p-1 sm:table-cell">
                <div className="flex justify-center items-center">
                  <img
                    src={
                      product.img === ""
                        ? product.category === "anillos"
                          ? ringImg
                          : product.category === "aretes"
                          ? earringsImg
                          : product.category === "reloj"
                          ? watchImg
                          : product.category === "pulseras"
                          ? bracelet
                          : neckalceImg
                        : product.img
                    }
                    alt={product.name}
                    className="lg:w-10 rounded-md"
                  />
                </div>
              </td>
              <td className="w-1/12 h-auto overflow-ellipsis whitespace-normal truncate sm:whitespace-normal px-2 py-2 text-xs md:text-sm text-left sm:table-cell">
                {product.name}
              </td>
              <td className="w-1/12 px-2 py-2 text-xs md:text-sm text-right sm:table-cell">
                $ {product.price}
              </td>
              <td className="w-1/12 px-2 py-2 text-xs md:text-sm text-right sm:table-cell">
                {product.stock}
              </td>
              <td className="w-2/12 px-2 py-2 text-right hidden md:table-cell sm:text-sm">
                {product.description}
              </td>
              <td className="w-1/12 px-2 py-2 text-xs md:text-sm text-right sm:table-cell">
                {product.category}
              </td>
              <td className="w-1/12 px-2 py-2  text-xs md:text-sm hidden md:table-cell text-right sm:table-cell bg-indigo-50">
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    onClick={() => deleteProductById(product.id)}
                    icon={faTrash}
                    className="p-2 hover:bg-red-600 rounded-md hover:text-white cursor-pointer"
                  />
                  <FontAwesomeIcon
                    onClick={() => {
                      setSelectedProduct(null);
                      setShowModal(true);
                      updateProductById(product.id);
                    }}
                    icon={faEdit}
                    className="p-2 ml-2 hover:bg-blue-600 rounded-md hover:text-white cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
