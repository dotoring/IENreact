import axios from 'axios';
import create from 'zustand';

export const useStore = create((set) => ({

	articles: {
			economy:[],
			global:[],
			culture:[],
			social:[],
			sports:[],
			entertain:[],
			politic:[],
			IT:[]
	},

	getArticles: async() => {
		const response = await axios.get('http://localhost:4000/articles');
		console.log(response.data);
		const obj = Object.values(response.data);
		let eco = [];
		for (let x of obj) {
			eco.push(x);
		}
		set({
			articles: {
				economy: eco
			}
		});
	}


}))