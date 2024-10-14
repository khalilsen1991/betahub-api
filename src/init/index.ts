import guildsDefault from './guilds'
import membersDefault from './members'
import { GuildsModel } from '../db/Schemas/guilds'
import { UsersModel } from '../db/Schemas/users'

(async () => {
	const guildDefault = guildsDefault()
	const memberDefault = membersDefault()

	for (let i = 0; i < guildDefault.length; i++) {
		const guild = await GuildsModel.findOne({ guildId: guildDefault[i].guildId })

		if (!guild) {
			const createdGuild = new GuildsModel(guildDefault[i])
			await createdGuild.save()
		}
	}

	for (let i = 0; i < memberDefault.length; i++) {
		const member = await UsersModel.findOne({ 'user.id': memberDefault[i].user.id, guildId: memberDefault[i].guildId })

		if (!member) {
			const createdMember = new UsersModel(memberDefault[i])
			await createdMember.save()
		}
	}
})()
