import classes from "./Badge.module.scss";

const Badge = (props) => {
	return (
		<div className={classes.badge}>
			<p className={classes.badge__content}>{props.children}</p>
		</div>
	);
};

export default Badge;
