import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      unique: true
    },
    name: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: 'user'
    }
  },
  {
    timestamps: true
  }
)

const userModel = mongoose.model('User', userSchema)

export default userModel
