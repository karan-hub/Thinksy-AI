import { useState } from 'react';
import { Mail } from 'lucide-react';

const ContactUs = () => {
    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => setIsModalOpen(true);

    // Function to close the modal
    const closeModal = () => setIsModalOpen(false);

    return (

        <div className='flex'>
            {/* Button to open the Contact Us modal */}
            <button
                onClick={openModal}
                className="hover-lift bg-black text-white px-8 py-3 rounded-lg transition-all flex items-center mx-auto"
            >
                Contact Us <Mail className="ml-2 h-5 w-5" />
            </button>

            {/* Modal Content */}
            {isModalOpen && (

                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            &times;
                        </button>
                        <div className="flex flex-col items-center">
                            <img src="https://static.wixstatic.com/media/1af1a6_d2249171c686406d8319ca46988a4a4e~mv2.jpg/v1/fill/w_1026,h_555,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1af1a6_d2249171c686406d8319ca46988a4a4e~mv2.jpg" alt="Contact Us" className="mb-4 rounded-lg shadow-md" />
                            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                            <p className="text-lg mb-6 text-center">
                                You can reach out to us by email or phone.
                            </p>
                                    <div className="flex flex-col items-center mb-6">
                                        <p className="text-lg">Email: <a href="mailto:karanc4143@gmail.com" className="text-blue-500 hover:underline">karanc4143@gmail.com</a></p>
                                        <p className="text-lg">Phone: <a href="tel:+8485058284" className="text-blue-500 hover:underline">848-505-8284</a></p>
                                    </div>
                                    <button
                                        onClick={closeModal}
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
