import { Ajv } from "ajv";
import { isValidPeer } from "../utils";

const vendorField = (ajv: Ajv) => {
    ajv.addFormat("vendorField", (data) => {
        return true;
        // try {
        //     return Buffer.from(data, "utf8").length <= maxVendorFieldLength();
        // } catch {
        //     return false;
        // }
    });
};

const validPeer = (ajv: Ajv) => {
    ajv.addFormat("peer", (ip: string) => {
        try {
            return isValidPeer({ ip }, false);
        } catch {
            return false;
        }
    });
};

export const formats = [vendorField, validPeer];
