const {
    Blocks
} = require('@tycoon69-labs/crypto')

const data = require('../helpers').getJSONFixture('block/deserialized/transactions');

exports['core'] = () => {
    return Blocks.Block.serializeWithTransactions(data);
};
