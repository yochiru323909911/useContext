
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext.jsx'

function Footer() {
  const { theme } = useContext(ThemeContext)

  return (
    <footer>
      <p>Theme: {theme[0].toUpperCase() + theme.slice(1)}</p>
    </footer>
  )
}

export default Footer