import Router from 'koa-router'
import { getGuildsController } from '../../controllers/guilds'

const router = new Router({})

router.get('/guilds/configs', async (ctx) => {
	try {
		ctx.body = await getGuildsController()
		ctx.status = 200
	} catch(e: unknown) {
		if (e instanceof Error) ctx.body = { message: e.message }

		ctx.status = 400
	}
})

export default router
