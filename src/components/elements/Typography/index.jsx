import classNames from "classnames";

const Typography = ({ className, type, children }) => {
  return (
    <p
      className={classNames(
        "font-semibold text-white",
        {
          "text-[40px]/[54px] md:text-[44px]/[58px] lg:text-[64px]/[84px]": type === "h1",
          "text-4xl/[48px] md:text-[40px]/[54px] lg:text-[44px]/[58px]": type === "h2",
          "text-[32px]/[42px] md:text-4xl/[48px] lg:text-[40px]/[54px]": type === "h3",
          "text-[28px]/[36px] md:text-[32px]/[42px] lg:text-4xl/[48px]": type === "h4",
          "text-2xl md:text-[28px]/[36px] lg:text-[32px]/[42px]": type === "h5",
          "text-xl md:text-2xl lg:text-[28px]/[36px] ": type === "h6",
          "text-lg md:text-xl lg:text-2xl": type === "h7",
        },
        className
      )}
    >
      {children}
    </p>
  );
};

export default Typography;
