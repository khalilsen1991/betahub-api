import { Context } from 'koa'
import Router from 'koa-router'
import { getGuildMemberController, postGuildMemberController, putGuildMemberController } from '../../controllers/guildMember'
/* import { getLastTeenDuelsController, getTableDuelsController, postDuelController } from '../../controllers/duels'
 */import { IGuild , RequestBody, IUser, IGuildMember/* , IUserToDB */ } from '../../types'
/* import { createIUser } from '../../utils'
 */
const router = new Router({})

router.get('/guild-member/:userId/guild/:guildId', async (ctx: Context) => {
	try {
		const memberId = ctx.params.userId as IUser['id']
		const guildId = ctx.params.guildId as IGuild['id']
		ctx.body = await getGuildMemberController(memberId, guildId)    
		ctx.status = 200
	} catch(e: unknown) {
		if (e instanceof Error) ctx.body = { message: e.message }

		ctx.status = 400
	}
})

router.post('/guild-member/:userId/guild/:guildId', async (ctx: Context) => {
	try {
		const body = ctx.request.body as RequestBody
		const userId = ctx.params.userId
		const guildId = ctx.params.guildId
		const guildMember = body.guildMember as IGuildMember
		ctx.body = await postGuildMemberController(userId, guildId, guildMember)
		ctx.status = 200
	} catch(e: unknown) {
		if (e instanceof Error) ctx.body = { message: e.message }
		ctx.status = 400
	}
})

router.put('/guild-member/:userId/guild/:guildId', async (ctx: Context) => {
	try {
		const userId = ctx.params.userId
		const guildId = ctx.params.guildId
		const body = ctx.request.body as RequestBody
		const guildMember = body.guildMember as IGuildMember

		const guildMemberUpdate = await putGuildMemberController(userId, guildId, guildMember)
		if (!guildMemberUpdate) {
			ctx.body = 'User not found'
			ctx.status = 200
		}
		if (guildMemberUpdate) {
			ctx.body = guildMemberUpdate
			ctx.status = 200
		}
	} catch(e: unknown) {
		if (e instanceof Error) ctx.body = { message: e.message }
		ctx.status = 400
	}
})

export default router