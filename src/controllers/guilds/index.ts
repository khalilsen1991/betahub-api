import { GuildsModel } from '../../db/Schemas/guilds'
import { UsersModel } from '../../db/Schemas/users'
import { IGuild } from '../../types'

export const getGuildsController = async (): Promise<IGuild[]> => {
	return GuildsModel.find()
}