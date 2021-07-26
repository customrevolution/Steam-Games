import { call, put } from "@redux-saga/core/effects";
import { setGames } from "../../games";
import { requestGetGameIds, requestGetGame } from "../requests/games";

function getRandomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

export function* handleGetGames(action) {
	const showGamesFromId = getRandomNumber(20, 100000);
	const { numberOfGames } = action;
	const games = [];

	try {
		const response = yield call(requestGetGameIds);
		const { data } = response;
		const apps = data.applist.apps.slice(
			showGamesFromId,
			showGamesFromId + numberOfGames
		);

		for (const app of apps) {
			const res = yield call(requestGetGame, app.appid);
			const newGameData = res.data[`${app.appid}`].data;
			if (newGameData) {
				games.push(newGameData);
			}
		}
		yield put(setGames(games));
	} catch (error) {
		console.log(error);
	}
}
