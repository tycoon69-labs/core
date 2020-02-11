const {
    Blocks
} = require('@tycoon69-labs/crypto')

exports.deserialize = data => {
    return Blocks.Block.deserialize(data)
}
