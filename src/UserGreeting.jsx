import { useContext } from 'react'
import { UserNameContext } from './UserNameContext.js'

function UserGreeting () {
  const userName = useContext(UserNameContext)

  return <h1>In UserGreeting: {userName}</h1>
}

export default UserGreeting;