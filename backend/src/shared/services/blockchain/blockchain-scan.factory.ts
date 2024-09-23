import MoralisService from "./moralis/moralis.service";
import {EChains} from "./tokensContracts.enum";


export default class BlockchainScanFactory {

    static createMoralisETHService() {
        return new MoralisService(EChains.ETH);
    }


}