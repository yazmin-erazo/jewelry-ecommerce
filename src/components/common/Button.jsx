import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ label, icon, onClick }) => {
  return (
    <button
      className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-gray-700 mr-3 mt-2"
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {label}
    </button>
  );
};

export default Button;
