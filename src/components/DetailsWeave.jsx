const Details = (props) => {
  return (
    <div className="py-[28px] px-[20px] sm:w-[395px] w-[240px] mx-auto">
      <div className=" bg-zinc-300 rounded-lg shadow-lg">
        <div className="flex justify-center">
          <div className="pt-4 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]">
            <img src={props.img} alt="icons" className=" pb-[24px]" />
          </div>
        </div>
        <div className="text-center pt-5 w-[200px] h-[250px] sm:w-[328px] sm:h-[368px]">
          <h2 className="text-slate-900 text-[12px] sm:text-[18px] font-bold leading-9">{props.title}</h2>
          <p className="text-center flex flex-wrap sm:w-[348px] text-slate-900 text-opacity-80 text-[10px] py-3 px-4 sm:px-8 sm:text-[16px] font-normal leading-3 sm:leading-7">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Details;
