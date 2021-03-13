import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link'

import styles from './Layout.module.scss'
import { Button } from 'components'

export default function Layout ({
	children,
	isSignIn
} : {
	children: React.ReactNode
	isSignIn?: boolean
}) { 

  const [ session ] = useSession()

	return (
		<div className={styles.container}>
			<div className={styles.content}>
			<header className={styles.header}>
				{!isSignIn && !session &&
					<>
						<h1>
							OrionNT
						</h1>
						<Button onClick={() => signIn()}>
							Sign in
						</Button>
					</>
				}
				{!isSignIn && session &&
					<>
						<div className={styles.leftSide}>
							<Link href="/">
								<a>Dashboard</a>
							</Link>
							<Link href="/cases">
								<a>Cases</a>
							</Link>
						</div>
						<div className={styles.rightSide}>
							<img className={styles.icon}
								src={session.user.image} 
								alt="Profile image" 
							/>
							<Button onClick={() => signOut()}>
								Sign out
							</Button>
						</div>
					</>
				}
				</header>
				<main className={styles.main}>
					{children}
				</main>
			</div>
		</div>
	)
}
