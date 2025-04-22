import React, { useState } from "react";
const TestOne = () => {
  const options = ["React", "HTML", "CSS", "JavaScript"];
  const [fields, setFields] = useState([
    { id: Date.now(), tech: "", desc: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...fields];
    updated[index][field] = value;
    setFields(updated);
  };

  const handleAdd = () => {
    setFields((prev) => [...prev, { id: Date.now(), tech: "", desc: "" }]);
  };

  const handleDelete = (id) => {
    setFields((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="container">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Dynamic Fields</h1>

        {fields.map((field, index) => (
          <div
            key={field.id}
            className="flex items-center gap-3 mb-4 border p-4 rounded-md"
          >
            <span className="font-semibold text-lg w-5">{index + 1}.</span>

            <select
              value={field.tech}
              onChange={(e) => handleChange(index, "tech", e.target.value)}
              className="border text-black rounded px-3 py-2"
            >
              <option value="">Select Tech</option>
              {options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>

            <textarea
              value={field.desc}
              onChange={(e) => handleChange(index, "desc", e.target.value)}
              placeholder="Description"
              className="border text-black rounded px-3 py-2 w-64 h-[40.8px]"
            />

            <button
              onClick={handleAdd}
              className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
            >
              Add
            </button>

            {fields.length > 1 && (
              <button
                onClick={() => handleDelete(field.id)}
                className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestOne;
