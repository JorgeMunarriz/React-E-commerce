
import { Link } from 'react-router-dom'

export const ErrorMessage = () => {
  return (
    <div className='d-flex flex-column container p-5 m-5 min-vh-45 align-items-center justify-content-center'>
     <h2>ErrorMessage: There are items in the cart, please choose one.</h2> 
     <Link to={"/categoriespage"} className='btn btn-secondary'>Categories </Link>
    </div>
  )
}
