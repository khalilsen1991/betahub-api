import Router from 'koa-router'
import keys from './keys'
import guildMember from './guildMember'
import guilds from './guilds'
import users from './users'

const routes = new Router({})
const nestedRoutes = [keys, guildMember, guilds, users]

for (const router of nestedRoutes) {
	routes.use(router.routes(), router.allowedMethods())
}

export { routes }
