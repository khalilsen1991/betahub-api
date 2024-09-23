export = () => {
	if (process.env.NODE_ENV === 'development') {
		return [
			{
				guildName: 'CFA Test Server',
				guildId: '615683351067623480',
				roleStaffId: '700139623552254022',
				generalChannelsIds: ['963547021246099527', '963547039600345119', '963547061033246741', '963547081698598912'],
				allowChannelsIds: ['963547867639840799']
			},
		]
	} else {
		return [
			{
				guildName: 'FITCHIN',
				guildId: '933752463851413534',
				roleStaffId: '953308391504236616',
				generalChannelsIds: ['1084633393993625622'],
			},
		]
	}
}
