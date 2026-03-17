const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
  {
    userId: String,

    title: {
      type: String,
      required: true
    },

    description: String,

    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending"
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium"
    },

    dueDate: Date
  },
  { timestamps: true }
)

module.exports = mongoose.model("Task", taskSchema)
