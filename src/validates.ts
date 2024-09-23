import Joi from 'joi'

export const getMemberByIdSchema = Joi.object({
	userId: Joi.string().required(),
	guildId: Joi.string().required(),
})
export const getUserItemsSchema= Joi.object({
	userId: Joi.string().required(),
	guildId: Joi.string().required(),
})

export const keysSchema = Joi.object({
	userId: Joi.string().required(),
	guildId: Joi.string().required(),
	keys: Joi.string().required(),
})

/* Members */
export const membersSchema = Joi.object({
	joinedTimestamp: Joi.number().allow(null),
	premiumSinceTimestamp: Joi.number().allow(null),
	nickname: Joi.string().allow(null),
	pending: Joi.boolean().allow(null),
	communicationDisabledUntilTimestamp: Joi.number().allow(null),
	roles: Joi.array().allow(null),
	avatar: Joi.string().allow(null),
	leftGuildDate: Joi.date().allow(null),
	createdAt: Joi.date().allow(null),
	updatedAt: Joi.date().allow(null),
})

/* Guilds */
export const guildsSchema = Joi.object({
	id: Joi.string().required(),
	name: Joi.string().required(),
	icon: Joi.string().allow(null),
	features: Joi.array().allow(null),
	available: Joi.boolean().allow(null),
	shardId: Joi.number().allow(null),
	banner: Joi.string().allow(null),
	description: Joi.string().allow(null),
	verificationLevel: Joi.number(),
	vanityURLCode: Joi.string().allow(null),  
	memberCount: Joi.number().allow(null),
	systemChannelId: Joi.string().allow(null),
	joinedTimestamp: Joi.number().allow(null),
	enabled: Joi.boolean()
})


/* Users */

export const PostUsersSchema = Joi.object({
	id: Joi.string().required(),
	bot: Joi.boolean().allow(null),
	system: Joi.boolean().allow(null),
	flags: Joi.number().allow(null),
	username: Joi.string().allow(null),
	discriminator: Joi.string().allow(null),
	description: Joi.string().allow(null),
	avatar: Joi.string().allow(null),
	guild: guildsSchema
})
