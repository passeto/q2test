import '../styles/globals.css'
import '../styles/styles.scss'
import ThemeProviderLayout from '../providers/theme/index'
import { AuthProvider } from '../context/useAuth'
import { PeopleProvider } from '../context/usePeople'


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <PeopleProvider>
      <ThemeProviderLayout>
        <Component {...pageProps} />
      </ThemeProviderLayout>
      </PeopleProvider>
    </AuthProvider>
  )
}

export default MyApp
