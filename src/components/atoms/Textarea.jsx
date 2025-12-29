const Textarea = ({
  label,
  value,
  onChange,
  placeholder = '',
  error = '',
  className = '',
  textareaClassName = '',
  rows = 4,
  ...props
}) => {
  return (
    <div className={`relative w-full flex flex-col gap-1 ${className}`}>
      <label
        className={`z-10 text-sm text-gray-700 absolute left-3
          ${value ? 'top-2 opacity-100' : 'top-4 opacity-0'}
          transition-all duration-300 pointer-events-none text-nowrap
        `}
      >
        {placeholder}
      </label>

      <textarea
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`
          w-full min-h-28 px-3 py-2 rounded-lg resize-none
          ${
            error
              ? 'border-2 border-red-600 focus:border-red-600 focus:ring-red-600'
              : 'border border-gray-300 focus:ring-blue-600 focus:border-blue-600'
          }
          focus:outline-none focus:ring-1 transition-all duration-300
          text-gray-900 bg-white
          ${value ? 'pt-7' : 'pt-2'}
          ${textareaClassName}
        `}
        {...props}
      />

      {error && <p className="px-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Textarea;
