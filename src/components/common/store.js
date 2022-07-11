import axios from 'axios';
import create from 'zustand';

export const useStore = create((set) => ({

	articles: {
			economy:[],
			culture:[],
			society:[],
			sports:[],
			entertain:[],
			politic:[],
			IT:[]
	},

	getArticles: async() => {
		const ecoResponse = await axios.get('http://localhost:8080/economy');
		const culResponse = await axios.get('http://localhost:8080/culture');
		const socResponse = await axios.get('http://localhost:8080/society');
		const spoResponse = await axios.get('http://localhost:8080/sports');
		const entResponse = await axios.get('http://localhost:8080/entertain');
		const polResponse = await axios.get('http://localhost:8080/politics');
		const itResponse = await axios.get('http://localhost:8080/it');

		let it = [];
		let eco = [];
		let cul = [];
		let soc = [];
		let spo = [];
		let ent = [];
		let pol = [];

		for (let x of ecoResponse.data) {
			eco.push(x);
		}
		for (let x of culResponse.data) {
			cul.push(x);
		}
		for (let x of socResponse.data) {
			soc.push(x);
		}
		for (let x of spoResponse.data) {
			spo.push(x);
		}
		for (let x of entResponse.data) {
			ent.push(x);
		}
		for (let x of polResponse.data) {
			pol.push(x);
		}
		for (let x of itResponse.data) {
			it.push(x);
		}
		set({
			articles: {
				IT: it,
				economy: eco,
				culture: cul,
				society: soc,
				sports: spo,
				entertain: ent,
				politic: pol
			}
		});
	}


}))