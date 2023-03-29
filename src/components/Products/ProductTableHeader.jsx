const ProductTableHeader = () => {
  return (
    <div className="mx-4 mt-8 ">
      <div className="overflow-x-auto rounded-t-md">
        <table className="w-full table-auto " style={{tableLayout: 'fixed'}}>
          <thead className="text-white text-xs text-right">
            <tr className=" bg-gray-800">
              <th className="w-1/12 px-2 py-2 text-center">
                <span className="text-gray-300 font-normal">Ref.</span>
              </th>
              <th className="w-1/12 px-2 py-2 text-center ">
                <span className="text-gray-300 font-normal">Img</span>
              </th>
              <th className="w-1/12 px-2 py-2 overflow-ellipsis whitespace-nowrap truncate">
                <span className="text-gray-300 font-normal">Producto</span>
              </th>
              <th className="w-1/12 px-2 py-2">
                <span className="text-gray-300 font-normal">Precio</span>
              </th>
              <th className="w-1/12 px-2 py-2">
                <span className="text-gray-300 font-normal">Cant.</span>
              </th>
              <th className="w-2/12 px-2 py-2 hidden md:table-cell">
                <span className="text-gray-300 font-normal">Descripción</span>
              </th>
              <th className="w-1/12 px-2 py-2 overflow-ellipsis whitespace-nowrap truncate">
                <span className="text-gray-300 font-normal">Categoría</span>
              </th>
              <th className="w-1/12 px-2 py-2 hidden sm:table-cell ">
                <span className="text-gray-300 font-normal">Acción</span>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default ProductTableHeader;
