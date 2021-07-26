import Game from "../Game";
import classes from "./GameList.module.scss";

const GameList = ({ games }) => {
	return (
		<div className={classes.gamelist}>
			{games.map((game) => (
				<Game
					name={game.name}
					image={game.header_image}
					genres={game.genres}
					appid={game.steam_appid}
					key={game.steam_appid}
				/>
			))}
		</div>
	);
};

export default GameList;
