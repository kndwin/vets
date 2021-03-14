import styles from './Dashboard.module.scss'
import { useSession } from 'next-auth/client'

export default function Dashboard () {

	const [ session ] = useSession()

	return (
		<>
			<h1 className="title">
				Welcome {session.user.name}
			</h1>
			<p className="description">
				Elit quam ipsum nemo modi architecto! Quae labore odio eius totam dolorum Eius voluptatibus fuga neque explicabo et. Quos beatae expedita minus laborum rerum tempore, enim Facilis odit fuga ullam cupiditate ad? Quasi cum at molestias vero ipsa? Vero illum consequatur fugiat asperiores repellendus Nesciunt minima officiis explicabo laboriosam cum.
			</p>
			<p className="description">
				Elit quam ipsum nemo modi architecto! Quae labore odio eius totam dolorum Eius voluptatibus fuga neque explicabo et. Quos beatae expedita minus laborum rerum tempore, enim Facilis odit fuga ullam cupiditate ad? Quasi cum at molestias vero ipsa? Vero illum consequatur fugiat asperiores repellendus Nesciunt minima officiis explicabo laboriosam cum.
			</p>
		</>
	)
}
