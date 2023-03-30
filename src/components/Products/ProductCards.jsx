const ProductCards = ({ product, deleteProductById, updateProductById }) => {
  const ringImg = "https://i.imgur.com/nIrKEXq.jpeg";
  const earringsImg = "https://i.imgur.com/tRC15fU.jpeg";
  const watchImg = "https://i.imgur.com/9KWnset.jpeg";
  const bracelet = "https://i.imgur.com/oACPehg.jpeg";
  const neckalceImg = "https://i.imgur.com/XE8zM46.jpeg"

  return (
    <section className="mt-8 mx-3 mb-4 bg-white flex flex-col sm:flex-row rounded-lg overflow-hidden border shadow-md">
      <div className="flex-shrink-0 self-center">
        <div className=" h-36  sm:h-56 sm:w-56">
          <img
            className="object-center sm:object-cover sm:h-full sm:w-full"
            src={product.img === "" ? 
            (product.category === "anillos" ? ringImg : 
             product.category === "aretes" ? earringsImg :
             product.category === "reloj" ? watchImg :
             product.category === "pulseras" ? bracelet :
             neckalceImg)
            : product.img
          }
            alt={product.name}
          />
        </div>
      </div>

      <div className="flex-1 bg-white p-5 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h2 className=" text-lg font-medium text-gray-900 normal-case">
                {product.name}
              </h2>
              <h3 className=" text-xs text-blue-500 capitalize">
                {product.category}
              </h3>
            </div>
            <h6 className="text-xs text-gray-400">Ref. {product.id}</h6>
          </div>
          <p className="text-sm mt-3 text-gray-500">{product.description}</p>
          <div className="mt-2 text-md font-medium text-gray-900">
            ${product.price}
          </div>
        </div>

        <div className="flex justify-between items-end mt-4 border-t">
          <div className="flex">
            <button
              onClick={() => updateProductById(product.id)}
              className="text-sm px-6 py-1 bg-blue-600 text-white rounded-full hover:bg-gray-700 mr-3 mt-2"
            >
              Editar
            </button>
            <button
              onClick={() => deleteProductById(product.id)}
              className="text-sm px-6 py-1 bg-slate-800 hover:bg-red-500 text-white rounded-full hover:bg-red-500v mt-2"
            >
              Eliminar
            </button>
          </div>
          <div className=" w-1/6 text-gray-600 text-right capitalize text-sm">
            <div className="lg:hidden xl:block">Cant.</div>
            <div className="lg:hidden xl:block text-right text-slate-800 font-medium bg-zinc-100 rounded-md px-2">{`${product.stock}`}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
