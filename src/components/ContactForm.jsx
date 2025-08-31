import { useState, useEffect } from "react";
import Modal from "./Modal";
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isDirty, setIsDirty] = useState(false); // For unsent message hint

  // Pre-fill the form if there is data in localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      setFormData(JSON.parse(savedData));
      setIsDirty(true);
    }
  }, []);

  useEffect(() => {
    if (
      formData.name ||
      formData.email ||
      formData.subject ||
      formData.message
    ) {
      localStorage.setItem("data", JSON.stringify(formData));
      setIsDirty(true);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = [];

    if (!formData.name.trim()) validationErrors.push(`Name is required`);

    if (!formData.email.trim()) validationErrors.push(`Email is required`);

    if (!formData.subject.trim()) validationErrors.push(`Subject is required`);

    if (!formData.message.trim()) validationErrors.push(`Message is required`);

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setModalMessage(`Thank you, ${formData.name}! Your message was sent.`);
    setIsModalOpen(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setErrors([]);
    localStorage.removeItem("data");
    setIsDirty(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <section
        id="contacts-section"
        className="py-5 bg-gray-100 text-black dark:bg-neutral-900 dark:text-white"
      >
        <div className="custom-container py-20 mx-auto text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-10">
            Contact Me
          </h3>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-start md:items-center w-full px-4">
            {/* Form Section */}
            <form
              className="form w-full  bg-gray-200/50 dark:bg-neutral-800 md:basis-2/3 text-start text-white shadow-md rounded-lg shadow-sky-500/50 transform transition-transform duration-500 hover:scale-105"
              onSubmit={handleSubmit}
            >
              {isDirty && (
                <p className="mt-3 text-sky-500 text-center">
                  You have unsent message data saved!
                </p>
              )}
              <div className="p-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      id="full-name"
                      placeholder="Full Name"
                      className="block w-full rounded-sm bg-gray-300/50 dark:bg-neutral-900 px-3 py-1.5 text-neutral-800 dark:text-gray-300 placeholder:text-neutral-800 dark:placeholder:text-gray-300  shadow-sky-500/50 focus:shadow-[0_0_10px_1px] focus:border focus:border-sky-500 outline-none sm:text-sm/6 transition-shadow duration-200"
                    />
                    {errors.length > 0 &&
                      errors.includes("Name is required") && (
                        <p className="text-red-500">Name is required</p>
                      )}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      id="email"
                      placeholder="Email"
                      className="block w-full rounded-sm bg-gray-300/50 dark:bg-neutral-900 px-3 py-1.5 text-neutral-800 dark:text-gray-300 placeholder:text-neutral-800 dark:placeholder:text-gray-300 shadow-sky-500/50 focus:shadow-[0_0_10px_1px] focus:border focus:border-sky-500 outline-none sm:text-sm/6 transition-shadow duration-200"
                    />
                    {errors.length > 0 &&
                      errors.includes("Email is required") && (
                        <p className="text-red-500">Email is required</p>
                      )}
                  </div>
                </div>
                <div className="col-span-full">
                  <div className="mt-2">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      id="subject"
                      placeholder="Subject"
                      className="block w-full rounded-sm bg-gray-300/50 dark:bg-neutral-900 px-3 py-1.5 text-neutral-800 dark:text-gray-300 placeholder:text-neutral-800 dark:placeholder:text-gray-300 shadow-sky-500/50 focus:shadow-[0_0_10px_1px] focus:border focus:border-sky-500 outline-none sm:text-sm/6 transition-shadow duration-200"
                    />
                    {errors.length > 0 &&
                      errors.includes("Subject is required") && (
                        <p className="text-red-500">Subject is required</p>
                      )}
                  </div>
                </div>
                <div className="col-span-full">
                  <div className="mt-2">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      id="message"
                      rows="5"
                      placeholder="Message"
                      className="block w-full rounded-sm bg-gray-300/50 dark:bg-neutral-900 px-3 py-1.5 text-neutral-800 dark:text-gray-300 placeholder:text-neutral-800 dark:placeholder:text-gray-300 shadow-sky-500/50 focus:shadow-[0_0_10px_1px] focus:border focus:border-sky-500 outline-none sm:text-sm/6 transition-shadow duration-200"
                    ></textarea>
                    {errors.length > 0 &&
                      errors.includes("Message is required") && (
                        <p className="text-red-500">Message is required</p>
                      )}
                  </div>
                </div>
                <div className="col-span-full mt-3">
                  <button
                    type="submit"
                    className="w-full py-4 sm:w-25 rounded-sm bg-slate-800 text-sky-500 px-10 sm:py-2 text-lg sm:text-sm font-semibold shadow-xs hover:bg-slate-700 hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>

            {/* Live Preview Section */}
            <div className="w-full md:basis-1/3 p-8 bg-gray-200/50 dark:bg-neutral-800 rounded-lg shadow-md shadow-sky-500/50 transform transition-transform duration-500 hover:scale-105">
              <h2 className="text-2xl font-bold mb-8 text-center ">
                Live Preview
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg  text-sky-400">Name:</span>
                  <span className=" ">{formData.name || "Your Name"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-sky-400">Email:</span>
                  <span className="">{formData.email || "Your Email"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-sky-400">Subject:</span>
                  <span className="">{formData.subject || "Your Subject"}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-lg  text-sky-400">Message:</span>
                  <p className=" max-w-full break-words">
                    {formData.message || "Your Message"}
                  </p>
                </div>
              </div>
              <div className="mt-6 text-sm  text-center">
                <p className="italic">
                  * This is how your message will look when submitted
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <Modal
          message={modalMessage}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </section>
    </>
  );
}

export default ContactForm;
