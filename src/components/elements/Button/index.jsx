import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const Button = ({ variant, className, children, icon, onClick, size = "md" }) => {
  return (
    <button
      className={classNames(
        {
          "border-2 border-transparent bg-gradientPrimary text-white hover:bg-gradientSecondary bg-origin-border":
            variant === "primary",
          "border-2 border-transparent  text-white hover:text-gray-400": variant === "secondary",
          "border-2 text-white border-white hover:border-gray-400": variant === "outline",
          "py-2.5 px-5": size === "md",
          "py-1.5 px-4": size === "sm",
        },
        "flex flex-row gap-2 rounded-lg text-md sm:text-xl items-center bg-transparent",
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
