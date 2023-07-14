import { cloneElement } from "react";
import { Button } from "..";
import classNames from "classnames";

const ToggleButtonGroup = ({ variant = "primary", className, value, onChange, children }) => {
  const handleButtonClick = (buttonValue) => {
    if (onChange) {
      onChange(buttonValue);
    }
  };

  return (
    <div
      className={classNames(
        {
          "bg-gradientPrimaryOutline": variant === "primary",
        },
        "flex flex-row gap-2 py-2.5 px-4 bg-origin-border border-4 border-transparent rounded-lg items-center",
        className
      )}
      style={{ backgroundClip: "padding-box, border-box" }}
    >
      {children?.map((child) =>
        cloneElement(child, {
          onClick: handleButtonClick,
          active: child.props.value === value,
          key: child.props.value,
          variant: variant,
        })
      )}
    </div>
  );
};

export const ToggleButton = ({ value, className, onClick, active, children, variant }) => {
  return (
    <Button className={className} onClick={() => onClick(value)} variant={active ? variant : "secondary"} size="sm">
      {children}
    </Button>
  );
};

export default ToggleButtonGroup;
