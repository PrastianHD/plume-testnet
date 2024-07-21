"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeSurplusFlag = exports.encodeSurplusArg = void 0;
function encodeSurplusArg(flags, isPairInverted = false) {
    return typeof (flags) === "boolean" ?
        encodeSurplusToggle(flags) : encodeSurplusPair(flags, isPairInverted);
}
exports.encodeSurplusArg = encodeSurplusArg;
function encodeSurplusToggle(flag) {
    return flag ? 0x3 : 0x0;
}
function encodeSurplusPair(flags, isPairInverted = false) {
    const [leftFlag, rightFlag] = flags;
    const [baseFlag, quoteFlag] = isPairInverted ?
        [rightFlag, leftFlag] : [leftFlag, rightFlag];
    return (baseFlag ? 0x1 : 0x0) + (quoteFlag ? 0x2 : 0x0);
}
function decodeSurplusFlag(flag) {
    return [((flag & 0x1) > 0), ((flag & 0x2) > 0)];
}
exports.decodeSurplusFlag = decodeSurplusFlag;
//# sourceMappingURL=flags.js.map