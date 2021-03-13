import styles from './Button.module.scss'

export default function Button ({
	children,
	color,
	onClick,
	type,
}: {
	children: React.ReactNode
	color?: String,
	onClick?: React.MouseEventHandler<HTMLButtonElement>,
	type?: 'button' | 'submit' | 'reset',
}) {

	function getCssColor (color: String) {
		let css: String

		switch (color) {
			case "primary":
				css = styles.primary
				break;
			default:
				css = styles.default
		}
		return css
	}

	return (
		<button className={`${getCssColor(color)} ${styles.button}`}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	)
}
