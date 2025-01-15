import { Link } from 'react-router-dom'

function NavBar() {
  return (
   <nav className='bg-[#1F2937] p-4'>
    <div className='container mx-auto flex justify-between items-center'>
      <h1 className='text-white text-xl font-bold'>CrowdFunding</h1>
      <div className='space-x-4'>
        <Link to="/" className='text-white hover:underline'>
          Home
        </Link>

        <Link to="/create" className='text-white hover:underline'>
          Create Campaign
        </Link>

        <Link to="/users" className='text-white hover:underline'>
          Users
        </Link>

        <button className='text-white bg-black hover:bg-gray-700 rounded-lg p-2'>
            Register
        </button>
      </div>
    </div>
   </nav>
  )
}

export default NavBar
