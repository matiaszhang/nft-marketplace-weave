import { WeaveMarketAbi } from "./marketplace";
import { mintingAbi } from "./minting";

const CombinedWeaveAbi = [...WeaveMarketAbi, ...mintingAbi];

export default CombinedWeaveAbi;