import { Outlet } from 'react-router-dom'
import { plan} from '@/assets'

function AuthLayout () {
  return (
    <div className=' w-full flex justify-between px-4 md:px-0'>
      <div className='w-full md:w-1/2 flex justify-around min-h-screen items-center overflow-auto'>
        <Outlet />
      </div>
      <div className='w-1/2 h-screen object-cover overflow-hidden hidden md:block '>
        <div className='w-full h-full object-cover'>
          <img
            src={plan}
            alt='plan'
            className='ovject-cover w-full min-h-screen'
          />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
