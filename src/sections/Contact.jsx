import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending... ✉️");

    const { name, email, message } = formData;

    emailjs
      .send(
        "service_vdi6vh5",
        "template_a1akbgb",
        { name, email, message },
        "bNegSBzD0wU2PshjC"
      )
      .then(() => {
        setStatus("✅ Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("❌ Failed to send! Please try again.");
      });
  };

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10 drop-shadow-lg">
          Let's Connect 💬
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-[#0b1727]/40 backdrop-blur-xl border border-cyan-500/20
          p-8 rounded-2xl shadow-2xl transition hover:shadow-[0_0_30px_#22D3EE] duration-300"
        >
          {/* Input Fields */}
          {["name", "email", "message"].map((field, index) => (
            <div className="relative mb-6" key={index}>
              {field !== "message" ? (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="w-full bg-transparent border-b-2 border-cyan-400/50 
                  focus:border-cyan-300 outline-none py-3 text-white text-base
                  transition peer"
                />
              ) : (
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  rows="4"
                  required
                  className="w-full bg-transparent border-b-2 border-cyan-400/50 
                  focus:border-cyan-300 outline-none py-3 text-white text-base
                  transition peer"
                />
              )}
              <label
                className="absolute left-0 top-3 text-gray-400 text-sm 
                transition-all duration-300 peer-focus:-top-3 peer-focus:text-cyan-300 
                peer-valid:-top-3 peer-valid:text-cyan-300"
              >
                {field === "name"
                  ? "Your Name"
                  : field === "email"
                  ? "Your Email"
                  : "Your Message"}
              </label>
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-cyan-400 text-[#0A192F] font-bold py-3 rounded-lg 
            hover:bg-cyan-300 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Send Message 🚀
          </button>

          {/* Status Message */}
          {status && (
            <p className="mt-4 text-cyan-300 font-medium animate-pulse">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
