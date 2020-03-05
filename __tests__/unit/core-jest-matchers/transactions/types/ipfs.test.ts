import "../../../../../packages/core-jest-matchers/src/transactions/types/ipfs";

import { Enums } from "@tycoon69-labs/crypto";
const { TransactionType } = Enums;

describe(".toBeIpfsType", () => {
    test("passes when given a valid transaction", () => {
        expect({ type: TransactionType.Ipfs }).toBeIpfsType();
    });

    test("fails when given an invalid transaction", () => {
        expect(expect({ type: "invalid" }).toBeIpfsType).toThrowError("Expected value to be a valid IPFS transaction.");
    });
});
