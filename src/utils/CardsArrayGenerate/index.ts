import { ICard } from '../../types'
import { getCardGuildUserController } from '../../controllers/cardGuildUser'

export const CardsArrayGenerate = async (cards: ICard, userId: string, guildId: string) => {
	const cardQuantity = await getCardGuildUserController(userId, cards.code, guildId) as ICard[]
	return cardQuantity.length
}
