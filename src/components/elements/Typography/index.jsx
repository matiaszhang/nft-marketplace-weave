import classNames from "classnames";

const Typography = ({ type, children }) => {
  return (
    <p
      className={classNames({
        "text-[64px]/[84px] font-bold": type === "h1",
        "text-[44px]/[58px] font-bold": type === "h2",
        "text-[40px]/[54px] font-bold": type === "h3",
        "text-4xl/[48px] font-bold": type === "h4",
        "text-[32px]/[42px] font-bold": type === "h5",
        "text-[28px]/[36px] font-bold": type === "h6",
        "text-2xl font-bold": type === "h7",
      })}
    >
      {children}
    </p>
  );
};

export default Typography;
