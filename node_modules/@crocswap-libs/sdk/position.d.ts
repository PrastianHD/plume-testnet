import { CrocContext } from './context';
import { CrocTokenView } from './tokens';
type Address = string;
export type BlockTag = number | string;
export declare class CrocPositionView {
    constructor(base: CrocTokenView, quote: CrocTokenView, owner: Address, context: Promise<CrocContext>);
    queryRangePos(lowerTick: number, upperTick: number, block?: BlockTag): Promise<any>;
    queryAmbient(block?: BlockTag): Promise<any>;
    queryAmbientPos(block?: BlockTag): Promise<any>;
    queryKnockoutLivePos(isBid: boolean, lowerTick: number, upperTick: number, block?: BlockTag): Promise<any>;
    queryRewards(lowerTick: number, upperTick: number, block?: BlockTag): Promise<any>;
    readonly owner: Address;
    readonly baseToken: CrocTokenView;
    readonly quoteToken: CrocTokenView;
    readonly context: Promise<CrocContext>;
}
export {};
