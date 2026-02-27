import { Link } from "react-router-dom"

function Error404() {
  return (
    <div className='error404'>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to='/'>Go back home</Link>
    </div>
  )
}

export default Error404