import { Context } from 'koa'
import Router from 'koa-router'
import { getUserController, postUserController, putGuildUserController } from '../../controllers/users'
import { IGuild , RequestBody, IUser, IUserToDB } from '../../types'
import { createIUser } from '../../utils'

const router = new Router({})

router.get('/user/:userId/guild/:guildId', async (ctx: Context) => {
	try {
		const userId = ctx.params.userId as IUser['id']
		const guildId = ctx.params.guildId as IGuild['id']
    
		ctx.body = await getUserController(userId, guildId)    
		ctx.status = 200
	} catch(e: unknown) {
		if (e instanceof Error) ctx.body = { message: e.message }
		ctx.status = 400
	}
})

router.post('/user/:userId/guild/:guildId', async (ctx: Context) => {
	try {
		const body = ctx.request.body as RequestBody
		const user = body.user as IUser
		const guild = body.guild as IGuild

		const iUser = createIUser(user, guild) as IUserToDB
		ctx.body = await postUserController(iUser)
		ctx.status = 200
	} catch(e: unknown) {
		if (e instanceof Error) ctx.body = { message: e.message }
		ctx.status = 400
	}
})

router.put('/user/:userId/guild/:guildId', async (ctx: Context) => {
	try {
		const userId = ctx.params.userId
		const guildId = ctx.params.guildId
		const body = ctx.request.body as RequestBody
		const user = body.user as IUser
		const guild = body.guild as IGuild
		const iUser = createIUser(user, guild) as IUserToDB

		const userUpdate = await putGuildUserController(userId, guildId, iUser)
		if (!userUpdate) {
			ctx.body = 'User not found'
			ctx.status = 200
		}
		if (userUpdate) {
			ctx.body = userUpdate
			ctx.status = 200
		}
	} catch(e: unknown) {
		if (e instanceof Error) ctx.body = { message: e.message }

		ctx.status = 400
	}
})

export default router