function NftProps(props) {


  return (
    <div className="cursor-pointer flex justify-center                     
      <div className="container flex flex-col items-center content-center mx-auto rounded-lg ">
        <div className=" border-2 border-white border-solid rounded w-[240px]  sm:w-[393px] sm:h-[339px]">
          <img src={props.img} alt="trending NFT" />
        </div>
        <div
          className="border-2 border-white border-solid
            bg-gradient-to-r
            from-fuchsia-900 to-slate-950 
            rounded backdrop-blur-[100px] bg-opacity-30 pt-[10px] 
            pb-[20px] sm:py-[20px] w-[240px] h-[176px]  sm:w-[393px] sm:h-[226px]"
        >
          <div
            className="w-[240px] h-[156px] 
          sm:w-[393px] sm:h-[196px]"
          >
            <h3
              className="text-white text-[15px] sm:text-[22px] 
                  font-bold leading-9 px-[24px]"
            >
              {props.title}
            </h3>
            <p
              className="text-white text-[8px] text-opacity-80 
                  px-[24px] sm:text-[12px] font-normal leading-snug"
            >
              {" "}
              {props.content}
            </p>
            <div
              className="flex justify-between px-[24px]
               pt-[26px] pb-[20px] "
            >
              <div>
                <p
                  className=" text-white text-[12px]
             sm:text-[20px] font-normal leading-5 sm:leading-7"
                >
                  {props.deadline}
                </p>
                <span
                  className="text-white text-[10px] 
              sm:text-[16px] font-semibold leading-snug"
                >
                  {props.currentBid}
                </span>
              </div>

              <div>
                <p
                  className=" text-white text-[12px]
             sm:text-[20px] font-normal leading-5 sm:leading-7"
                >
                  Current bid
                </p>
                <span
                  className="text-white text-[10px] 
              sm:text-[16px] font-semibold leading-snug"
                >
                  0.32ETH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NftProps;
