import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faList } from "@fortawesome/free-solid-svg-icons";

const Toggle = ({ viewMode, handleToggle }) => {
  return (
    <div className="flex justify-end">
      <label
        htmlFor="toggle"
        className={`checked:border-gray-700 ml-2 cursor-pointer text-gray-700 ${
          viewMode === "list"
            ? "py-3 px-4 border rounded-lg hover:bg-indigo-100"
            : "bg-gray-700 text-white py-3 px-4 rounded-lg pointer-events-none"
        }`}
      >
        <FontAwesomeIcon icon={faThLarge} />
      </label>
      <input
        id="toggle"
        type="checkbox"
        onChange={handleToggle}
        checked={viewMode === "cards"}
        className="hidden toggle-checkbox"
      />
      <label htmlFor="toggle" className="toggle-label cursor-pointer"></label>
      <label
        htmlFor="toggle"
        className={`checked:border-gray-700 ml-2 cursor-pointer shadow-inner text-gray-700 ${
          viewMode === "list"
            ? "bg-gray-700 text-white py-3 px-4 rounded-lg pointer-events-none shadow-inner"
            : "py-3 px-4 border rounded-lg hover:bg-indigo-100"
        }`}
      >
        <FontAwesomeIcon icon={faList} />
      </label>
    </div>
  );
};

export default Toggle;
