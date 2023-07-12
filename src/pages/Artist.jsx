import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "../components/elements/Typography";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons";

export default function Artist() {
  return (
    <div className="container mx-auto pb-[100px]">
      <div className="relative mb-10">
        <img className="w-full" src="/images/Frame 627043.png" alt="banner" />
        <img
          className="absolute left-[100px] -bottom-10 w-[200px] rounded-full border-[20px] border-white"
          src="/images/Ellipse 8 (2).png"
          alt="hero"
        />
      </div>
      <div className="pt-5 px-[100px] flex justify-between w-full">
        <div className="flex flex-col">
          <Typography type="h2">McCoy</Typography>
          <div className="flex flex-row gap-[15px] text-2xl font-semibold text-white">
            <label className="">0xd932...DTED</label>
            <label className="">Joined January 2019</label>
          </div>
        </div>
        <div className="flex flex-row gap-4 text-white">
          <FontAwesomeIcon icon={faShareFromSquare} size="lg" />
          <FontAwesomeIcon icon={faEllipsis} size="lg" />
        </div>
      </div>
    </div>
  );
}
