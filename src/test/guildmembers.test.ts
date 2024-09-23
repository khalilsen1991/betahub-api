import supertest from 'supertest'
import { app } from '..'

describe('GET /guild-member/:memberId/guild/:guildId', () => {
	it('should return guild member', async () => {
		await supertest(app.callback()).get('/guild-member/1/guild/1').expect(404)
	})
})