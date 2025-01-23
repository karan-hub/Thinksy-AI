import { useState, useRef, useEffect } from "react";

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null); // Properly typed ref

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isModalOpen]);

  return (
    <div>
      {/* Button to open the modal */}
      <button
        onClick={toggleModal}
        className="hover-lift bg-black text-white px-8 py-3 rounded-lg transition-all"
      >
        Contact Us
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          ref={modalRef} // Attach the ref here
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          {/* Modal content */}
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
            {/* Close button */}
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>

            {/* Modal body */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg mb-6">
                We’d love to hear from you! Reach out to us:
              </p>
              <p className="text-lg mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:karanc4143@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  karanc4143@gmail.com
                </a>
              </p>
              <p className="text-lg mb-6">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+8485058284"
                  className="text-blue-500 hover:underline"
                >
                  848-505-8284
                </a>
              </p>
              <button
                onClick={toggleModal}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
