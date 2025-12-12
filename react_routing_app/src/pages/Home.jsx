import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Welcome to the React Routing App</h1>
      <p>This project demonstrates basic routing using React Router.</p>
      <Link to="/about">Go to About Page</Link><br />
      <Link to="/users">View Users</Link>
    </div>
  )
}