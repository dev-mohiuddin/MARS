import { Search } from 'lucide-react'
import { ModeToggle } from '@/components/theme/mode-toggle'
import { AircraftSwitcher } from './aircraft-switcher'

function Navbar () {
  return (
    <div className=' w-full border-b bg-background'>
      <div className='flex gap-2 md:gap-4 w-full h-14 items-center justify-end px-4 md:px-6'>
        {/* <div className='flex items-center gap-2 border rounded-full w-[200px] md:w-[400px] px-3'>
          <Search className='w-5 h-5' />
          <input
            type='text'
            name=''
            placeholder='Search here'
            className='h-10 flex-1 border-0 outline-0 bg-transparent'
          />
        </div> */}
        <ModeToggle />
        <div>
          <AircraftSwitcher />
        </div>
      </div>
    </div>
  )
}

export default Navbar
