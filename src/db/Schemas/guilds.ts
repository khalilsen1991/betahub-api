import { model, Schema } from 'mongoose'
import { IConfigGuildsDocument, IConfigGuildsModel } from '../../types'

const schema = new Schema({
	guildName: {
		type: String,
		required: true,
	},
	guildId: {
		type: String,
		required: true,
	},
	roleStaffId: {
		type: String,
		required: true,
	},
	channelEventLog: {
		type: String,
	},
	channelSpam: {
		type: String,
	},
	verificationRoleId: {
		type: String,
	},
	generalChannelsIds: [
		{
			type: String,
		},
	],
	logsChannelId: { type: String },
	allowChannelsIds: [{
		type: String,
	}],
	enabled: {
		type: Boolean,
		default: true
	}
},{
	timestamps: true
})

export const GuildsModel = model<IConfigGuildsDocument, IConfigGuildsModel>('guilds', schema)
