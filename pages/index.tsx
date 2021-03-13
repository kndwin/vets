import { useSession } from 'next-auth/client'
import {Layout, Dashboard, Welcome} from 'components'

export default function Index() {

  const [ session ] = useSession()

  return (
    <Layout>
				{!session && <>
					<Welcome/>
				</>}
				{session && <>
					<Dashboard/>	
				</>}
		</Layout>
  )
}
