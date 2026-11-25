import { useContext } from 'react'
import { UserNameContext } from './UserNameContext.js'

function UserName() {
  const userName = useContext(UserNameContext)

  return <h1>{userName}</h1>
}

export default UserName
