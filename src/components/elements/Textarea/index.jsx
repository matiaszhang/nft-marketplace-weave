import classNames from "classnames";

const Textarea = ({ className, value, onChange, label, placeholder, rows }) => {
  return (
    <div className={classNames("flex flex-col gap-2 text-base/[22px]", className)}>
      <label className="text-[#F3F3F3] font-semibold">{label}</label>
      <textarea
        className="placeholder-white/[.7] text-white p-5 bg-transparent border border-white rounded-lg"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
};

export default Textarea;
