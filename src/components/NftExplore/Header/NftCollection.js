import { Link } from 'react-router-dom';

export default function NftCollection() {
    return(
        <>
            <div className="pb-[30px]">
                <h1 className="text-center text-white pt-[70px] text-[20px] sm:text-[44px] font-bold leading-10">
                Trendsetters' Paradise
                </h1>
                <div className="text-white pt-[17px] flex justify-between">
                    <h3 className="text-white text-[16px] sm:text-[28px] font-bold leading-9">
                    Meticulously curated NFT collections
                    </h3>
                    <Link to="/explore" className="text-white text-opacity-80 text-[8px] sm:text-[20px] font-semibold leading-9">
                    View all collections
                    </Link>
                </div>
            </div>
        </>
    )
}