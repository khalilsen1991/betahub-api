import { GuildMemberModel } from '../../db/Schemas/guildmembers'
import { GuildsModel } from '../../db/Schemas/guilds'
import { UsersModel } from '../../db/Schemas/users'
import { IGuildMember } from '../../types'

export const postGuildMemberController = async (userId: string, guildId: string, memberGuild: IGuildMember) => {
	try {
		const user = await UsersModel.findOne({ id: userId }).lean()
		if(!user) throw new Error('User not exist')
		
		const guild = await GuildsModel.findOne({ guildId: guildId }).lean()
		if(!guild) throw new Error('Guild not exist')
		
		const existMemberGuild = await GuildMemberModel.findOne({ userId: user._id, guildId: guild._id })
		if(!existMemberGuild){
			const guildMemberSave = new GuildMemberModel({
				userId: user._id,
				guildId: guild._id,
				joinedTimestamp: memberGuild.joinedTimestamp,
				premiumSinceTimestamp: 0,
				nickname: memberGuild.nickname ||'',
				roles: memberGuild.roles,
				avatar: memberGuild.avatar
			})
			return guildMemberSave.save()
		}
		if(existMemberGuild) {
			return existMemberGuild
		}			
	} catch(e) {
		console.log(e)
		throw e
	}
}

export const getGuildMemberController = async (userId: string, guildId: string) => {
	try {
		const user = await UsersModel.findOne({ id: userId }).lean()
		if(!user) throw new Error('User not exist')
		
		const guild = await GuildsModel.findOne({ guildId: guildId }).lean()
		if(!guild)  throw new Error('Guild not exist')
		
		const existMemberGuild = await GuildMemberModel.findOne({ userId: user._id, guildId: guild._id })
		if(!existMemberGuild) throw new Error('GuildMember not found' )
		
		if(existMemberGuild) return existMemberGuild
	} catch(e) {
		console.log(e)
		throw e
	}
}

export const putGuildMemberController = async (userId: string, guildId: string, memberGuild: IGuildMember) => {
	try {
		const user = await UsersModel.findOne({ id: userId }).lean()
		if(!user) throw new Error('User not exist')
		
		const guild = await GuildsModel.findOne({ guildId: guildId }).lean()
		if(!guild)  throw new Error('Guild not exist')
		
		const updateMemberGuild = await GuildMemberModel.findOneAndUpdate(
			{ userId: user._id, guildId: guild._id },
			{
				userId: user._id,
				guildId: guild._id,
				joinedTimestamp: memberGuild.joinedTimestamp,
				premiumSinceTimestamp: 0,
				nickname: memberGuild.nickname ||'',
				roles: memberGuild.roles,
				avatar: memberGuild.avatar
			},
			{ new: true }
		)
		if(!updateMemberGuild) throw new Error('GuildMember not found')
		if(updateMemberGuild) {
			return updateMemberGuild
		}			
	} catch(e) {
		console.log(e)
		throw e
	}
}