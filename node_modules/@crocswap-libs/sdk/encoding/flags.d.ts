export type CrocSurplusFlags = boolean | [boolean, boolean];
export declare function encodeSurplusArg(flags: CrocSurplusFlags, isPairInverted?: boolean): number;
export declare function decodeSurplusFlag(flag: number): [boolean, boolean];
