import classNames from "classnames";

const ListItem = ({ className, avatar, name, status, time, price }) => {
  return (
    <div className={classNames("flex flex-row justify-between items-center p-6", className)}>
      <div className="flex flex-row gap-4">
        <img src={avatar} alt="avatar" />
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row gap-2 items-center justify-center">
            <p className="text-xl sm:text-2xl font-semibold">{name}</p>
            <p className="text-sm sm:text-base/[22px] text-[#F8F8FA]/[0.8]">{status}</p>
          </div>
          <p className="text-base sm:text-lg/[26px] text-[#F8F8FA]/[0.8]">{time}</p>
        </div>
      </div>
      <div className="flex flex-row gap-1 text-base sm:text-xl">
        <label>{price}</label>
        <label>ETH</label>
      </div>
    </div>
  );
};

export default ListItem;
