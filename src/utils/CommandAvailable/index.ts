import { Document } from 'mongoose'

export const CommandAvailable = async (document: any, command: string) => {
	const dateLastUse = new Date(document.createdAt)
	const today = new Date()
	const diferenciaMinutos = Math.round(Math.abs(dateLastUse.getTime() - today.getTime()) / (1000 * 60))
	const rtf1 = new Intl.RelativeTimeFormat('es', { numeric: 'auto' })
	if(diferenciaMinutos < 5 && command === 'album'){
		return `${rtf1.format(5 - diferenciaMinutos, 'minute').charAt(0).toUpperCase() + rtf1.format(5 - diferenciaMinutos, 'minute').slice(1)} podrás volver a ver tu ${command}`
	}
	if(diferenciaMinutos < 2 && command === 'perfil'){
		return `${rtf1.format(2 - diferenciaMinutos, 'minute').charAt(0).toUpperCase() + rtf1.format(2 - diferenciaMinutos, 'minute').slice(1)} para poder ver otro ${command}`
	}
	if(diferenciaMinutos < 5 && command === 'duel'){
		return `${rtf1.format(5 - diferenciaMinutos, 'minute').charAt(0).toUpperCase() + rtf1.format(5 - diferenciaMinutos, 'minute').slice(1)} podrás volver a usar el comando /${command}`
	} 
	if(diferenciaMinutos < 1 && command === 'inventory'){
		return `${rtf1.format(1 - diferenciaMinutos, 'minute').charAt(0).toUpperCase() + rtf1.format(1 - diferenciaMinutos, 'minute').slice(1)} podrás volver a ver tu ${command}`
	}
	if(diferenciaMinutos < 1 && command === 'tienda'){
		return `${rtf1.format(1 - diferenciaMinutos, 'minute').charAt(0).toUpperCase() + rtf1.format(1 - diferenciaMinutos, 'minute').slice(1)} podrás volver a ver la ${command}`
	}
	if(diferenciaMinutos < 3 && command === 'burn'){
		return `${rtf1.format(3 - diferenciaMinutos, 'minute').charAt(0).toUpperCase() + rtf1.format(3 - diferenciaMinutos, 'minute').slice(1)} podrás volver a usar ${command}`
	}	
	return `Command ${command} aviable`
}

/* 

const dateLastUse = new Date(data.createdAt)
	const today = new Date()
	const diferenciaMinutos = Math.round(Math.abs(dateLastUse.getTime() - today.getTime()) / (1000 * 60))
	const rtf1 = new Intl.RelativeTimeFormat('es', { numeric: 'auto' })
	if(diferenciaMinutos < 10){
		return `En ${rtf1.format(10 - diferenciaMinutos, 'minute')} podrás volver a ver tu album`
	} else {
		return 'album aviable'
	}


*/