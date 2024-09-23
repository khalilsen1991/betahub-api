/* eslint-disable indent */
import { ObjectId, Schema } from 'mongoose'
import { CardsModel } from '../../db/Schemas/cards'
import { CardObject, ICardGuildUser } from '../../types'

export const CreateUserOrderList = async (guildId: Schema.Types.ObjectId, userId: Schema.Types.ObjectId, cards: ICardGuildUser[]): Promise<CardObject[]> => {
	const cardsFilter: CardObject[] = []
	
/*   const cardListOrdered = cards.sort((a, b) => a..localeCompare(b.cardId))
 */	for (let i = 0; i < cards.length; i++) {
		const findCard = cardsFilter.find((get: CardObject) => { return cards[i].cardId.toString() === get.cardId.toString() })
    if(!findCard) {
      const card = await CardsModel.findOne({ _id: cards[i].cardId })
      if(card) {
        cardsFilter.push(new CardObject(guildId, userId, card?._id, card, cards[i].code, card.rank))
      }
    } 
    if(findCard) {
      findCard.addCode(cards[i].code)
      findCard.count += 1
    }
	}
  
	return cardsFilter
}