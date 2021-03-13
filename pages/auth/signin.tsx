import { providers, signIn } from 'next-auth/client'
import { Providers } from 'next-auth/providers'
import { csrfToken } from 'next-auth/client'

import styles from 'styles/signin.module.scss'
import { Button, Layout } from 'components'

export default function SignIn({ 
	providers,
	csrfToken
} : {
	providers: Providers,
	csrfToken: string
}) {
  return (
    <Layout isSignIn={true}>
			<div className={styles.container}>
				{Object.values(providers).map(provider => (
					<div key={provider.name}>
						{provider.name == "Credentials" ?
							<form method="post" 
								action="/api/auth/callback/credentials"
								className={styles.form}
							>
								<br />
								<br />
								<h1>
									Login with Credentials
								</h1>
								<input name="csrfToken" 
									type="hidden" 
									defaultValue={csrfToken}
								/>
								<input name="username" 
									type="text"
									placeholder="username"
								/>
								<input name="password" 
									type="password"
									placeholder="********"
								/>
								<Button type="submit">
									Sign in
								</Button>
							</form>
						:	
						<div>
							<h1>
								Login
							</h1>
						<Button onClick={() => signIn(provider.id)}>
							Sign in with {provider.name}
						</Button>
						</div>
						}
					</div>
				))}
			</div>
    </Layout>
  )
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(),
    csrfToken: await csrfToken(context)
  }
}
