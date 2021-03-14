import { useSession } from 'next-auth/client'

import { Layout, Table } from 'components'

export default function Cases() {

  const [ session ] = useSession()
	const data = [
		{
			plate: "AN1234",
			dueDate: new Date(2020, 1, 1),
			amount: 10.00,
			location: "Townville, NSW",
			status: "Unverified"
		},{
			plate: "AN1234",
			dueDate: new Date(2020, 1, 1),
			amount: 10.00,
			location: "Townville, NSW",
			status: "Unverified"
		},{
			plate: "AN1234",
			dueDate: new Date(2020, 1, 1),
			amount: 10.00,
			location: "Townville, NSW",
			status: "Unverified"
		},{
			plate: "AN1234",
			dueDate: new Date(2020, 1, 1),
			amount: 10.00,
			location: "Townville, NSW",
			status: "Unverified"
		}
	]


  return (
    <Layout>
			<Table data={data}/>
		</Layout>
  )

}
