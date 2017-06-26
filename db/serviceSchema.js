import mongoose from 'mongoose'

const serviceSchema = mongoose.Schema({
  name: String,
  price: Number,
  isChosen: Boolean,
  room: String
})

export default mongoose.model('Service', serviceSchema)