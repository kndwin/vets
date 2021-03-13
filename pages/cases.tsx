import { useSession } from 'next-auth/client'
import { Layout } from 'components'

export default function Cases() {

  const [ session ] = useSession()

  return (
    <Layout>
			<h1>cases</h1>
		</Layout>
  )
}
