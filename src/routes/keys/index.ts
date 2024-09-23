import Router from 'koa-router'
import { getKeysAviableController, postKeysController } from '../../controllers/keys'
import { RequestBody } from '../../types'

const router = new Router({})

router.get('/get-keys/guild-member/:userId/guild/:guildId/keys/:keys', async (ctx) => {
	try {
		const guildId = ctx.params.guildId
		const userId = ctx.params.userId
		const keys = ctx.params.keys
		ctx.body = await getKeysAviableController(userId, guildId, keys)
		ctx.status = 200
	} catch(e: unknown) {
		if(typeof e === 'string')ctx.body = { message: e }
		if (e instanceof Error) ctx.body = { message: e.message }

		ctx.status = 400
	}
})

router.post('/post-keys/guild-member/:userId/guild/:guildId', async (ctx) => {
	try {
		const userId = ctx.params.userId
		const guildId = ctx.params.guildId
		const body = ctx.request.body as RequestBody
		const keys = body.keys
		ctx.body = await postKeysController(userId, guildId, keys)
		ctx.status = 200
	} catch(e: unknown) {
		if(typeof e === 'string')ctx.body = { message: e }
		if (e instanceof Error) ctx.body = { message: e.message }

		ctx.status = 400
	}
})

export default router
