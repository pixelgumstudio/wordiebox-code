// components/Dropdown.tsx
import { useEffect, useRef, useState } from "react";

interface DropdownProps {
  options: any[];
  selected?: (option: string) => void;
  location?: (option: string) => void;
  button?: boolean;
  text?: string;
  title?: string;
  first?: string;
  position?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  location,
  button = true,
  text = "Generate a Random State",
  title,
  first = "",
  position = "",

}) => {
  const [selectedOption, setSelectedOption] = useState<string>(first == "" ? options[0] : first);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null); // Specify type here

  // Function to handle click outside of the modal
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  // Add event listener on mount and clean up on unmount
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  
  return (
    <div className={`relative w-full max-w-[400px] ${position === "" ? "mx-auto" : position}`}>
      {title && <p className="text-16 font-semibold text-black mb-2">{title}</p>}
      <div>
        <button
          type="button" 
          className="border-[#1C1C1C] border shadow-darkbox inline-flex justify-between w-full p-2 text-16 font-medium text-[#1c1c1c] bg-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption}
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.07l3.71-3.84a.75.75 0 111.08 1.04l-4.25 4.4a.75.75 0 01-1.08 0l-4.25-4.4a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {button && (
        <button
          onClick={() => {
            if (location) {
              location(selectedOption);
            }
          }}
          className="w-full mt-8 text-[#1C1C1C] border-[#1C1C1C] bg-[#FC0] border shadow-darkbox p-4 text-16 font-medium hover:bg-[#fc9]"
        >
          {text}
        </button>
      )}
      {isOpen && (
        <div  ref={modalRef} className="absolute z-40 top-14 right-0 border-[#1C1C1C] border shadow-darkbox w-full max-w-[200px] h-[300px] overflow-y-auto hide-scrollbar origin-top-right bg-white divide-y divide-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <button
              onClick={() => {
                setSelectedOption(first);
                setIsOpen(false);
                if (selected) {
                  selected("");
                }
              }}
              className={`${
                first === selectedOption ? "bg-gray-100" : ""
              } group flex items-center px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100`}
            >
              {first}
            </button>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelectedOption(option);
                  setIsOpen(false);
                  if (selected) {
                    selected(option);
                  }
                }}
                className={`${
                  option === selectedOption ? "bg-gray-100" : ""
                } group flex items-center px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100`}
              >
                
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
