import { Slider } from '@/components/ui/slider'
import { MoveUp, MoveDown } from 'lucide-react'

function RangeLable (props) {

  return (
    <div className='space-y-1 xl:space-y-4 w-auto'>
      <div className='flex justify-between items-center'>
        <div className=' font-medium'>{props?.label}</div>
        <div className='flex items-center justify-between gap-4 w-[140px]'>
          <div className='flex gap-4'>
            {/* <p className='text-muted-foreground'>{props?.value}</p> */}
            {/* <p className='text-muted-foreground'>{props?.unit}</p> */}
          </div>
           <p className='text-muted-foreground'>${props?.value}</p>
        </div>
      </div>
      <Slider defaultValue={[props?.value]} max={100} step={1} />
    </div>
  )
}

export default RangeLable
