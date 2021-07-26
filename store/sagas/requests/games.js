import axios from "axios";

export const requestGetGameIds = () => {
	return axios.request({
		method: "get",
		url: "https://api.steampowered.com/ISteamApps/GetAppList/v2/",
	});
};

export const requestGetGame = (appId) => {
	console.log("In Request GAME! - " + appId);
	return axios.request({
		method: "get",
		url: `https://store.steampowered.com/api/appdetails?appids=` + appId,
	});
};
