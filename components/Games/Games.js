import classes from "./Games.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getGames, setAreGamesLoaded } from "../../store/games";
import { useEffect, useState } from "react";
import GameList from "../GameList";

const Games = () => {
	const dispatch = useDispatch();
	const areGamesLoaded = useSelector((state) => state.games.areGamesLoaded);
	const games = useSelector((state) => state.games.games);

	useEffect(() => {
		if (!areGamesLoaded) {
			dispatch(getGames(10));
			dispatch(setAreGamesLoaded(true));
		}
	}, []);

	const reloadGamesHandler = () => {
		dispatch(getGames(10));
	};

	return (
		<div className={classes.games}>
			<h1 className={classes.games__pageHeading}>Games</h1>
			{areGamesLoaded ? (
				<button
					onClick={reloadGamesHandler}
					className={classes.games__reload}
				>
					Reload Games
				</button>
			) : null}
			{games ? <GameList games={games} /> : <p>Loading...</p>}
		</div>
	);
};

export default Games;
