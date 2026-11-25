
import { useContext } from 'react'
import UserName from './UserName.jsx'
import UserGreeting from './UserGreeting.jsx'
import { ThemeContext } from './ThemeContext.jsx'

function Content() {
  const { theme } = useContext(ThemeContext)

  return (
    <main>
      <section className="card">
        <h2>Welcome</h2>
        <UserName />
        <UserGreeting />
      </section>
      <section className="card">
        <h2>Theme</h2>
        <p>Current mode: {theme}</p>
      </section>
    </main>
  )
}

export default Content