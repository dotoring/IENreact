import axios from 'axios';
import create from 'zustand';

export const useStore = create((set) => ({

	articles: {
			economy:[],
			global:[],
			culture:[],
			society:[],
			sports:[],
			entertain:[],
			politic:[],
			IT:[]
	},

	getArticles: async() => {
		const response = await axios.get('http://localhost:4000/articles');
		console.log(response.data);
		let it = [];
		let eco = [];
		let glo = [];
		let cul = [];
		let soc = [];
		let spo = [];
		let ent = [];
		let pol = [];
		for (let x of response.data.IT) {
			it.push(x);
		}
		for (let x of response.data.economy) {
			eco.push(x);
		}
		for (let x of response.data.global) {
			glo.push(x);
		}
		for (let x of response.data.culture) {
			cul.push(x);
		}
		for (let x of response.data.society) {
			soc.push(x);
		}
		for (let x of response.data.sports) {
			spo.push(x);
		}
		for (let x of response.data.entertain) {
			ent.push(x);
		}
		for (let x of response.data.politics) {
			pol.push(x);
		}
		set({
			articles: {
				IT: it,
				economy: eco,
				global: glo,
				culture: cul,
				society: soc,
				sports: spo,
				entertain: ent,
				politic: pol
			}
		});
	}


}))