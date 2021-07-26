import { takeLatest } from "@redux-saga/core/effects";
import { handleGetGames } from "./handlers/games";
import { GET_GAMES } from "../games";

export function* watcherSaga() {
	yield takeLatest(GET_GAMES, handleGetGames);
}
