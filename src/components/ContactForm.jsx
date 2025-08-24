import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState([]);

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

    if (!formData.message.trim())
      validationErrors.push(`M
      essage is required`);

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setErrors([]);
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
                <i className="fa-duotone fa-solid fa-phone text-xl p-6 rounded-sm bg-sky-800"></i>
                <p className="flex flex-col text-start gap-2">
                  <span className="font-bold text-xl">Phone Number</span>
                  <span>+93 (0)781372682</span>
                </p>
              </div>
              <div className="flex gap-8">
                <i className="fa-solid fa-envelope text-xl p-6 rounded-sm bg-sky-800"></i>
                <p className="flex flex-col text-start gap-2 text-wrap">
                  <span className="font-bold text-xl">Email</span>
                  <span className="text-wrap">hanifatavassoli@gmail.com</span>
                </p>
              </div>
              <div className="flex gap-8">
                <i className="fa-solid fa-home text-xl p-6 rounded-sm bg-sky-800"></i>
                <p className="flex flex-col text-start gap-2">
                  <span className="font-bold text-xl">Location</span>
                  <span>Herat, Afghanistan</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
