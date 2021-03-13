import { Provider } from 'next-auth/client'

import 'styles/global.scss'

export default function App ({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}
