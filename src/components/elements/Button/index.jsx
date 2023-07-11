const Button = ({ variant = "primary", className, children }) => {
  return (
    <button
      className={`${className} bg-gradientPrimary hover:bg-gradientSecondary py-2.5 px-5 text-white rounded-lg text-xl`}
    >
      {children}
    </button>
  );
};

export default Button;
