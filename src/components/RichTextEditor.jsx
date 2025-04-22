const RichTextEditor = ({ label, className = "" }) => (
  <div className={`flex flex-col ${className}`}>
    <label className="mb-1 text-sm">{label}</label>
    <textarea
      rows="5"
      className="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-white resize-none"
    ></textarea>
  </div>
);

export default RichTextEditor;
