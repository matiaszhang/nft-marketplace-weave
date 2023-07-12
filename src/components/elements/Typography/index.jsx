import classNames from "classnames";

const Typography = ({ className, type, children }) => {
  return (
    <p
      className={classNames(
        "font-semibold text-white",
        {
          "text-[44px]/[58px] sm:text-[64px]/[84px]": type === "h1",
          "text-[40px]/[54px] sm:text-[44px]/[58px]": type === "h2",
          "text-4xl/[48px] sm:text-[40px]/[54px]": type === "h3",
          "text-[32px]/[42px] sm:text-4xl/[48px]": type === "h4",
          "text-[28px]/[36px] sm:text-[32px]/[42px]": type === "h5",
          "text-2xl sm:text-[28px]/[36px] ": type === "h6",
          "text-xl sm:text-2xl": type === "h7",
        },
        className
      )}
    >
      {children}
    </p>
  );
};

export default Typography;
