import { getRandomNumber } from '..'
import { IBox, ICard } from '../../types'

export const GetCards = (box: IBox): ICard[] => {
	const cards: ICard[] = []
	const cardsCommon = box.cards.filter(card => card.rarity === 'common')
	const cardsRare = box.cards.filter(card => card.rarity === 'rare')
	const cardsEpic = box.cards.filter(card => card.rarity === 'legendary')
	if(box.rarity === 'common'){
		for (let i = 0; i < 3; i++) {
			const randomNumber = Math.floor(Math.random() * 1000) + 1
			if(randomNumber <= 850) {
				cards.push(cardsCommon[getRandomNumber(0, cardsCommon.length - 1)])
			} else if (randomNumber > 850 && randomNumber < 950) {
				cards.push(cardsRare[getRandomNumber(0, cardsRare.length - 1)])
			}	else if (randomNumber > 950 && randomNumber <= 1000) {
				cards.push(cardsEpic[getRandomNumber(0, cardsEpic.length - 1)])
			}
		}
		return cards
	} 
	if(box.rarity === 'rare'){
		for (let i = 0; i < 3; i++) {
			const randomNumber = Math.floor(Math.random() * 1000) + 1
			if(randomNumber <= 500) {
				cards.push(cardsCommon[getRandomNumber(0, cardsCommon.length - 1)])
			} else if (randomNumber > 500 && randomNumber <= 900) {
				cards.push(cardsRare[getRandomNumber(0, cardsRare.length - 1)])
			}	else if (randomNumber > 900 && randomNumber <= 1000) {
				cards.push(cardsEpic[getRandomNumber(0, cardsEpic.length - 1)])
			}
		}
		return cards
	} if(box.rarity === 'legendary'){
		for (let i = 0; i < 3; i++) {
			const randomNumber = Math.floor(Math.random() * 1000) + 1
			if(randomNumber <= 300) {
				cards.push(cardsCommon[getRandomNumber(0, cardsCommon.length - 1)])
			} else if (randomNumber > 300 && randomNumber <= 700) {
				cards.push(cardsRare[getRandomNumber(0, cardsRare.length - 1)])
			}	else if (randomNumber > 700 && randomNumber <= 1000) {
				cards.push(cardsEpic[getRandomNumber(0, cardsEpic.length - 1)])
			}
		}
		return cards
	}
	return cards		
}