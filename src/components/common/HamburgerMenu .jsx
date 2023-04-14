import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const HamburgerMenu  = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="flex items-center ml-10 md:hidden">
        <button
          type="button"
          className="text-white focus:outline-none"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={ faBars } size="2x" />
        </button>
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-gray-800">
            <nav className="flex flex-col justify-center items-center h-full text-white">
            <h2 className="text-lg font-medium mb-6">Menú de Joyería</h2>
            <ul className="text-sm">
              <li className="mb-4">
                <a href="#" className="hover:text-blue-500">
                  Anillos
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-blue-500">
                  Pulseras
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-blue-500">
                  Collares
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-blue-500">
                  Aretes
                </a>
              </li>
            </ul>
            <button
              type="button"
              className="absolute top-0 right-0 mt-4 mr-4 text-white focus:outline-none"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </button>
          </nav>
          </div>
        )}
      </div>
    );
}

export default HamburgerMenu 