const mongoose = require('mongoose');

const db = mongoose.connection;

db.once("open", () => {
    console.log("Db connected...")
})

const connectDb = async () => {
    await mongoose.connect(`mongodb+srv://mert:${process.env.DB_PASSWORD}@cluster0.fbssk.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = {
    connectDb
}