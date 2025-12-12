import { Link } from 'react-router-dom'
import { users } from '../data/users'

export default function Users() {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            <Link to={`/users/${u.id}`}>{u.name} - {u.email}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  )
}