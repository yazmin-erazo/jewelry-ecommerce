import React from "react";

const ProductFormPresenter = ({
  newProduct,
  error,
  handleSubmit,
  handleChange,
  onClose,
}) => {
  return (
    <form
      className=" bg-white border rounded-lg py-8 px-5 z-11 relative"
      onSubmit={handleSubmit}
    >
      {error && (
        <div className="bg-red-200 text-red-800 font-medium p-2 rounded-md mb-4">
          Todos los campos son obligatorios
        </div>
      )}
      <div className="mb-4">
        <label
          htmlFor="product-name"
          className="block text-gray-700 font-medium"
        >
          Nombre producto
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Nombre del producto"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-medium">
          Precio producto
        </label>
        <input
          id="price"
          type="text"
          name="price"
          placeholder="Precio del producto"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="stock" className="block text-gray-700 font-medium">
          Cantidad
        </label>
        <input
          id="stock"
          type="number"
          name="stock"
          placeholder="Cantidad"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md text-sm"
          onChange={handleChange}
        />
      </div>

      <div className="mb-2">
        <label
          htmlFor="description"
          className="block text-gray-700 font-medium"
        >
          Descripción del producto
        </label>
        <textarea
          id="description"
          type="text"
          name="description"
          placeholder="Describe el producto"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md h-32 resize-none text-sm"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-gray-700 font-medium mb-2"
        >
          Categoría producto
        </label>
        <select
          id="category"
          name="category"
          defaultValue="default"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400 text-sm"
          onChange={handleChange}
        >
          <option value="default" disabled className="text-gray-400">
            Seleccione una categoría
          </option>
          <option value="anillos" className="text-gray-800 hover:bg-gray-200">
            Anillos
          </option>
          <option value="aretes" className="text-gray-800 hover:bg-gray-200">
            Aretes
          </option>
          <option value="reloj" className="text-gray-800 hover:bg-gray-200">
            Reloj
          </option>
          <option value="collares" className="text-gray-800 hover:bg-gray-200">
            Collares
          </option>
          <option value="pulseras" className="text-gray-800 hover:bg-gray-200">
            Pulseras
          </option>
        </select>
      </div>

      <div className="mb-4 mt-2">
        <label
          className="block text-gray-700 font-medium mb-2 cursor-pointer "
          htmlFor="img"
        >
          Cargar imagenes de producto
        </label>
        <input
          className="cursor-pointer text-sm appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="img"
          type="file"
          multiple
          onChange={handleChange}
        />
      </div>
      <div className="flex">
        <input
          type="button"
          className="mt-8  bg-gray-600 w-full p-3 text-white uppercase font-medium rounded-lg hover:bg-indigo-700 cursor-pointer transition-all mr-4 text-sm"
          value="Cancelar"
          onClick={onClose}
        />
        <input
          type="submit"
          className="mt-8  bg-indigo-600 w-full p-3 text-white uppercase font-medium rounded-lg hover:bg-indigo-700 cursor-pointer transition-all text-sm"
          value="Agregar"
        />
      </div>
    </form>
  );
};

export default ProductFormPresenter;
