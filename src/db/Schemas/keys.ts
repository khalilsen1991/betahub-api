import { model, Schema } from 'mongoose'
import { IKeysDocument, IKeysModel } from '../../types'

const schema = new Schema({
	userId: {
		type: Schema.Types.ObjectId
	},
	guildId: {
		type: Schema.Types.ObjectId
	},
	memberGuildId: {
		type: Schema.Types.ObjectId
	},
	keys: {
		type: String,
	},
	enabled: {
		type: Boolean,
		default: true
	}
},{
	timestamps: true
})

export const KeysModel = model<IKeysDocument, IKeysModel>('keys', schema)