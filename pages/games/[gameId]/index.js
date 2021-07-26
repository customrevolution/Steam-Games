import { useRouter } from "next/router";
import Header from "../../../components/Header";
import GameItem from "../../../components/GameItem";
import { useSelector } from "react-redux";

const GamePage = () => {
	const router = useRouter();
	const { gameId } = router.query;
	const games = useSelector((state) => state.games.games);
	const areGamesLoaded = useSelector((state) => state.games.areGamesLoaded);

	const getGame = () => {
		const currentGame = games.filter((game) => game.steam_appid == gameId);
		return currentGame[0];
	};

	return (
		<>
			<Header />
			{areGamesLoaded ? (
				<GameItem game={getGame()} />
			) : (
				<h1>Load the games first!</h1>
			)}
		</>
	);
};
export default GamePage;
