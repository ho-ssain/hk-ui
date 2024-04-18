import { twMerge } from "tailwind-merge";

// define the type for the props that the input component will accept
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  description?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  description,
  className,
  ...props
}) => {
  // base classes
  const baseClasses: string =
    "block w-full rounded-md border-gray-400 px-4 py-3 text-sm focus:border-emerald-500 focus:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50";

  const mergeClasses: string = twMerge([baseClasses, className]);

  return (
    <div className="max-w-sm space-y-0">
      {label && (
        <label className="mb-2 block text-sm font-medium">{label} </label>
      )}

      <input {...props} className={mergeClasses} />

      {description && (
        <p className="mt-2 text-sm text-gray-500"> {description} </p>
      )}
    </div>
  );
};

export default Input;
