import axios from "axios";

// export default axios.create({
// 	baseURL: "https://v1.nocodeapi.com",
// 	params: {
// 		limit: "4",
// 	},
// });

const apiVersion = "v18.0";

const baseUrl = `https://graph.instagram.com/${apiVersion}`;

export default axios.create({
	baseURL: baseUrl,
});
