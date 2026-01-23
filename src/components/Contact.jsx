import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import toastr from "toastr";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.name.trim() === "" || formData.email.trim() === "" || formData.message.trim() === "") {
      toastr.error("Please fill in all fields!", "", { closeButton: true, positionClass: "toast-bottom-right", timeOut: 5000 });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://getform.io/f/30e51506-7a4a-42e4-aa7e-4d83bd7bf403", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toastr.success("Message sent successfully!", "", { closeButton: true, positionClass: "toast-bottom-right", timeOut: 5000 });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toastr.error("Failed to send message!", "", { closeButton: true, positionClass: "toast-bottom-right", timeOut: 5000 });
      }
    } catch (error) {
      toastr.error("An error occurred!", "", { closeButton: true, positionClass: "toast-bottom-right", timeOut: 5000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div name="contact" className="bg-comic-paper w-full min-h-screen py-20 relative overflow-hidden">
      <div className="absolute top-20 left-10 font-comic text-7xl text-comic-green opacity-10 transform -rotate-12">
        CONTACT!
      </div>
      <div className="absolute bottom-20 right-10 font-comic text-7xl text-comic-purple opacity-10 transform rotate-12">
        CONNECT!
      </div>

      <div className="max-w-screen-lg mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-comic text-6xl md:text-7xl text-comic-green mb-4" style={{
            textShadow: '6px 6px 0px #000, -3px -3px 0px #FFE135'
          }}>
            GET IN TOUCH!
          </h2>
          <div className="h-2 bg-black max-w-md mx-auto mb-6"></div>
          
          <div className="speech-bubble bg-white max-w-2xl mx-auto">
            <p className="font-speech text-xl text-black">
              Got an <strong className="text-comic-red">AWESOME</strong> idea? 
              Let's make it <strong className="text-comic-blue">HAPPEN!</strong> 🚀
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="comic-panel-yellow p-8 animate-slide-in-left">
              <h3 className="font-comic text-3xl text-black mb-4">WHY CONTACT ME?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">💼</span>
                  <div>
                    <h4 className="font-comic text-xl text-comic-red">JOB OPPORTUNITIES</h4>
                    <p className="font-speech text-black">Looking for a developer? Let's talk!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">🤝</span>
                  <div>
                    <h4 className="font-comic text-xl text-comic-blue">COLLABORATION</h4>
                    <p className="font-speech text-black">Have a project idea? Count me in!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">💬</span>
                  <div>
                    <h4 className="font-comic text-xl text-comic-green">JUST SAY HI</h4>
                    <p className="font-speech text-black">Want to chat? Drop a message!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="thought-bubble bg-white p-6">
              <p className="font-handwriting text-lg text-black text-center">
                I usually respond within 24 hours! ⏰
              </p>
            </div>
          </div>

          <div className="comic-panel bg-white p-8 animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-comic text-xl text-black mb-2 block">YOUR NAME!</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name..."
                  className="w-full px-4 py-3 border-4 border-black rounded-lg font-speech text-lg focus:outline-none focus:border-comic-blue transition-colors"
                />
              </div>

              <div>
                <label className="font-comic text-xl text-black mb-2 block">YOUR EMAIL!</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-4 border-black rounded-lg font-speech text-lg focus:outline-none focus:border-comic-blue transition-colors"
                />
              </div>

              <div>
                <label className="font-comic text-xl text-black mb-2 block">YOUR MESSAGE!</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me what's on your mind..."
                  rows="5"
                  className="w-full px-4 py-3 border-4 border-black rounded-lg font-speech text-lg focus:outline-none focus:border-comic-blue transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full comic-button comic-button-red flex items-center justify-center gap-3 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaPaperPlane size={20} />
                <span className="text-xl">{isSubmitting ? "SENDING..." : "SEND MESSAGE!"}</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block comic-panel-blue p-6">
            <p className="font-speech text-white text-lg">
              Or email me directly at{" "}
              <a href="mailto:tejasvisjain0214@gmail.com" className="font-comic text-comic-yellow hover:text-comic-green transition-colors underline">
                tejasvisjain0214@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
