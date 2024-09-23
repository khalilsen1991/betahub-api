import { IMonsters } from '../types'

export = () => {
	if (process.env.NODE_ENV === 'development'){
		return [
			{
				type: 'Boss',
				name: 'Ghostface',
				image: 'https://cdn.discordapp.com/attachments/619605633305673729/1035232711201275915/tumblr_0b65af935a87b4093643573408d2f6ac_b6d95aa1_500-2-removebg-preview.png',
				hits: 1,
				stars: 1,
				color: 6449776,
				value: 10,
				timeInMs: 300000
			},
			{
				type: 'Boss',
				name: 'Brudda sin dormir',
				image: 'https://cdn.discordapp.com/attachments/538809752549982248/1035322703701352529/330x192.png',
				hits: 1,
				stars: 1,
				color: 6449776,
				value: 10,
				timeInMs: 300000
			},
			{
				type: 'Boss',
				name: 'Leatherface',
				image: 'https://cdn.discordapp.com/attachments/619605633305673729/1035285155247575172/tumblr_3b88267ea7700d73faabc4a07413af78_5c6c4b10_500-2__1_-removebg-preview.png',
				hits: 1,
				stars: 1,
				color: 14855459,
				value: 10,
				timeInMs: 300000
			},
			{
				type: 'Boss',
				name: 'Demogorgon',
				image: 'https://cdn.discordapp.com/attachments/619605633305673729/1035328303738916874/6830233.png',
				hits: 1,
				stars: 1,
				color: 12487534,
				value: 10,
				timeInMs: 300000
			},
			{
				type: 'Boss',
				name: 'Jeffrey Hawk',
				image: 'https://cdn.discordapp.com/attachments/619605633305673729/1035324912258252901/dcoxt4s-61fdb150-8ce3-422e-84f4-60faa8afd633-removebg-preview.png',
				hits: 1,
				stars: 2,
				color: 8598066,
				value: 20,
				timeInMs: 300000
			},
			{
				type: 'Boss',
				name: 'El granjero',
				image: 'https://cdn.discordapp.com/attachments/619605633305673729/1035285283698126848/tumblr_5ca6d181ef36f713b3f50347f027fca8_78ecbcb3_540-removebg-preview.png',
				hits: 1,
				stars: 2,
				color: 2262302,
				value: 20,
				timeInMs: 300000
			},
			{
				type: 'Boss',
				name: 'Leatherface',
				image: 'https://cdn.discordapp.com/attachments/619605633305673729/1035234345704751134/tumblr_pwc65uqijh1thr7ppo1_1280-0-removebg-preview.png',
				hits: 1,
				stars: 2,
				color: 14855459,
				value: 20,
				timeInMs: 300000
			},
			{
				type: 'Boss',
				name: 'Caleb Quinn',
				image: 'https://cdn.discordapp.com/attachments/619605633305673729/1035329804750291024/Captura_de_pantalla_2022-10-27_201017-removebg-preview.png',
				hits: 1,
				stars: 2,
				color: 7629413,
				value: 20,
				timeInMs: 300000
			},
			{
				type: 'Boss',
				name: 'Freddy',
				image: 'https://cdn.discordapp.com/attachments/619605633305673729/1035228530918834226/pngwing.com_3.png',
				hits: 1,
				stars: 3,
				color: 15076878,
				value: 30,
				timeInMs: 300000
			},
			{
				type: 'Boss',
				name: 'Amanda Young',
				image: 'https://cdn.discordapp.com/attachments/619605633305673729/1035327022920114226/Imagen_de_WhatsApp_2022-10-27_a_las_19.56.17-removebg-preview.png',
				hits: 1,
				stars: 3,
				color: 16755370,
				value: 30,
				timeInMs: 300000
			},

			{
				type: 'Boss',
				name: 'Pennywise',
				image: 'https://cdn.discordapp.com/attachments/619605633305673729/1035284781748985916/tumblr_7f6d3d208a096c04de1c23230f6358cf_5ca6c5d0_640-removebg-preview.png',
				hits: 1,
				stars: 3,
				color: 15076878,
				value: 30,
				timeInMs: 300000
			},
			{
				type: 'Boss',
				name: 'Michael Myers',
				image: 'https://cdn.discordapp.com/attachments/619605633305673729/1035243407028781117/tumblr_9afff19574c9843aeb2224154cf7c3b8_cc821d77_640-1__1_-removebg-preview.png',
				hits: 10,
				stars: 4,
				color: 14356239,
				value: 60,
				timeInMs: 450000
			},
			{
				type: 'Boss',
				name: 'Victor E Charolette Deshayes',
				image: 'https://cdn.discordapp.com/attachments/619605633305673729/1035329161373438033/Captura_de_pantalla_2022-10-27_200729-removebg-preview.png',
				hits: 10,
				stars: 4,
				color: 8484720,
				value: 60,
				timeInMs: 450000
			},
			{
				type: 'Boss',
				name: 'Jason',
				image: 'https://cdn.discordapp.com/attachments/619605633305673729/1035286238351077446/tumblr_81431b3c2b751df77b618fe8fbd1ab16_987b3f6b_640-0-removebg-preview.png',
				hits: 10,
				stars: 4,
				color: 1195236,
				value: 60,
				timeInMs: 450000
			},
			{
				type: 'Boss',
				name: 'Michael Myers',
				image: 'https://cdn.discordapp.com/attachments/619605633305673729/1035284990671454310/tumblr_a5a3c30e8197e3bd425a54bdb9f0cfa0_12b36850_640-1-removebg-preview.png',
				hits: 10,
				stars: 5,
				color: 85882,
				value: 100,
				timeInMs: 600000
			},
			{
				type: 'Boss',
				name: 'Pinhead',
				image: 'https://cdn.discordapp.com/attachments/619605633305673729/1035266857285980221/tumblr_bcda097029d7501a93d9368fd0e80f64_fae60445_1280-removebg-preview.png',
				hits: 10,
				stars: 5,
				color: 320111,
				value: 100,
				timeInMs: 600000
			},
			{
				type: 'Boss',
				name: 'Piramidhead',
				image: 'https://cdn.discordapp.com/attachments/619605633305673729/1035330770560098434/Captura_de_pantalla_2022-10-27_201336-removebg-preview.png',
				hits: 10,
				stars: 5,
				color: 7368260,
				value: 100,
				timeInMs: 600000
			}] as IMonsters[]
	} else {
		return [
			{
				type: 'Boss',
				name: 'Piramidhead',
				image: 'https://cdn.discordapp.com/attachments/619605633305673729/1035330770560098434/Captura_de_pantalla_2022-10-27_201336-removebg-preview.png',
				hits: 10,
				stars: 5,
				color: 7368260,
				value: 100,
				timeInMs: 600000
			},
		] as IMonsters[]
	}
}