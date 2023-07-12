import Typography from "../components/elements/Typography";


export default function Artist() {
    return(
        <>
            <div>
                <div className="relative container mx-auto">
                    <img className="w-full" src="../images/Frame 627043.png" 
                    alt="banner"/>
                    <div className="">
                    <img className="relative ml-[25px] sm:ml-[0px] 
                             z-20  bottom-[20px] 
                             sm:bottom-[40px] w-[40px] 
                            sm:w-[100px] rounded-full border-[5px]
                            sm:border-8 border-white" 
                            src="../images/Ellipse 8 (2).png" 
                            alt="profile_img"/>
                    </div>
                </div >
                <div className="px-[30px] sm:px-[0px] container mx-auto ">
                    <div className="flex justify-between">
                        <Typography type="h1">McCoy</Typography>
                        <div className="flex flex-row gap-[15px] "> 
                            <img className=" cursor-pointer w-[15px] h-[15px] sm:w-[30px] sm:h-[30px]" 
                                src="../images/share.png" alt="share"/>
                            <img className="cursor-pointer w-[15px] h-[15px] sm:w-[30px] sm:h-[30px]" 
                            src="../images/menu.png" alt="more" />
                        </div>
                    </div>
                    <div className="flex space-x-6">
                        <Typography type="h5">0xd932...DTED</Typography>
                        <Typography type="h5">Joined January 2019</Typography>
                    </div>
                </div>
                
                <div>

                </div>
                
            </div>
        </>
    )
}