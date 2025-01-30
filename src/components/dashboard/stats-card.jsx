import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'

import { Separator } from '@/components/ui/separator'
function StatsCard ({ overview }) {
  return (
    <Card className=''>
      <CardHeader>
        <div className='flex justify-between items-center'>
          <div className='space-y-2'>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Cost Management</CardDescription>
          </div>
          <div>
            <Button  variant="default">Export</Button>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className='w-full mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
        {overview?.map((item, val) => {
          return (
            <Card key={val} className={`${item.color} bg-opacity-20 pt-3 border-0`}>
              <CardContent className='pb-3'>
                <div className='mb-2'>
                  <div className={`${item.color}  w-12 h-12 rounded-full text-white flex items-center justify-center`}>
                    <item.icon size={30} />
                  </div>
                  <Separator className={`my-3 ${item.color} bg-opacity-50`}/>
                  <div className='my-1'>
                    <CardTitle className=''>{item.total}</CardTitle>
                  </div> 
                  <Label className='uppercase'>{item.title}</Label>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default StatsCard
