import classNames from "classnames";

const Typography = ({ type, children }) => {
  return (
    <p
      className={classNames("font-semibold", {
        "text-[64px]/[84px]": type === "h1",
        "text-[44px]/[58px]": type === "h2",
        "text-[40px]/[54px]": type === "h3",
        "text-4xl/[48px]": type === "h4",
        "text-[32px]/[42px]": type === "h5",
        "text-[28px]/[36px] ": type === "h6",
        "text-2xl": type === "h7",
      })}
    >
      {children}
    </p>
  );
};

export default Typography;
