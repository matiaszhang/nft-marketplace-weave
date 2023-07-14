import { cloneElement } from "react";
import { Button } from "..";

const ToggleButtonGroup = ({ value, onChange, children }) => {
  const handleButtonClick = (buttonValue) => {
    if (onChange) {
      onChange(buttonValue);
    }
  };

  return (
    <div className="flex flex-row p-2 gap-2">
      {children?.map((child) =>
        cloneElement(child, {
          onClick: handleButtonClick,
          active: child.props.value === value,
          key: child.props.value,
        })
      )}
    </div>
  );
};

export const ToggleButton = ({ value, onClick, active, children }) => {
  return (
    <Button onClick={() => onClick(value)} variant={active ? "primary" : "secondary"}>
      {children}
    </Button>
  );
};

export default ToggleButtonGroup;
