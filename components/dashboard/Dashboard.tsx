import styles from './Dashboard.module.scss'
import { useSession } from 'next-auth/client'

export default function Dashboard () {

	const [ session ] = useSession()

	return (
		<>
			<h1 className="title">
				Welcome {session.user.name}
			</h1>
		</>
	)
}
