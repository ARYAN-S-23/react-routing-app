import { useParams, Link } from 'react-router-dom'
import { users } from '../data/users'

export default function UserDetail() {
  const { id } = useParams()
  const user = users.find(u => u.id === Number(id))

  if (!user) return <h2>User Not Found</h2>

  return (
    <div>
      <h1>User Detail</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <Link to="/users">Go Back</Link>
    </div>
  )
}