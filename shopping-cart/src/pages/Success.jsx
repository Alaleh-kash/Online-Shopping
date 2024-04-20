import { Link } from 'react-router-dom'

function Success() {
  return (
    <div className='d-flex align-items-center justify-content-center flex-column my-4'>
    <h2>Order Succssesfully</h2>
    <Link to='/' className='btn btn-light mt-2'>
        Return to shop
    </Link>
    </div>
    )
}

export default Success