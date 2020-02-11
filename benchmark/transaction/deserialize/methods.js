const {
    Transactions
} = require('@tycoon69-labs/crypto')

exports.deserialize = data => {
    return Transactions.deserializer.deserialize(data)
}
