import styles from './Welcome.module.scss'

export default function Welcome () {
	return (
		<>
			<h1 className="h1">vietnamese enforcement ticketing system</h1>
			<div className="description">
				<h4>
					Managing tickets made easy
				</h4>
				<img src="/welcome.webp" 
					alt="welcome illustration" 
					className={styles.image}
				/>
			</div>
		</>
	)
}
