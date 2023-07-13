import { useState } from "react";
import classNames from "classnames";
import { Typography } from "components/elements";

const Tab = ({ className, children }) => {
  const [active, setActive] = useState(children[0]?.props.index);

  return (
    <div className={classNames("flex flex-col", className)}>
      <div className="flex flex-row gap-[60px]">
        {children?.map((child) => {
          const { label, index } = child.props;
          return (
            <button key={index} onClick={() => setActive(index)}>
              {active === index ? (
                <Typography type="h6">{label}</Typography>
              ) : (
                <p className="text-white/[0.7] text-2xl">{label}</p>
              )}
            </button>
          );
        })}
      </div>
      <div>
        {children?.map((child) => {
          const { index } = child.props;
          return index === active && <>{child}</>;
        })}
      </div>
    </div>
  );
};

export const TabContent = ({ label, index, children }) => {
  return (
    <div label={label} index={index} className="py-10">
      {children}
    </div>
  );
};

export default Tab;
