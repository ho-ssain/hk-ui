import { twMerge } from "tailwind-merge";

// define exclusive color prop types for each variant
type PrimaryColors = {
  bg?: string;
  hoverBg?: string;
  focusRing?: string;
};

type SecondaryColors = {
  text?: string;
  hoverBorder?: string;
  hoverBg?: string;
  focusRing?: string;
  darkHoverBorder?: string;
};

type TertiaryColors = {
  text?: string;
  hoverText?: string;
  focusRing?: string;
  darkHoverText?: string;
};

// define the base props
type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonComponent = {
  (
    props: BaseButtonProps & { variant?: "primary"; colors?: PrimaryColors }
  ): JSX.Element;
  (
    props: BaseButtonProps & { variant: "secondary"; colors?: SecondaryColors }
  ): JSX.Element;
  (
    props: BaseButtonProps & { variant: "tertiary"; colors?: TertiaryColors }
  ): JSX.Element;
};

const Button: ButtonComponent = ({
  variant = "primary",
  colors = {},
  ...props
}) => {
  // Base class
  const baseClasses: string =
    "inline-flex items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-800 disabled:pointer-events-none disabled:opacity-50";

  const generateVariantClass = (variant: string, colors: any) => {
    switch (variant) {
      case "primary":
        return `border border-transparent py-3 text-white ${
          colors.bg || "bg-emerald-500"
        } ${colors.hoverBg || "hover:bg-emerald-600"} ${
          colors.focusRing || "focus:ring-emerald-500"
        }`;
      case "secondary":
        return `border-2 border-gray-200 py-[0.688rem] hover:text-white dark:border-zinc-700 ${
          colors.text || "text-emerald-500"
        } ${colors.hoverBorder || "hover:border-emerald-500"} ${
          colors.hoverBg || "hover:bg-emerald-500"
        } ${colors.focusRing || "focus:ring-emerald-500"}
          ${colors.darkHoverBorder || "dark:hover:border-emerald-500"}
        `;
      case "tertiary":
        return `border border-transparent py-3 underline-offset-4 ring-offset-white hover:underline ${
          colors.text || "text-emerald-500"
        } ${colors.hoverText || "hover:text-emerald-700"} ${
          colors.focusRing || "focus:ring-emerald-500"
        } ${colors.darkHoverText || "dark:hover:text-emerald-400"}`;
      default:
        return "";
    }
  };

  // generate variant classes based on the extracted color props
  const variantClasses = generateVariantClass(variant, colors);

  // merge the base classes with the variant classes and any additional classes
  const mergeClasses = twMerge([baseClasses, variantClasses]);

  return <button className={mergeClasses} {...props} />;
};

export default Button;
