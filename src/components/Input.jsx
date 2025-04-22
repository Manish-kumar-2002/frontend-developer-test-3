const Input = ({
  label,
  type = "text",
  value,
  disabled = false,
  className = "",
}) => (
  <div className={`flex flex-col ${className}`}>
    <label className="mb-1 text-sm">{label}</label>
    <input
      type={type}
      value={value}
      disabled={disabled}
      className="bg-gray-800 border border-gray-600 px-3 py-2 rounded text-white"
      placeholder={label}
    />
  </div>
);

export default Input;
