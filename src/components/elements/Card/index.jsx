import classNames from "classnames";

const Card = ({ className, children }) => {
  return (
    <div
      className={classNames("bg-gradientCard bg-origin-border border-2 border-transparent rounded-lg", className)}
      style={{ backgroundClip: "padding-box, border-box" }}
    >
      <div className="bg-gradientLight rounded-md">{children}</div>
    </div>
  );
};

export default Card;
