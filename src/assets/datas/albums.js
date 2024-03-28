import { tracks } from './tracks.js';

// images
import collaborations from '../images/collaborations.jpg';
import bouche from '../images/bouche.jpg';
import nardinoumouk from '../images/nardinoumouk.jpg';
import popourisme from '../images/popourisme.jpeg';
import musik from '../images/musik.jpg';

export const albums = [
	{
		id: 1,
		name: 'Musik d\'ascenceur pour kages d\'eskaliers',
		band: 'Karlit & Kabok',
		year: 2008,
		cover: musik,
		songs: [
			tracks.lamoustafette,
			tracks.jaipasdsous,
			tracks.party,
			tracks.onestpasmarrant
		],
	},
	{
		id: 2,
		name: 'Popourisme',
		band: 'Karlit & les Dolfinz',
		year: 2020,
		cover: popourisme,
		songs: [
			tracks.canide,
			tracks.tristemalentendu,
			tracks.faisdumenage,
			tracks.mangedespez
		]
	},
	{
		id: 3,
		name: 'Nardinoumouk',
		band: 'Eddy Woogy (& son Karlit)',
		year: 2022,
		cover: nardinoumouk,
		songs: [
			tracks.nardinoumouk,
			tracks.lamemebassine,
			tracks.immunisonsnous,
			tracks.jetaimenti
		]
	},
	{
		id: 4,
		name: 'Collaborations hasardeuses, enregistrements par surprise et autres curiosités',
		band: 'Karlit',
		year: 2018,
		cover: collaborations,
		songs: [
			tracks.cannabidiol,
			tracks.slaves,
			tracks.cafaitrien,
			tracks.bien
		]
	},
	{
		id: 5,
		name: 'En vrak',
		band: 'Karlit & Kompagny',
		year: 2023,
		cover: bouche,
		songs: [
			tracks.jmesuisfètoopti,
			tracks.henrydes,
			tracks.kedlagueule,
			tracks.keskia
		]
	},
]