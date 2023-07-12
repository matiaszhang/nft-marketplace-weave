import classNames from "classnames";

const Button = ({ variant = "primary", className, children }) => {
  return (
    <button
      className={classNames(
        "py-2.5 px-5 text-white rounded-lg text-md sm:text-xl",
        {
          "bg-gradientPrimary hover:bg-gradientSecondary": variant === "primary",
          "bg-transparent hover:text-gray-400": variant === "secondary",
          "bg-transparent border border-white hover:border-gray-400": variant === "outline",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
