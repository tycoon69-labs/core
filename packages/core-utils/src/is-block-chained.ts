import { Logger } from "@arkecosystem/core-interfaces";
import { Crypto, Interfaces } from "@tycoon69-labs/crypto";

export const isBlockChained = (
    previousBlock: Interfaces.IBlockData,
    nextBlock: Interfaces.IBlockData,
    logger?: Logger.ILogger): boolean => {

    if (logger) {
        logger.info(`nextBlock.previousBlock=${nextBlock.previousBlock}, previousBlock.id=${previousBlock.id}`);
        logger.info(typeof nextBlock.previousBlock);
        logger.info(typeof previousBlock.id);
    }

    const followsPrevious: boolean = nextBlock.previousBlock === previousBlock.id;
    const isPlusOne: boolean = nextBlock.height === previousBlock.height + 1;

    const previousSlot: number = Crypto.Slots.getSlotNumber(previousBlock.timestamp);
    const nextSlot: number = Crypto.Slots.getSlotNumber(nextBlock.timestamp);
    const isAfterPreviousSlot: boolean = previousSlot < nextSlot;

    const isChained: boolean = followsPrevious && isPlusOne && isAfterPreviousSlot;

    if (logger && !isChained) {
        const messagePrefix: string =
            `Block { height: ${nextBlock.height}, id: ${nextBlock.id}, ` +
            `previousBlock: ${nextBlock.previousBlock} } is not chained to the ` +
            `previous block { height: ${previousBlock.height}, id: ${previousBlock.id} }`;

        let messageDetail: string;

        if (!followsPrevious) {
            messageDetail = `previous block id mismatch`;
        } else if (!isPlusOne) {
            messageDetail = `height is not plus one`;
        } else if (!isAfterPreviousSlot) {
            messageDetail = `previous slot is not smaller: ` +
                `${previousSlot} (derived from timestamp ${previousBlock.timestamp}) VS ` +
                `${nextSlot} (derived from timestamp ${nextBlock.timestamp})`;
        }

        logger.warn(`${messagePrefix}: ${messageDetail}`);
    }

    return isChained;
};
