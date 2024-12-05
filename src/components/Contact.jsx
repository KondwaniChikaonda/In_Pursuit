"use client";
import Contactdetail from "./Contactdetail";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setStatus({ loading: false, success: data.message, error: null });
        setFormData({ message: "" });
      } else {
        const errorData = await response.json();
        setStatus({ loading: false, success: null, error: errorData.error });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        loading: false,
        success: null,
        error: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div>
      <div className="p-6 flex flex-col items-center bg-cover bg-center">
        <section>
          <h1 className="text-black text-3xl font-bold mb-6 text-center">
            <strong>Contact Me!</strong>
          </h1>
          <div className="my-6 p-6 bg-white bg-opacity-90 rounded-lg w-full max-w-4xl text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Please do not hesitate to reach out for comments.. ❤️
            </h3>
          </div>
          <Contactdetail/>
        </section>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl p-6 bg-white bg-opacity-90 rounded-lg shadow-lg mt-2"
        >
          <textarea
            cols={50}
            rows={7}
            name="message"
            placeholder="Write your message here..."
            className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
            onChange={handleChange}
            value={formData.message}
          ></textarea>
          {status.loading && <p className="text-blue-500 mb-4">Sending...</p>}
          {status.success && <p className="text-green-500 mb-4">{status.success}</p>}
          {status.error && <p className="text-red-500 mb-4">{status.error}</p>}
          <button
            type="submit"
            className="w-fit py-3 px-5 bg-gray-400 text-white font-semibold rounded-md hover:bg-gray-500 transition duration-200"
            disabled={status.loading}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
