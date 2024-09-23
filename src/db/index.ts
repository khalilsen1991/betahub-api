import mongoose from 'mongoose'

export const mongooseConnection = async ( urlMongo: string ) => {
	try {
		const connection = await mongoose.set('strictQuery', false).connect(urlMongo)
		const mongoDbName = connection.connections[0].name
		console.log(`MongoDB '${mongoDbName}' has connected`)
	} catch(e) {
		console.log(`Error to connect mongodb - ${e}`)
	}
}
