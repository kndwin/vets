import styles from './Table.module.scss'

export default function Tables ({
	data
}: {
	data: any
}) {
	console.log(data)
	return (
		<div className={styles.border}>
			{data.map(row => (
				<div className={styles.row}>
					<div className={styles.rowItem}>
						{row.plate}
					</div>
					<div className={styles.rowItem}>
						{row.amount}
					</div>
				</div>
			))}		
		</div>
	)
}
