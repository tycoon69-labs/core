const {
    Transactions
} = require('@tycoon69-labs/crypto')

exports.deserialize = data => {
    return Transactions.Deserializer.deserialize(data)
}
