import React, { useState } from "react";

const ClientForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log("Form Data being sent:", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: "Test User",
      email: "test@example.com",
      phone: "1234567890",
    };

    try {
      const res = await fetch(
        "https://api.nexgenov8.com/api/addupdatedirectClient",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      console.log("Response:", data);
    } catch (err) {
      console.error("Error submitting:", err);
    }
  };

  //

  return (
    <div className="container">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Add Client</h1>
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Client Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-800 border w-full border-gray-600 px-3 py-2 rounded text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-800 border w-full border-gray-600 px-3 py-2 rounded text-white"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-gray-800 border w-full border-gray-600 px-3 py-2 rounded text-white"
          />
          <div className="flex w-full justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 w-[100px] rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientForm;
