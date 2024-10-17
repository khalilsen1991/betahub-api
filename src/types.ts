import mongoose, { Document, Model, ObjectId, Schema } from 'mongoose'

export const GuildMemberSchema = {
	guildId: { type: Schema.Types.ObjectId },
	userId: { type: Schema.Types.ObjectId },
	joinedTimestamp: { type: Number},
	premiumSinceTimestamp: { type: Number},
	nickname: { type: String},
	roles: [{ type: String}] ,
	avatar: { type: String},
	createdAt: { type: Date },
	updatedAt: { type: Date }
}

export const GuildSchema = {
	id:{ type: String },
	name: { type: String },
	icon: { type: String },
	features: [],
	available: { type: Boolean },
	shardId: { type: { type: Number } },
	banner: { type: String },
	description: { type: String },
	verificationLevel:{ type: Number },
	vanityURLCode: { type: String },
	memberCount: { type: Number },
	systemChannelId: { type: String },
	joinedTimestamp: { type: Number },
	logsChannelId: { type: String },
	enabled: { type: Boolean, default: true },
}


export const IUserSchema = {
	id: { type: String },
	bot: { type: Boolean },
	system: { type: Boolean },
	flags: { type: Number },
	username: { type: String },
	discriminator: { type: String },
	avatar: { type: String },
}

export interface IKeys {
	guildId: Schema.Types.ObjectId,
	userId: Schema.Types.ObjectId,
	guildMemberId: Schema.Types.ObjectId,
	keys: string,
	enabled: boolean,
	createdAt: Date,
	updatedAt: Date
}

export interface UserSchema {
	id: string ,
	bot: boolean ,
	system: boolean ,
	flags:number ,
	username: string ,
	discriminator: string ,
	avatar: string ,
}


export interface IGuildMember {
	guildId: Schema.Types.ObjectId,
	userId: Schema.Types.ObjectId,
	joinedTimestamp: number,
	premiumSinceTimestamp: number,
	nickname: string,
	roles: [string] ,
	avatar: string,
	createdAt: Date ,
	updatedAt: Date 
}

export interface IConfigGuilds {
	guildName: string;
	guildId: string;
	roleStaffId: string;
	generalChannelsIds: [string];
	allowChannelsIds: [string];
	verificationRoleId: string;
	enabled?: boolean;
	channelEventLog: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IGuild {
	id: string,
	name: string,
	icon?: string,
	features?: [],
	available?: boolean,
	shardId?: number,
	banner?: string,
	description?: string,
	verificationLevel?: number,
	vanityURLCode?: string,
	memberCount?: number,
	systemChannelId?: string,
	joinedTimestamp?: number,
	enabled?: boolean,
	guildMember?: IGuildMember
}

export interface IUser {
	id: string,
	bot: boolean,
	system: boolean,
	flags: number,
	username: string,
	discriminator: string ,
	avatar: string,
	guilds: [typeof GuildSchema],
	totalPointBoss: number,
	timeInVoiceChannel: number
}

export interface IUserToDB {
	id: string,
	bot: boolean,
	system: boolean,
	flags: number,
	username: string,
	discriminator: string ,
	avatar: string,
	guild: IGuild,
}

export interface RequestBody {
	user?: IUser,
	guild?: IGuild,
	guildMember?: IGuildMember,
	guildId?: string,
	id?: string,
	enabled?: boolean
	keys: string
	timestamp?: number
}

export interface IGuildMember {
	userId: Schema.Types.ObjectId,
	guildId: Schema.Types.ObjectId,
	joinedTimestamp: number,
	premiumSinceTimestamp: number,
	nickname: string,
	roles: [string],
	avatar: string,
	createdAt: Date,
	updatedAt: Date
}

export interface IKeysDocument extends IKeys, Document {}
export type IKeysModel = Model<IKeysDocument>

export interface IConfigGuildsDocument extends IConfigGuilds, Document {}
export type IConfigGuildsModel = Model<IConfigGuildsDocument>

export interface IGuildMemberDocument extends IGuildMember, Document {}
export type IGuildMemberModel = Model<IGuildMemberDocument>

export interface IUserDocument extends IUser, Document {
	id: string
}
export type IUserModel = Model<IUserDocument>

export interface IUserToDBDocument extends IUserToDB, Document {
	id: string
}
export type IUserToDBModel = Model<IUserToDBDocument>
