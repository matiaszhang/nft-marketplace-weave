import classNames from "classnames";

const Input = ({ className, value, onChange, label, placeholder }) => {
  return (
    <div className={classNames("flex flex-col gap-2 text-base/[22px]", className)}>
      <label className="text-[#F3F3F3] font-semibold">{label}</label>
      <input
        className="placeholder-white/[.7] text-white p-5 bg-transparent border border-white rounded-lg"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
