import generateUniqueId from 'generate-unique-id'
import { IGuild, IUser, IUserToDB } from '../types'

export const generateCode = () => generateUniqueId({ length: 8, excludeSymbols: ['0'] })

export const createIUser = (user: IUser, guild: IGuild) : IUserToDB => {
	const iUserToDB: IUserToDB = {
		id: user.id,
		bot: user.bot,
		system: user.system,
		flags: user.flags,
		username: user.username,
		discriminator: user.discriminator,
		avatar: user.avatar,
		guild: {
			id: guild.id,
			name: guild.name,
			icon: guild.icon,
			features: guild.features,
			available: guild.available,
			shardId: guild.shardId,
			banner: guild.banner,
			description: guild.description,
			verificationLevel: guild.verificationLevel,
			vanityURLCode: guild.vanityURLCode,
			memberCount: guild.memberCount,
			systemChannelId: guild.systemChannelId,
			joinedTimestamp: guild.joinedTimestamp,
			enabled: true
		}
	}
	return iUserToDB
}

export const getRandomNumber = (min: number, max: number) => Math.floor((Math.random() * (max - min + 1)) + min)
