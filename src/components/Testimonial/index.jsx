import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonial = ({ avatar, name, time, rate, content }) => {
  return (
    <div className="flex flex-col gap-4 p-5 text-[#130B2B] bg-[#DFD0E3] rounded-xl font-['Open_Sans']">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2">
          <img className="w-[40px]" src={avatar} alt="avatar" />
          <div className="flex flex-col gap-1">
            <p className="text-base/[22px]">{name}</p>
            <div className="flex flex-row gap-1">
              {Array(rate)
                .fill("")
                .map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} color="#998C18" />
                ))}
            </div>
          </div>
        </div>
        <p className="text-xs">{time}</p>
      </div>
      <p className="text-justify text-lg/[26px]">{content}</p>
    </div>
  );
};

export default Testimonial;
