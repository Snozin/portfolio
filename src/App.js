import Layout from './components/layout/Layout'
import { GlobalStyles } from './styles/globalStyles'
import Header from './components/header/Header'
import Main from './components/main/Main'

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Header />
        <Main />
      </Layout>
    </>
  )
}

export default App
