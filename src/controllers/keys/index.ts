import Joi from 'joi'
import { keysSchema } from '../../validates'
import { GuildsModel } from '../../db/Schemas/guilds'
import { UsersModel } from '../../db/Schemas/users'
import { GuildMemberModel } from '../../db/Schemas/guildmembers'
import { KeysModel } from '../../db/Schemas/keys'

export const getKeysAviableController = async (userId: string, guildId: string, keys: string): Promise<boolean | any> => {
	const result = await keysSchema.validate({ userId, guildId, keys }) as Joi.ValidationResult
	if(result.error) throw result.error.details[0].message

	const guildExist = await GuildsModel.findOne({ guildId })
	if(!guildExist) throw new Error('Guild not exist')

	const userExist = await UsersModel.findOne({ id: userId })
	if(!userExist) throw new Error('User not exist')

	const guildMembersExist = await GuildMemberModel.findOne({ guildId: guildExist._id, userId: userExist._id }).lean()
	if(!guildMembersExist) throw new Error('GuildMember not found')
	
	const findKeys = await KeysModel.find({ userId: userExist._id, guildId: guildExist._id, memberGuildId: guildMembersExist._id, keys })
	console.log(findKeys)
	return findKeys.length > 0 ?  'Key already claim' : 'Key aviable'
}

export const postKeysController = async (userId: string, guildId: string, keys: string): Promise<boolean | any> => {
	const result = await keysSchema.validate({ userId, guildId, keys }) as Joi.ValidationResult
	if(result.error) throw result.error.details[0].message

	const guildExist = await GuildsModel.findOne({ guildId })
	if(!guildExist) throw new Error('Guild not exist')

	const userExist = await UsersModel.findOne({ id: userId })
	if(!userExist) throw new Error('User not exist')

	const guildMembersExist = await GuildMemberModel.findOne({ guildId: guildExist._id, userId: userExist._id })
	if(!guildMembersExist) throw new Error('GuildMember not found')

	const newCommand = new KeysModel({ userId: userExist._id, guildId: guildExist._id, memberGuildId: guildMembersExist._id, keys })
	return newCommand.save()
}