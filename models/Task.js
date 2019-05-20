const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  microtasks: [
    {
      title: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
          type: Date
      },
      date: {
        type: Date,
        default: Date.now
      },
      status: {
        type: String,
        required: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Task = mongoose.model('task', TaskSchema);