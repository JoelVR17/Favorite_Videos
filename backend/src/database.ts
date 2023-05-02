import mongoose from 'mongoose'
import config from './config'

(async () => {1

    try {
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`)
    console.log('database is connected to: ', db.connection.name)
    } catch (error) {
        console.error(error)
    }

})()