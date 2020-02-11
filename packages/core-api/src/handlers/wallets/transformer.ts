import { Utils } from "@tycoon69-labs/crypto";

export const transformWallet = model => {
    return {
        address: model.address,
        publicKey: model.publicKey,
        username: model.username,
        secondPublicKey: model.secondPublicKey,
        balance: Utils.BigNumber.make(model.balance).toFixed(),
        isDelegate: !!model.username,
        vote: model.vote,
    };
};
