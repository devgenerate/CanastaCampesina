const mongoose = require('mongoose')

const schema = mongoose.Schema(
  {
    client: { type: mongoose.Schema.Types.ObjectId, required: true },
    products: [
      product: { type: mongoose.Schema.Types.ObjectId, required: true },
      quantity: { type: Number, required: true },
    ]
  },
  { versionKey: false }
)

module.exports = mongoose.model('order', schema, 'order')
