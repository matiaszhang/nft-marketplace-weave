function Details(props) {
  return (
    <div className=" py-[28px] px-[20px] ">
      <div className=" text-center w-[260px] h-[448px] sm:w-[369px] sm:h-[548px]  bg-zinc-300 rounded-lg shadow-lg">
        <div className="p-[24px]">
          <div className="flex justify-center">
            <img src={props.img} alt="icons" className=" pb-[24px]" />
          </div>
          <div className="text-center w-[220px] h-[330px] sm:w-[348px] sm:h-[368px]">
            <h2 className="text-slate-900 text-[15px] sm:text-[20px] font-bold leading-9">
              {props.title}
            </h2>
            <p
              className="text-center flex flex-wrap sm:w-[348px] sm:h-[368px]  text-slate-900 text-opacity-80 
      text-[15px] sm:text-[18px] font-normal leading-7"
            >
              {props.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Details;
