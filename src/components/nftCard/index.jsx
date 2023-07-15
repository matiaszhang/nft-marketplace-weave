import classNames from "classnames";
import { Card, Typography } from "components/elements";
import { useState } from "react";

const NFTCard = ({ hero, title, content, deadline, currentBid, size = "lg" }) => {
  const [isHover, setHover] = useState(false);

  return (
    <div
      className="cursor-pointer mx-auto max-w-[400px]"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex flex-col border-2 border-white rounded text-white">
        <div className="w-full overflow-hidden">
          <img src={hero} alt="trending nft" className={classNames({ "scale-110 transition-transform": isHover })} />
        </div>
        <Card className="rounded-none ">
          <div className="flex flex-col p-6 gap-3">
            <Typography type={size === "lg" ? "h6" : "h7"}>{title}</Typography>
            {size === "lg" && (
              <p className="text-base/[22px] text-justify textarea-ellipsis text-white/[0.8]">{content}</p>
            )}
            <div className="flex flex-row justify-between mt-2">
              <div className="flex flex-col gap-1 text-start">
                <p className="text-xl">Ends in</p>
                <p className="text-base/[22px] text-[#C495DC]">{deadline}</p>
              </div>
              <div className="flex flex-col gap-1 text-end">
                <p className="text-xl">Current Bid</p>
                <p className="text-base/[22px] text-[#C495DC]">{currentBid}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NFTCard;
