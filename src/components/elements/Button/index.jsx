import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const Button = ({ variant = "primary", className, children, icon, onClick }) => {
  return (
    <button
      className={classNames(
        {
          "bg-gradientPrimary hover:bg-gradientSecondary bg-origin-border  border-transparent  border-2":
            variant === "primary",
          "bg-transparent hover:text-gray-400": variant === "secondary",
          "bg-transparent border-2 border-white hover:border-gray-400": variant === "outline",
        },
        "flex flex-row gap-2 py-2.5 px-5 text-white rounded-lg text-md sm:text-xl items-center",
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
