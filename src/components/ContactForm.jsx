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
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <section id="contacts-section" className="py-5 bg-neutral-800">
        <div className="custom-container py-20 mx-auto text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-10">
            Contact Me
          </h3>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-start md:items-center w-full px-4">
            <div className="w-full md:basis-1/3 flex flex-col gap-10">
              <div className="flex gap-6 items-start">
                <i className="bi-duotone bi-solid bi-phone text-xl px-6 py-5 rounded-sm bg-sky-800"></i>
                <p className="flex flex-col text-start gap-2">
                  <span className="font-bold text-xl">Phone Number</span>
                  <span>+93 (0)781372682</span>
                </p>
              </div>
              <div className="flex gap-8">
                <i className="bi-solid bi-envelope text-xl px-6 py-5 rounded-sm bg-sky-800"></i>
                <p className="flex flex-col text-start gap-2 text-wrap">
                  <span className="font-bold text-xl">Email</span>
                  <span className="text-wrap">hanifatavassoli@gmail.com</span>
                </p>
              </div>
              <div className="flex gap-8">
                <i className="bi-solid bi-house text-xl px-6 py-5  rounded-sm bg-sky-800"></i>
                <p className="flex flex-col text-start gap-2">
                  <span className="font-bold text-xl">Location</span>
                  <span>Herat, Afghanistan</span>
                </p>
              </div>
            </div>

            <form
              className="form w-full bg-neutral-900 md:basis-2/3 text-start text-white shadow shadow-sky-500/50"
              onSubmit={handleSubmit}
            >
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
                      className="block w-full rounded-sm bg-neutral-800 px-3 py-1.5 text-neutral-400 placeholder:text-gray-400 shadow-sky-500/50 focus:shadow-[0_0_10px_1px] focus:border focus:border-sky-500 outline-none sm:text-sm/6 transition-shadow duration-200"
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
                      className="block w-full rounded-sm bg-neutral-800 px-3 py-1.5 text-neutral-400 placeholder:text-gray-400 shadow-sky-500/50 focus:shadow-[0_0_10px_1px] focus:border focus:border-sky-500 outline-none sm:text-sm/6 transition-shadow duration-200"
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
                      className="block w-full rounded-sm bg-neutral-800 px-3 py-1.5 text-neutral-400 placeholder:text-gray-400 shadow-sky-500/50 focus:shadow-[0_0_10px_1px] focus:border focus:border-sky-500 outline-none sm:text-sm/6 transition-shadow duration-200"
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
                      className="block w-full rounded-sm bg-neutral-800 px-3 py-1.5 text-neutral-400 placeholder:text-gray-400 shadow-sky-500/50 focus:shadow-[0_0_10px_1px] focus:border focus:border-sky-500 outline-none sm:text-sm/6 transition-shadow duration-200"
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
          </div>
        </div>

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
