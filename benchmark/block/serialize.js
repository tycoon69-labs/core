const {
    Blocks
} = require('@tycoon69-labs/crypto')

const data = require('../helpers').getJSONFixture('block/deserialized/no-transactions');

exports['core'] = () => {
    return Blocks.Block.serialize(data);
};
