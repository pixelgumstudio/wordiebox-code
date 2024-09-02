import { useEffect, useState } from "react";

interface CopyButtonProps {
  textToCopy: string | string[];
  size?: string;
  text?: string;
  style?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  size = "fit",
  text = "Copy Text",
  style = "bg-white text-black",
}) => {
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const handleCopy = () => {
    const word = Array.isArray(textToCopy) ? textToCopy.join(", ") : textToCopy;
    navigator.clipboard
      .writeText(word)
      .then(() => {
        setCopySuccess(true);
        if (word) {
          const timer = setTimeout(() => {
            setCopySuccess(false);
          }, 500); // Clear the message after 3 seconds
          // Clean up the timer when the component unmounts or when copySuccess changes
          return () => clearTimeout(timer);
        }
      })
      .catch((err) => {
        alert("Failed to copy text: " + err);
      });
  };
  return (
    <>
      <button
      disabled={textToCopy.length > 0 ? false : true }
        onClick={handleCopy}
        className={`${
          size === "full" ? "w-full" : "w-fit"
        } border-[#1C1C1C] ${style} border shadow-darkbox py-3 px-2 text-16 font-medium`}
      >
        {text}
      </button>
      {copySuccess && (
        <div className="w-[100vw] h-[100vh] flex items-start justify-center bg-overlay fixed top-0 left-0 px-6 z-20">
        <div className="p-6 bg-[#F8F7F1] mt-20 border text-center border-[#1C1C1C] w-fit max-w-[500px]">
          <p className="text-20 capitalize text-center font-semibold">Copied to clipboard</p>
          {/* <p className="text-20 capitalize text-left">{textToCopy}</p> */}
        </div>
        </div>
      )}
    </>
  );
};

export default CopyButton;
