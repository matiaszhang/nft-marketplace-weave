import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const Button = ({ variant = "primary", className, children, icon, onClick, size = "md" }) => {
  return (
    <button
      className={classNames(
        {
          "bg-gradientPrimary hover:bg-gradientSecondary bg-origin-border": variant === "primary",
          "bg-transparent hover:text-gray-400": variant === "secondary",
          "bg-transparent border-white hover:border-gray-400": variant === "outline",
          "py-2.5 px-5": size === "md",
          "py-1.5 px-4": size === "sm",
        },
        "flex flex-row gap-2 text-white rounded-lg text-md sm:text-xl items-center border-2 border-transparent",
        className
      )}
      style={{ backgroundClip: "padding-box, border-box" }}
      onClick={onClick}
    >
      {children}
      {icon && <FontAwesomeIcon icon={icon} size="lg" />}
    </button>
  );
};

export default Button;
