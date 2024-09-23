import { model, Schema } from 'mongoose'
import { GuildSchema, IUserDocument, IUserModel } from '../../types'

const schema: Schema<IUserDocument>= new Schema({
	id: { type: String},
	bot: { type: Boolean},
	system: { type: Boolean},
	flags: { type : Number},
	username: { type: String},
	discriminator: { type: String} ,
	avatar: { type: String},
	guilds: [GuildSchema],
	timeInVoiceChannel: { type: Number }
},{
	timestamps: true
})

export const UsersModel = model<IUserDocument, IUserModel>('users', schema)
