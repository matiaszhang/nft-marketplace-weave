import classNames from "classnames";

const Button = ({ onClick, variant = "primary", className, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        {
          "bg-gradientPrimary hover:bg-gradientSecondary bg-origin-border  border-transparent": variant === "primary",
          "bg-transparent hover:text-gray-400": variant === "secondary",
          "bg-transparent border-2 border-white hover:border-gray-400": variant === "outline",
        },
        "py-2.5 px-5 text-white rounded-lg text-md sm:text-xl border-2",
        className
      )}
      style={{ backgroundClip: "padding-box, border-box" }}
    >
      {children}
    </button>
  );
};

export default Button;
