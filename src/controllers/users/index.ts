import Joi from 'joi'
import { UsersModel } from '../../db/Schemas/users'
import { IUserDocument, IUserToDB } from '../../types'
import { getMemberByIdSchema, PostUsersSchema } from '../../validates'
import { GuildsModel } from '../../db/Schemas/guilds'
import { GuildMemberModel } from '../../db/Schemas/guildmembers'


export const getUserController = async(userId: IUserToDB['id'], guildId: IUserToDB['guild']['id']): Promise<IUserDocument | string | null> => {
	const result = await getMemberByIdSchema.validate({ userId, guildId }) as Joi.ValidationResult
	if(result.error) throw result.error.details[0].message

	const user = await UsersModel.findOne({ id: userId })
	if(!user) throw new Error('User not exist')
	if(user) return user
	return null
}

export const postUserController = async (user: IUserToDB): Promise<IUserDocument | string | any>  => {
	try {
		if(user.avatar == 'string' || !user.username) return 'Invalid user'
		const result = await PostUsersSchema.validate(user) as Joi.ValidationResult
		if(result.error) throw result.error.details[0].message
		const existUser = await UsersModel.findOne({ id: user.id }).lean()

		if(!existUser){
			const userSave = new UsersModel({
				id: user.id,
				bot: user.bot,
				system: user.system,
				flags: user.flags,
				username: user.username,
				discriminator: user.discriminator,
				avatar: user.avatar,
				guilds: [{
					id: user.guild.id,
					name: user.guild.name,
					icon: user.guild.icon,
					features: user.guild.features,
					available: user.guild.available,
					shardId: user.guild.shardId,
					banner: user.guild.banner,
					description: user.guild.description,
					verificationLevel: user.guild.verificationLevel,
					vanityURLCode: user.guild.vanityURLCode,
					memberCount: user.guild.memberCount,
					systemChannelId: user.guild.systemChannelId,
					joinedTimestamp: user.guild.joinedTimestamp,
					enabled: user.guild.enabled
				}]
			})
			return userSave.save()
		}

		if(existUser) return existUser
	} catch(e) {
		console.log(e)
		throw e
	}
}
	
export const putGuildUserController = async (discordId: IUserToDB['id'], guildId: IUserToDB['guild']['id'], user: IUserToDB): Promise<IUserDocument | null> => {
	try {
		return UsersModel.findOneAndUpdate(
			{ id: discordId },
			{ $push : {
				guilds:  {
					id: user.guild.id,
					name: user.guild.name,
					icon: user.guild.icon,
					features: user.guild.features,
					available: user.guild.available,
					shardId: user.guild.shardId,
					banner: user.guild.banner,
					description: user.guild.description,
					verificationLevel: user.guild.verificationLevel,
					vanityURLCode: user.guild.vanityURLCode,
					memberCount: user.guild.memberCount,
					systemChannelId: user.guild.systemChannelId,
					joinedTimestamp: user.guild.joinedTimestamp,
					enabled: user.guild.enabled
				}
			}}, 
			{ new: true}
		)
	} catch(e) {
		console.log(e)
		throw e
	}
}
