import { ethers } from 'ethers';
import { CrocContext } from './context';
export declare class CrocSlotReader {
    constructor(context: Promise<CrocContext>);
    isHotPathOpen(): Promise<boolean>;
    readSlot(slot: number): Promise<string>;
    proxyContract(proxyIdx: number): Promise<string>;
    readonly provider: Promise<ethers.Provider>;
    readonly dex: Promise<string>;
}
