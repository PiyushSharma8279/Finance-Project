import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    emailjs
      .send(
        "service_dor4to5",   
        "template_8v6m8yr",  
        {
        
          name: formData.name,
          mail: formData.email,
          phone:formData.phone,
          message:formData.message
        },
        "u6Lan19feHeNIYuvk"    
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Form submitted and email sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email.");
        }
      );
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Form Data Submitted:", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-3 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-3">Contact Us</h2>

       
        <label className="block mb-2 font-medium">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

       
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

       
        <label className="block mb-2 font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      
        <label className="block mb-2 font-medium">Your Message</label>
        <textarea
          name="message"
          placeholder="Type your message..."
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-28 resize-none"
        ></textarea>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300 cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
