
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext.jsx'

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header>
      <h1>Theme Switcher</h1>
      <button
        type="button"
        onClick={toggleTheme}
        aria-pressed={theme === 'dark'}
      >
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
    </header>
  )
}

export default Header