// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()
import { mongooseConnection } from './db'
import Koa from 'koa'
import { routes } from './routes'
import bodyParser from 'koa-bodyparser'
import json from 'koa-json'
/* import './init'
 */import { koaSwagger } from 'koa2-swagger-ui'

import swaggerJson from './swagger.json'


const { MONGODB_NAME, MONGODB_URL, NODE_ENV } = process.env
const urlMongo = 
NODE_ENV === 'development'
	? `${MONGODB_URL}${MONGODB_NAME}`
	: `${MONGODB_URL}${MONGODB_NAME}`

mongooseConnection(urlMongo).catch((err) => console.log(err))

export const app = new Koa()

app.use(async (ctx, next) => {
	const start = new Date()
	await next()
	const ms = new Date().valueOf() - start.valueOf()
	console.log(`${ctx.method} ${ctx.url} - ${ms}`)
})

app.use(json()).use(bodyParser()).use(routes.routes()).use(routes.allowedMethods())

app.use(
	koaSwagger({
		routePrefix: '/swagger',
		swaggerOptions: {
			spec: swaggerJson
		},
	}),
)

const PORT = process.env.PORT || 4100

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
