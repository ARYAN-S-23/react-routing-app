import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>About This App</h1>
      <p>This app showcases multi-page navigation using React Router.</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}