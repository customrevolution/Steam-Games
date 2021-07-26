import Link from "next/link";
import classes from "./Header.module.scss";

export const Header = () => {
	return (
		<header className={classes.navbar}>
			<Link href="/">
				<div className={classes.navbar__logo}>
					<img
						src="https://community.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
						alt=""
					/>
				</div>
			</Link>

			<div className={classes.navbar__links}>
				<div className={classes.navbar__links__link}>Games</div>
				<div className={classes.navbar__links__link}>About</div>
			</div>
		</header>
	);
};
