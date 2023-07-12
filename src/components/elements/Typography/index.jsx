import classNames from "classnames";

const Typography = ({ type, children }) => {
  return (
    <p
      className={classNames(
        "font-semibold text-white",
        {
          "text-[24px] sm:text-[64px]/[84px] font-bold": type === "h1",
          "text-[44px]/[58px] font-bold": type === "h2",
          "text-[20px] sm:text-[40px]/[54px] font-bold": type === "h3",
          "text-4xl/[48px] font-bold": type === "h4",
          "text-[14px] sm:text-[32px]/[42px] font-bold": type === "h5",
          "text-[28px]/[36px] font-bold": type === "h6",
          "text-2xl font-bold": type === "h7",
      })}
    >
      {children}
    </p>
  );
};

export default Typography;
