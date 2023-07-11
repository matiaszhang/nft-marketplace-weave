import { useState } from "react";
import classNames from "classnames";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "../Typography";

const Accordion = ({ className, icon, title, children }) => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <div className={classNames(className, "rounded-xl", "border-2")}>
      <div className="flex flex-row justify-between bg-gradientLight p-6 items-center rounded-t-lg">
        <div className="flex flex-row gap-3 justify-center items-center">
          <FontAwesomeIcon icon={icon} size="lg" />
          <Typography type="h7">{title}</Typography>
        </div>
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={isCollapse ? faChevronUp : faChevronDown}
          size="lg"
          onClick={() => setIsCollapse(!isCollapse)}
        />
      </div>
      {isCollapse && <div className="flex flex-col h-[495px]">{children}</div>}
    </div>
  );
};

export default Accordion;
