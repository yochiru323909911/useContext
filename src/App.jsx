import { useContext } from 'react'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import { UserNameContext } from './UserNameContext.js'
import { ThemeContext } from './ThemeContext.jsx'
import './App.css'

function App() {
  const themeContext = useContext(ThemeContext)
  const { theme } = themeContext

  return (
    <div className="app" data-theme={theme}>
      <Header />
      <UserNameContext.Provider value="John Doe">
        <Content />
      </UserNameContext.Provider>
      <Footer />
    </div>
  )
}

export default App
