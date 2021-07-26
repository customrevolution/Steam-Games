import classes from "./GameItem.module.scss";

const GameItem = ({ game }) => {
	return (
		<div className={classes.game}>
			<div className={classes.game__header}>
				<p>{game.name}</p>
			</div>

			<div className={classes.game__image}>
				<img src={game.header_image} alt="" />
			</div>

			<div className={classes.game__details}>
				<p>{game.short_description}</p>
				{game.genres.map((genre) => (
					<span className={classes.game__details__badge}>
						{genre.description}
					</span>
				))}
			</div>

			<div className={classes.game__movie}>
				{game.movies ? (
					<video width="1093" height="821" controls>
						<source src={game.movies[0].mp4.max} />
					</video>
				) : null}
			</div>
		</div>
	);
};
export default GameItem;
