import { ChevronDown } from 'lucide-react';

const Select = ({
  label,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  error = '',
  className = '',
  selectClassName = '',
  ...props
}) => {
  return (
    <div className={`relative w-full flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="z-10 text-sm text-gray-700 absolute left-3 top-2 pointer-events-none">
          {label}
        </label>
      )}

      <ChevronDown
        size={18}
        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
      />

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          w-full h-14 px-3 rounded-lg bg-white
          border border-gray-300
          focus:outline-none cursor-pointer
          focus:ring-1 focus:ring-blue-600 focus:border-blue-600
          text-gray-900 pt-6 appearance-none
          ${selectClassName}
        `}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="px-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Select;
