import { OrderedCappedMap } from "@arkecosystem/core-utils";
import { Interfaces } from "@tycoon69-labs/crypto";

export class TransactionStore extends OrderedCappedMap<string, Interfaces.ITransactionData> {
    public push(value: Interfaces.ITransactionData): void {
        this.set(value.id, value);
    }
}
