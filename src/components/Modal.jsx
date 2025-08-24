import { useEffect } from "react";
function Modal({ message, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <>
      <div
        className="fixed inset-0 bg-neutral-900 opacity-85 flex items-center justify-center z-50 custom-opacity"
        onClick={onClose}
      >
        <div
          className="bg-black p-8 rounded-lg max-w-md w-full shadow-xl border-1 border-sky-800 transform transition-all duration-300 ease-in-out scale-95 animate-modal-in"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">
            {message}
          </h2>
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="py-4 sm:w-25 rounded-sm bg-slate-800 text-sky-500 px-10 sm:py-2 text-lg sm:text-sm font-semibold shadow-xs hover:bg-slate-700 hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
