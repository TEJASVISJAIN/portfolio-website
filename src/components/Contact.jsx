import React,{useState} from "react";
import toastr from "toastr";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (formData.name.trim() === "" || formData.email.trim() === "" || formData.message.trim() === "") {
      toastr.error("Please fill in all fields", "", { closeButton: true, positionClass: "toast-bottom-right", timeOut: 5000 });
      return;
    } else {
      try {
        // If all fields are filled, submit the form
        const response = await fetch("https://getform.io/f/30e51506-7a4a-42e4-aa7e-4d83bd7bf403", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          toastr.success("Form submitted successfully", "", { closeButton: true, positionClass: "toast-bottom-right", timeOut: 5000 });
          // Reset form fields after successful submission
          setFormData({
            name: "",
            email: "",
            message: ""
          });
        } else {
          toastr.error("Failed to submit form. Please try again later", "", { closeButton: true, positionClass: "toast-bottom-right", timeOut: 5000 });
        }
      } catch (error) {
        toastr.error("An error occurred while submitting the form. Please try again later", "", { closeButton: true, positionClass: "toast-bottom-right", timeOut: 5000 });
      }
    }
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
          onSubmit={handleSubmit}
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={e=>handleChange(e)}
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={e=>handleChange(e)}
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={e=> handleChange(e)}
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
