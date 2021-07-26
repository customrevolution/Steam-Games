export const GET_GAMES = "GET_GAMES";
export const SET_GAMES = "SET_GAMES";
export const GET_ARE_GAMES_LOADED = "GET_ARE_GAMES_LOADED";
export const SET_ARE_GAMES_LOADED = "SET_ARE_GAMES_LOADED";

export const getGames = (numberOfGames) => ({
	type: GET_GAMES,
	numberOfGames,
});

export const setGames = (games) => ({
	type: SET_GAMES,
	games,
});

export const getAreGamesLoaded = () => ({
	type: GET_ARE_GAMES_LOADED,
});

export const setAreGamesLoaded = (areGamesLoaded) => ({
	type: SET_ARE_GAMES_LOADED,
	areGamesLoaded,
});

const initialState = {
	games: undefined,
	areGamesLoaded: false,
};

const gamesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_GAMES:
			const { games } = action;
			return { ...state, games };
		case SET_ARE_GAMES_LOADED:
			const { areGamesLoaded } = action;
			return { ...state, areGamesLoaded };
		default:
			return state;
	}
};

export default gamesReducer;
