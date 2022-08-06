const mongoose = require('mongoose');

const connectDb = mongoose.connect('mongodb://127.0.0.1:27017/jobs', { useNewUrlParser: true })
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', 'mongodb://127.0.0.1:27017/jobs')
})

db.on('error', err => {
  console.error('connection error:', err)
})

module.exports = connectDb