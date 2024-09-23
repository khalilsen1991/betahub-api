import { model, Schema } from 'mongoose'
import { IGuildMemberDocument, IGuildMemberModel } from '../../types'

const schema = new Schema({
	userId: { 
		type: Schema.Types.ObjectId
	},
	guildId: { 
		type: Schema.Types.ObjectId
	},
	joinedTimestamp: { type: Number},
	premiumSinceTimestamp: { type: Number},
	nickname: { type: String},
	roles: [{ type: String}] ,
	avatar: { type: String},
	createdAt: { type: Date },
	updatedAt: { type: Date }
},{
	timestamps: true
})

export const GuildMemberModel = model<IGuildMemberDocument, IGuildMemberModel>('guildmembers', schema)
