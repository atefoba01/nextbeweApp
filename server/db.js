const mongoose = require('mongoose');

const connectDb = mongoose.connect('mongodb+srv://doadmin:TU89J562oI17XaV0@db-mongodb-blr1-11683-9f0fd56f.mongo.ondigitalocean.com/admin?tls=true&authSource=admin', { useNewUrlParser: true })
const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', 'mongodb://127.0.0.1:27017/jobs')
})

db.on('error', err => {
  console.error('connection error:', err)
})

module.exports = connectDb