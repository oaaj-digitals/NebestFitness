import axios from "axios";

export default axios.create({
	baseURL: "https://v1.nocodeapi.com/nebestfitness/instagram",
	params: {
		limit: "3",
	},
});
