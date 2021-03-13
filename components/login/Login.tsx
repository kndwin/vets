import styles from './Login.module.scss'
import { Button } from 'components'

export default function Login () {
	return (
		<div className={styles.container}>
			<h1>Login</h1>
			<input type="text" />
			<input type="text" />
			<Button color="primary">
				Login
			</Button>
			<Button>
				Sign up
			</Button>
		</div>
	)
}
