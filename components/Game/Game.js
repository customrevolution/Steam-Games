import Link from "next/link";
import Card from "../base/Card";
import Badge from "../base/Badge";
import classes from "./Game.module.scss";
const Game = ({ name, image, genres, appid }) => {
	return (
		<Card className={classes.game}>
			<Link href={`/games/${appid}`}>
				<div className={classes.game__card}>
					<div className={classes.game__card__image}>
						<img src={image} alt="" />
					</div>

					<p className={classes.game__card__gameTitle}>{name}</p>

					<div className={classes.game__card__genres}>
						{genres
							? genres.map((genre) => (
									<Badge key={genre.id}>
										{genre.description}
									</Badge>
							  ))
							: null}
					</div>
				</div>
			</Link>
		</Card>
	);
};

export default Game;
