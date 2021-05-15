import mongoose from 'mongoose'
//returns a promise
console.log('asdzxc',process.env.PORT)
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://vivek:vivek@cluster0.2igwf.mongodb.net/customers?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
    } catch (err) {
        console.log(`Error: ${err.message}`.red)
        process.exit(1) //exit with faliure
    }
}

export default connectDB